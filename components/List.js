import Card from "./Card";

export default function List(props) {
  return (
    <section className="movie">
      <div className="container">
        <div className="movie__items">
          {props.films.map((film) => (
            <Card film={film} key={Math.random()} onDetails={props.onDetails} />
          ))}
        </div>
      </div>
    </section>
  );
}
