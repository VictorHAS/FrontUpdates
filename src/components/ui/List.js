import React from "react";

const List = props => (
  <div className="container">
    <div className="list-unstyled border rounded">
      {props.items.map((item, index) => (
        <li
          className="list-group-item d-flex py-0 px-2 justify-content-between align-items-center border-bottom"
          key={index}
        >
          {item}
          <button
            type="button"
            className="btn fa fa-edit btn-outline-secondary"
          />
        </li>
      ))}
    </div>
  </div>
);

export default List;
