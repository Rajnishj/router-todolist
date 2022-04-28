import React, { useState } from "react";
import List from "./components2/list/List";
import "./main.scss";

const Main = () => {
  const [currentItem, setCurrentItem] = useState("");
  const [listItem, setListItem] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  // const disableButton = currentItem === "";
  const addItemToList = () => {
    if (currentItem === "") {
      alert("Please fill the input filed");
    } else {
      setListItem([...listItem, { title: currentItem, id: Date.now() }]);
      setCurrentItem("");
      setIsEditing(false);
    }
  };
  const deleteItemFromList = (id) => {
    const newList = listItem.filter((item) => {
      return item.id !== id;
    });
    setListItem(newList);
  };
  const clearListItem = () => {
    setListItem([]);
    console.log(listItem);
  };
  const editItem = (id) => {
    setIsEditing(true);
    const newList = listItem.filter((item) => {
      return item.id !== id;
    });
    setListItem(newList);
    const edit = listItem.find((item) => item === item);
    console.log(edit);

    setCurrentItem(edit.title);
  };

  return (
    <>
      <div className="container col-sm-12 col-md-6 m-auto wrapper">
        <div className="input-wrapper">
          <input
            type="text"
            value={currentItem}
            onChange={(e) => setCurrentItem(e.target.value)}
          />
          <button onClick={addItemToList}>{isEditing ? "Edit" : "Add"}</button>
        </div>
        {listItem.length > 0 ? (
          <>
            {/* <List
              listItem={listItem}
              deleteItemFromList={deleteItemFromList}
              editItem={editItem}
            /> */}
            <div>
              {listItem.map(({ id, title }) => (
                <div key={id} className="item">
                  <p>{title}</p>
                  <div className="buttons">
                    <button onClick={() => editItem(id)}>Update</button>
                    <button onClick={() => deleteItemFromList(id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={clearListItem} className="btn btn-warning">
              Clear List
            </button>
          </>
        ) : (
          <div className="list-group-item">No list to show</div>
        )}
      </div>
    </>
  );
};

export default Main;
