import React,{useEffect,useState} from 'react'

export default function TopSales() {
  const [list,setList] = useState([]);
  const getData = async()=>{
    try{
        const resp = await fetch('http://localhost:5000/top_5_sales');
        const data = await resp.json();
        console.log(data);
        const strDescending = [...data]
        .sort((a, b) =>
        b.Amount - a.Amount
  );
  console.log(strDescending);
        setList(strDescending.slice(0 , 5))
    }catch(error){
        console.log(error);
    }
}
useEffect(()=>{
  getData();
},[]);

return (
    <div className='container'>
            <h2 className=' text-center mt-5 fw-bold'>Top 5 Sales</h2>
            <table className="table table-dark table-striped mt-5">
   
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Product name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                     list.map((item)=>(
                      <tr key = {item._id}>
                    <th scope="row">{item._id}</th>
                    <td>{item.Product_Name}</td>
                    <td>{item.Quantity}</td>
                    <td>{item.Amount}</td>
                    </tr>
                     ))}
                    
                </tbody>
            </table>
    </div>
  )
}
