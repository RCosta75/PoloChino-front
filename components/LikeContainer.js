import React from 'react'
import Card from './productContainer/Card';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function LikeContainer() {

    const [poloData, setPoloData] = useState([]);

    const user = useSelector((state) => state.user.value);
  
    useEffect(() => {
      fetch(`http://localhost:3000/likes/display/${user.token}`)
        .then((response) => response.json())
        .then((data) => {
          setPoloData(data.likes);
          console.log(poloData);
        });
    }, []);

    const poloProduct =  poloData.map((polo, i) => {
        return (
          <div  >
              <Card key={i} polo={polo} />
          </div>
        );
      });


  return (
    <div className=" pt-20 px-11 grid grid-cols-4 gap-8">
      {poloProduct}
    </div>
  )
}
