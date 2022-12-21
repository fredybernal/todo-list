import React, { useState } from "react";//importamos useState para poder cambiar el estado  

import TaskList from "./TaskList";//importamos a Tasklist
import FormTodo from "./FormTodo";//IMPORTAMOS A FormTodo 

const Container = () => {//constante container 
const [list, setList] = useState([]);/*constante lista que es igual a un nuevo estado que nos va 
a servir para almacenar datos de nuestro FormTodo en el array de lista */ 


const handleAddItem = addItem => {/*la list va a cambiar su estado cuando formtodo resiva las
propiedades que tengo dentro de handleAddItem */
setList([...list, addItem]); 
};
return (
<div>
{/*al componente formtodo le estamos agragando el atributo handleAddItem y le pasamos el metodo
handleAddItem */}
<FormTodo handleAddItem={handleAddItem} />
{/*en tasklist generamos una lista de tareas que las vamos a llamar de la constante list que es
el arraay que cambia de estado segun lo que el handleAddItem le envie  */}
<TaskList list={list} setList={setList} />
</div>
);
};

export default Container;//se sxporta de container a la carpeta App.js