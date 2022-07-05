export default function Modal(props) {
  return (
    <div className={`film ${props.active ? "active" : ""}`}>
      <div className="container container--film">
        <div className="film__info">
          <button className="film__close" onClick={props.onClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="film__img">
            <img id="details-poster" src={props.details.Poster} alt="" />
          </div>
          <div className="film__item">
            <div className="film__title">Film info:</div>
            <table>
              <tbody>
                <tr>
                  <td width="25%" height="70">
                    Title:
                  </td>
                  <td id="details-title" width="75%">
                    {props.details.Title}
                  </td>
                </tr>
                <tr>
                  <td width="25%" height="70">
                    Released:
                  </td>
                  <td id="details-released" width="75%">
                    {props.details.Released}
                  </td>
                </tr>
                <tr>
                  <td width="25%" height="70">
                    Genre:
                  </td>
                  <td id="details-genre" width="75%">
                    {props.details.Genre}
                  </td>
                </tr>
                <tr>
                  <td width="25%" height="70">
                    Country:
                  </td>
                  <td id="details-country" width="75%">
                    {props.details.Country}
                  </td>
                </tr>
                <tr>
                  <td width="25%" height="70">
                    Director:
                  </td>
                  <td id="details-director" width="75%">
                    {props.details.Director}
                  </td>
                </tr>
                <tr>
                  <td width="25%" height="70">
                    Writer:
                  </td>
                  <td id="details-writer" width="75%">
                    {props.details.Writer}
                  </td>
                </tr>
                <tr>
                  <td width="25%" height="70">
                    Actors:
                  </td>
                  <td id="details-actors" width="75%">
                    {props.details.Actors}
                  </td>
                </tr>
                <tr>
                  <td width="25%" height="70">
                    Awards:
                  </td>
                  <td id="details-awards" width="75%">
                    {props.details.Awards}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
