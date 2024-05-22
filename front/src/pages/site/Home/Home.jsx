import React, { useContext } from "react";
import Cards from "../../../components/site/Cards/Cards";
import MainContext from "../../../context/context";
import Helmet from "react-helmet";
import "./Home.css";

const Home = () => {
  const { data, setData, search, setSearch, sort, setSort } =
    useContext(MainContext);

  return (
    <div className="home__sec">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form action="#">
              <input
                className="search"
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="sort__buttons">
              <button onClick={() => setSort({ field: "title", asc: true })}>
                A-Z
              </button>
              <button onClick={() => setSort({ field: "title", asc: false })}>
                Z-A
              </button>
              <button onClick={() => setSort(null)}>Default</button>
            </div>
          </div>
        </div>
      </div>
      <Cards
        cards={data
          .filter((x) => x.title.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) => {
            if (!sort) {
              return 0;
            } else if (sort.asc == true) {
              return a[sort.field] > b[sort.field]
                ? 1
                : b[sort.field] > a[sort.field]
                ? -1
                : 0;
            } else if (sort.asc == false) {
              return a[sort.field] < b[sort.field]
                ? 1
                : b[sort.field] < a[sort.field]
                ? -1
                : 0;
            }
          })}
      />
    </div>
  );
};

export default Home;
