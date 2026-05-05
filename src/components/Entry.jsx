export default function Entry(props) {
  return (
    <article className="main-content">
      <div className="main-image-container">
        <img src={props.img.src} className="images" alt={props.img.alt} />
      </div>
      <div className="test-section">
        <div className="location-sec">
          <i className="fa-solid fa-location-dot"></i>
          <span>{props.country}</span>
          <a href={props.location}>View on Google Maps</a>
        </div>
        <div className="details">
          <h2>{props.placeName}</h2>
          <p className="date">{props.date}</p>
          <p>{props.info}</p>
        </div>
      </div>
    </article>
  );
}
