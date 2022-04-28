import React from "react";
import "./list.scss";

const List = ({ listItem, deleteItemFromList, editItem }) => {
  return (
    <div>
      {listItem.map(({ id, title }) => (
        <div key={id} className="item">
          <p>{title}</p>
          <div className="buttons">
            <button onClick={() => editItem(id)}>Update</button>
            <button onClick={() => deleteItemFromList(id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
