import './App.css';
import React, {useState} from 'react'

function App() {

const [newItem, setNewItem] = useState("");
const [items, setItems] = useState ([]); 

function addItem() {
    if (!newItem){
        alert("Enter an Item.")
        return;
    }
    const item={
        id:Math.floor(Math.random() * 1000),
        value: newItem
    };

    setItems(oldList => [...oldList, item]);

    setNewItem("");
}


  return (
    <div className="App">
        <h1>ToDo List App</h1>
        <input 
        type="text"
        placeholder='Add an item...'
        value={newItem} 
        onChange={e => setNewItem(e.target.value)}
        />
        <button onClick={() => addItem()}>Add</button>

        <ul>
            <li>Take out trash</li>
            <li>Wash Dishes</li>
            <li>Do Laundry</li>
            <li>Take a Nap</li>
        </ul>
    </div>
  )
}

export default App