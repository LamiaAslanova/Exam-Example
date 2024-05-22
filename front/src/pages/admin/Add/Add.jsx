import React, { useContext } from "react";
import { Formik } from "formik";
import axios from "axios";
import MainContext from "../../../context/context";
import { Helmet } from "react-helmet";
import './Add.css'

const Add = () => {
  const { data, setData } = useContext(MainContext);

  return (
    <div className="add__div">
      <Helmet>
        <title>Add Page</title>
      </Helmet>
      <Formik
        initialValues={{ title: "", image: "", desc: "" }}
        validate={(values) => {}}
        onSubmit={(values, { setSubmitting }) => {
          axios
            .post("http://localhost:8080/clothes", { ...values })
            .then((res) => {
              console.log(res.data);
              setData([...res.data]);
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <input
              type="text"
              name="image"
              placeholder="Image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
            />
            <input
              type="text"
              name="desc"
              placeholder="Description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.desc}
            />
            <button type="submit" onClick={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Add;
