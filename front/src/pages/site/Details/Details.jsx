import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";

const Details = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/clothes/${id}`).then((res) => {
      console.log(res.data);
      setItem(res.data);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>{`${item.title}`}</title>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img width="500px" src={item.image} alt="" />
          </div>
          <div className="col-6">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
