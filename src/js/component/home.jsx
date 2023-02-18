
import './home.jsx';
import React, {useState,useEffect} from 'react'

function App() {

const [newItem, setNewItem] = useState("");
const [items, setItems] = useState ([]); 

function addItem() {
    if (!newItem){
        alert("Enter an Item.")
        return;
    }
    const item={
        done:false,
        id:Math.floor(Math.random() * 1000),
        label: newItem
    };

    setItems(oldList => [...oldList, item]);

    setNewItem("");
}

		function deleteItem(id) {
			const newArray = items.filter(item => item.id !==id);
			setItems(newArray);

		}
        useEffect(async ()=>{
            const resp= await fetch("https://assets.breatheco.de/apis/fake/todos/user/Apollo")
            const store= await resp.json()
            setItems(store)
            

        },[])

        useEffect(async ()=>{
            const options={
                headers:{
                    "Content-Type":"application/json"
                },
                method:"PUT",
                body:JSON.stringify(items)
            }
            console.log (options)
            const resp= await fetch("https://assets.breatheco.de/apis/fake/todos/user/Apollo",options)
            const store= await resp.json()

        },[items])


  return (
    <div className="App">
        <h1>ToDo List </h1>
        <input 
        type="text"
        placeholder='Add an item...'
        value={newItem} 
        onChange={e => setNewItem(e.target.value)}
        />
        <button onClick={() => addItem()}>Add</button>

        <ul>
			{items.map(item =>{
				return(
					<li key={item.id}>{item.label} <button className='delete-button' onClick={() => deleteItem(item.id)}>X</button></li>
				)
			})}
        </ul>
    </div>
  )
}

export default App