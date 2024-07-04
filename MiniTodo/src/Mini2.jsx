import { useEffect } from "react";
import { useState } from "react";
import './App.css'; // Assuming you have an App.css file for your styles

export default function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch(`https://api.frontendeval.com/fake/food/${input}`)
      .then((res) => {
        return res.json();
      })
      .then((Rdata) => {
        setData(Rdata);
      });
  }, [input]);

  const handleInputs = (ele) => {
    let arr = [...todo];

    let obj = {
      content: ele,
      val: false,
    }
    arr.push(obj);

    setTodo(arr)
    setInput("")
    setData([])
 }

 const handleDelete = (ele) => {
  let arr = [...todo];
  console.log(ele, arr);

  arr = arr.filter((elemt) => elemt.content !== ele);

  setTodo(arr)
 }

 const handleToggle = (id) => {

  let arr = [...todo]
  arr[id].val = !arr[id].val

  console.log(arr)

  setTodo(arr)

 }
  return (
    <div className="container">
      <h1 className="text-3xl font-bold text-center my-6">My Shopping List</h1>
      <input
        className="input-field"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search or Add items"
      />

      <div className="list-container">
        {data.map((ele, id) => (
          <p
            className="list-item"
            onClick={() => handleInputs(ele)}
            key={id}
          >
            {ele}
          </p>
        ))}
      </div>

      <div>
        {todo.map((ele, idx) => (
          <div key={idx} className="todo-item">
            <button className={`action-button ${ele.val ? 'done' : ''}`} onClick={() => handleToggle(idx)}>
              {ele.val ? 'Undo' : 'Done'}
            </button>
            <p className={`todo-content ${ele.val ? 'completed' : ''}`}>
              {ele.content}
            </p>
            <button className="action-button delete" onClick={() => handleDelete(ele.content)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
