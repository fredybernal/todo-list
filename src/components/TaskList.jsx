import React from "react";//importamos react
import Checkbox from "./Checkbox";//importamos checkbox

const TaskList = props => {//contante tasklist y le asiganamos unas propiedades 

const { list, setList } = props;//constante list y le asignamos unas propiedades 

const onChangeStatus = e => {/*constante onchengestatus que le asignamos un evento 
que seria que cuando el usuario le de checked el evento nos va acambiar el estatus
del componente checkbox */
const { name, checked } = e.target;

// (E)
const updateList = list.map(item => ({/*constante updatelist que quiere decir que cuando 
la lista de tares este completa esta variable me va a mapiar la lista para saber cual de las 
tareas esta lista o no y me las va a ir actualizando */
...item,
done: item.id === name ? checked : item.done
}));
setList(updateList);
};

// (D)
const onClickRemoveItem = e => {/*creamos el metodo onClickRemoveItem que le asignamos un evento
y dentro de este evnto generamos la constante updatelist que se le asigna la constante list con un filter 
para que filtre las tareas que ya esten terminadas y las que no las deje en la lista */  
const updateList = list.filter(item => !item.done);
setList(updateList);
};

// (A-2)
const chk = list.map(item => (/*creamos una constante chk donde esta mapeando la lista donde tenga un item,
tambien contiene el checkbox y un identificador key que es un identificador unico en react y lo utilizamos 
para que revise la que las propiedades iniciales se cumplan despues del mapeo de la lista de tareas*/
<Checkbox key={item.id} data={item} onChange={onChangeStatus} />
));
return (
<div className="todo-list">{/*div que nos contiene en primera estancia unos parametros el prime parametro 
indica que mire la lonjitud de la list y si todo esta checkeado nos va a mostrar no hay tareas si en el 
array todo esta chequeado le vamos a crear un boton para borrar todo  y limpiar el array list*/}
{/*(A-1)*/}
{list.length ? chk : "No tasks"}
{/*(B)*/}
{list.length ? (
<p>
<button className="button blue" onClick={onClickRemoveItem}>
Delete all done
</button>
</p>
) : null}
</div>
);
};

export default TaskList;