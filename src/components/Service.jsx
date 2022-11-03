import React from "react";

function Service(props) {
  return (
    <article>
      {props.children}
      <h4>{props.title}</h4>
      <p>{props.content}</p>
    </article>
  );
}

export default Service;
