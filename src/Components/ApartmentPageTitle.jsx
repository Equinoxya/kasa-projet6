import React from "react";


function ApartmentPageTitle(props) {
  const name = props.host.name;
  const [firstName, LastName] = name.split(" ");

  return (
    <div>
      <div className="header">
        <div className="apartement-page__title">
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
        <div className="apartment_owner">
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
              <span className={props.rating >= num ? "on" : null} key={num}>
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ApartmentPageTitle;