import React from "react";
import "./styles/ApartmentPageTitle.css"


function ApartmentPageTitle(props) {
  const name = props.host.name;
  const [firstName, LastName] = name.split(" ");

  return (
    <div>
      <div className="infos">
        <div className="apartement-page__title color">
          <h1>{props.title}</h1>
          <h2> {props.location} </h2>
          <div className="tags">
            {props.tags.map((tag) => (
              <span className="tag" key={tag}>
                {" "}
                {tag}{" "}
              </span>
            ))}
          </div>
        </div>
        <div className="apartment_owner color">
          <div className="details">
            <h3>
              <span>{firstName}</span>
              <span>{LastName}</span>
            </h3>
            <div className="badge">
              <img src={props.host.picture} alt="" />
            </div>
          </div>

          <div className="star">
            {[1, 2, 3, 4, 5].map((num) => (
              <i className={props.rating >= num ? "fas fa-star fa-xl color" : "fas fa-star fa-xl grey"} key={num}>
              </i>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ApartmentPageTitle;