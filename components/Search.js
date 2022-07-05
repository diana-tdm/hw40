import React from "react";

export default function Search(props) {
  const [text, setText] = React.useState("");

  return (
    <section className="search">
      <div className="container">
        <div className="search__items">
          <label className="search__label">
            <input
              className="search__input"
              type="text"
              placeholder="Title"
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
          </label>
          <label className="search__label">
            <button className="search__select">
              <span>Type</span>
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div className="search__type">
              <button className="search__type-btn" data-type="">
                Any type
              </button>
              <button className="search__type-btn" data-type="movie">
                Movie
              </button>
              <button className="search__type-btn" data-type="series">
                Series
              </button>
              <button className="search__type-btn" data-type="episode">
                Episode
              </button>
            </div>
          </label>
          <button className="search__btn" onClick={() => props.onSearch(text)}>
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
