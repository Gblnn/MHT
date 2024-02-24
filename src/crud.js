import React, { useState } from "react";
import firestore from "./firebase";

function Crud() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await firestore.collection("records").add({ name: newItem });
    setNewItem("");
    getItems();
  };

  const getItems = async () => {
    const itemsRef = await firestore.collection("items").get();
    const itemsData = itemsRef.docs.map((doc) => doc.data());
    setItems(itemsData);
  };

  const handleUpdate = async (id, name) => {
    await firestore.collection("items").doc(id).update({ name });
    getItems();
  };

  const handleDelete = async (id) => {
    await firestore.collection("items").doc(id).delete();
    getItems();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a new item"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleUpdate(item.id, item.name)}>
              Edit
            </button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crud;