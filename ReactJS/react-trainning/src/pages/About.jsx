import React, { useState } from 'react';

function About() {  

  const infos = {name: "Vũ",age: 18,address: "Hồ chí minh"};

  const gifts = [
    {name: 'A', price: 18000},
    {name: 'B', price: 800000},
    {name: 'C', price: 95000}
  ]

  const [info, setinfo] = useState(infos);
  const [count, setcount] = useState(0);
  const [gift, setGift] = useState();
  
  const handleUpdate = () => {
    setinfo( prev => ({
      ...prev, 
      major: "DEV"
    }))
  }

  const reverse = () => {
    setinfo({
      ...infos
    })
  } 

  const renderGift = () => {
    const index = Math.floor(Math.random() * gifts.length)
    console.log(gifts[index].name)
    setGift(gifts[index].name)
  }

  return(
    <div>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Change</button>
      <button onClick={reverse}>Reverse</button>


      <h1>{count}</h1>
      <button onClick={() => (setcount(count+1))}>+</button>
      <button onClick={() => (setcount(count-1))}>-</button>


      <h1> {gift || 'Chưa có phần thưởng'}</h1>
      <button onClick={renderGift}>Lấy thưởng</button>     
    </div>
  );
}

export default About;
