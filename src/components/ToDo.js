import { useEffect, useState } from "react";
import "./ToDo.css";


// prosta f-ja tj.komponenta koju export-ujemo
//f-ja koja vraca neku ToDo list koju cemo da fetchujemo sa servera
 export const ToDo = () => {

//1.sto radimo jeste da setujemo stanje, te ToDo-ove cuvacemo u nekom stanju
// nase je samo da setujemo stanje a react ce da radi za nas svaki put update tog stanja
// i on ce za nas da cuva te ToDo-ove
// na pocetku to stanje je prazan niz
//prazan jer jos uvek nista ne radimo sa tim podacima
// radim u donjem primeru
// const [todos, setTodos] = useState([]);


//   return <div className="todo-wrapper">
//   <h1>ToDos</h1>

//   {/* sta ovde radimo --- prolazimo kroz sve todes i za svaki todo renderujemo po jedan element koji smo dole iskucali */}
//   {/* ovo je cela postavka koju setujemo pre nego da fetchujemo podatke sa servera */}
//   {
//     todos.map((item) => {
//       return <div key={item.id} classNametodo>
//         <span>{item.todo}</span>
//         {/* stanje checked dobija od item.completed  i to checked dobijamo iz html-a*/}
//         <input type='checkbox' checked={item.completed}></input>
//       </div>
//     })
//   }

//   </div>

//ovde smo samo hardcord uradili
//isprobali da vidimo kako nasa lista treba da izgleda kada povucemo podatke sa servera
// const [todos, setTodos] = useState([
//   { completed: true, id:1, todo: 'Learn React' },
//   { completed: false, id:2, todo: 'Learn Redux' },
//   { completed: true , id:3, todo: 'Learn JS'}
// ]);
const [todos, setTodos] = useState([]);

//svaki put kada komuniciramo sa serverom imamo useEffect()
//kao parametre dobija jednu callback fju i jedan prazan niz
//u f-ji  fetchujemo i setujemo todo-ove
useEffect(() => {
  fetch('https://dummyjson.com/todos')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    setTodos(data.todos)
  })
}, [])



return <div className="todo-wrapper">
<h1>Todos</h1>
{todos.map((item) => {
    return (
    <div key={item.id} className ="todo">
      {/* stanje checked dobija od item.completed  i to checked dobijamo iz html-a*/}
      <input type='checkbox' checked={item.completed}/>
      <span>{item.todo}</span>
    
    </div>);
  })}

</div>
 
}