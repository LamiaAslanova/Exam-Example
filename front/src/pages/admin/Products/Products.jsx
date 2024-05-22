import React, { useContext } from "react";
import MainContext from "../../../context/context";
import Table from "../../../components/admin/Table/Table";
import { Helmet } from "react-helmet";
import './Products.css'

const Products = () => {
  const { data, setData } = useContext(MainContext);

  return (
    <div className="prod__div">
      <Helmet>
        <title>Products</title>
      </Helmet>
      <Table infos={data} />
    </div>
  );
};

export default Products;
