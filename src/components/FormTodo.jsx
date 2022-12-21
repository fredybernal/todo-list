import React, { useState } from "react";/*estamos importando react y agragamos el useState que 
sirve para determinar los estados que puede tener cada componente (useState es el manejo de estados 
  de un objeto dentro del dom) */

const FormTodo = props => {/*constante formtodo que tiene unas propiedades */
  const { handleAddItem } = props; //le asignamos el objeto handleaddditem a las propiedades 
  const [description, setDescription] = useState(""); /*constante description y sedDescription que 
  le asignamos el valor de useState que inicial mente esta vacio  */
  const handleSubmit = e => {/*constante handleSubmit que va a ser el manejador de nuestro evento */
    e.preventDefault(); /*este codigo es para evitar que se nos recargue la paguina y se nos pierda 
    alguna informacion en este proceso de dar click en el boton para pasar la informacion diligenciada*/
    handleAddItem({/*objeto handleAddItem con la propiedades done: false que significa que quiero que 
    marque si la tareass esta o no terminada  otra propidad que es el id que sera unico por que estara 
    creado con la fecha cuando el usuario creo mas el string que el usuario creo y la descripcion que
     es tomar el valor del texto que el usuario agrega */
      done: false,
      id: (+new Date()).toString(), 
      description 
    });
    setDescription(""); /*cuando se ajecute el evento del formulario este setDesscription nos va
     actualizar el estado */
  };
  return (
    <form onSubmit={handleSubmit}>{/*estructura de formulario con un onSubmit que nos permite
     asociar la funcionalidad handleSubmit*/}
      
      <div className="todo-list">{/*div con un className "todo-list" */}
        <div className="file-input">{/*div con un className "file-input" */}
          
          <input
            type="text"
            className="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />{/*input que contiene un tipo texto un className "text" tiene un valor que se llama description
          que sale de nuestra funcionalidad y tiene un onChange que es para cuando cambie el evende de
          nuestra descripcion y se sete la informacion el valor vuelva a quedar en zero para que la persona 
          pueda seguir agregando tareas*/}
          
          <button
            className="button pink"
            disabled={description ? "" : "disabled"}
          >{/*boton que contiene un className "botton pink"  y un disabled que significa que mienras no se le
          ingrese ningun valor al input el boton estara desavilitado y la funcion del boton es agregar*/}
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo;//se sxporta de formTodo a la carpeta App.js