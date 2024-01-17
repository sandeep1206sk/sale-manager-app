import React from "react";

export default function TotalRevenue() {
  const getData = async () => {
    try {
      const resp = await fetch("http://localhost:5000/today_total_revanue");
      const data = await resp.json();
      const myJSON = JSON.stringify(data);
      localStorage.setItem("testJSON", myJSON);
      let amount = localStorage.getItem("testJSON");
      let obj = JSON.parse(amount);
      document.getElementById("demo").innerHTML = "$" + obj.revenue;
    } catch (error) {
      console.log(error);
    }
  };
  getData();

  return (
    <div>
      <h2 className=" text-center mt-5 fw-bold">Total Revenue</h2>
      <h3 className=" text-center mt-5 fw-bold" id="demo">
        {" "}
      </h3>
    </div>
  );
}
