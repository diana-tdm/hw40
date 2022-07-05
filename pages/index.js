import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Search from "../components/Search";
import List from "../components/List";
import Modal from "../components/Modal";

const APIKEY = "bcab767d";
const API = `https://www.omdbapi.com/?apikey=${APIKEY}&`;

export default function App() {
  const [films, setFilms] = React.useState([]);
  const [details, setDetails] = React.useState({});
  const [show, setShow] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);

  async function fetchFilms(string, page) {
    if (string === "") {
      return;
    }
    const type = "";
    const APISEARCH = API + "s=" + string + "&type=" + type + "&page=" + page;
    const data = await fetch(APISEARCH);
    const result = await data.json();
    if (page > 1) {
      setFilms([...films, ...result.Search]);
      console.log(2);
    } else {
      setFilms(result.Search);
    }
    console.log(string);
    setSearch(string);
    setPage(page + 1);
  }

  async function onDetails(id) {
    const APIDETAILS = API + "i=" + id;
    const data = await fetch(APIDETAILS);
    const result = await data.json();

    setShow(true);
    setDetails(result);
  }

  function loadNext() {
    console.log(search, page);
    fetchFilms(search, page);
  }

  function loadFirst(search) {
    fetchFilms(search, 1);
  }

  return (
    <div className="wrap">
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Homework JSON, Ajax</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Search onSearch={loadFirst} />
      <List films={films} onDetails={onDetails} />
      <Modal details={details} active={show} onClose={() => setShow(false)} />
      <button className="next-btn" onClick={loadNext}>
        Load next
      </button>
    </div>
  );
}
