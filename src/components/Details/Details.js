import React, {useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const { singleId } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${singleId}`)
            .then(res=>res.json())
            .then(json=>setDetails(json))
    },[singleId])
  return (
      <div>
          <h2>Title {details.title}</h2>
          <h3>Product Code {details.id}</h3>
          <p>Price {details.price}$</p>
    </div>
  );
};

export default Details;
