import React,{useState } from 'react'

export default function AddSales() {
  const [Product_Name,setProduct_Name]=useState("");
  const [Quantity,setQuantity]=useState("");
  const [Amount,setAmount]=useState("");
 

  const handlesubmit =async(e)=>{
    if(Product_Name==="" || Quantity===""|| Amount===""){
        alert('please enter all input')
    }else{
        e.preventDefault();
        console.log({Product_Name,Quantity,Amount});
        try {
            const resp =await fetch('http://localhost:5000/',{
            method:'post',
            body:JSON.stringify({Product_Name,Quantity,Amount}),
            headers:{'content-type':'application/json'}
        });
        if(resp.status===200){
          alert('add succesfull')
          
         
        }
        } catch (error) {
            console.log(error)
        }}
    };
    


  return (
    <div>
        <div>
         <div className="row">
        <div className="col-md-4 "></div>
        <div className="col-md-4 ">
        <h2 className=' text-center mt-5 fw-bold'>Add Sales</h2>
        <form className=" container mt-5 " onSubmit={handlesubmit} >
                 
                <div className="mb-3">
                     <label  className="form-label fw-bold">Product Name</label>
                      <input type="text" className="form-control border-4 border-dark"  placeholder="enter your product name"value={Product_Name} onChange={(e)=>setProduct_Name(e.target.value)} />
                </div>
                <div className="mb-3">
                     <label  className="form-label fw-bold">Quantity</label>
                      <input type="number" className="form-control border-4 border-dark" placeholder="enter your quantity" value={Quantity} onChange={(e)=>setQuantity(e.target.value)}/>
                </div>
                <div className="mb-3">
                     <label  className="form-label fw-bold">Amount</label>
                      <input type="number" className="form-control border-4 border-dark"  placeholder="enter your amount" value={Amount} onChange={(e)=>setAmount(e.target.value)}/>
                </div>

            <button type="submit" className="btn btn-outline-dark border-4 fw-bold" >Add</button>
           
        </form>
        </div>
        <div className="col-md-4 "></div>
    </div>
    </div>
    </div>
  )
}
