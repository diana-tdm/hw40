export default function Card(props) {
  return (
    <div className="movie__item">
      <div className="movie__img">
        <img className="movie__poster" src={props.film.Poster} alt="" />
      </div>
      <div className="movie__info">
        <div className="movie__text-title">
          <div className="movie__text">{props.film.Type}</div>
          <div className="movie__title">{props.film.Title}</div>
        </div>
        <div className="movie__year-btn">
          <div className="movie__year">{props.film.Year}</div>
          <button
            className="movie__btn"
            onClick={() => props.onDetails(props.film.imdbID)}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
