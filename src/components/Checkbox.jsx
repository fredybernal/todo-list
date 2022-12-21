import React, { Fragment } from "react";

const Checkbox = (props) => {/*declaramos la variable checkbox que va a tener una propiedades y dentro de esta 
 tenemos una constante que va a tener onchange y le espesificamos que propiedades vamos a necesitar que son las 
 propiedades de id la descripcion y el done */
    const {
        onChange,
        data: { id, description, done },
    } = props;
    return (
        <Fragment>{/*fragment es una etiqueta que engloba otras etiquetas para retornar solo 
        un componente ya que en react no podemos retornar mas de uno tambien es una etiqueta basia
        que no se dibuja en el html*/}
            {/* Just ADD !!!! */}
            <svg
                viewBox="0 0 0 0"
                style={{ position: "absolute", zIndex: -1, opacity: 0 }}
            >
                <defs>
                    <path id="todo__line" d="M21 12.3h168v0.1z" />
                    <path
                        id="todo__box"
                        d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"
                    />
                    <path id="todo__check" d="M10 13l2 2 5-5" />
                    <circle id="todo__circle" cx="13.5" cy="12.5" r="10" />
                </defs>
            </svg>

            <label className="todo new-item">
                <input
                    className="todo__state"
                    name={id}
                    type="checkbox"
                    defaultChecked={done}
                    onChange={onChange}
                />
                {/* Just ADD !!!! */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 200 25"
                    className="todo__icon"
                >
                    <use xlinkHref="#todo__line" className="todo__line" />
                    <use xlinkHref="#todo__box" className="todo__box" />
                    <use xlinkHref="#todo__check" className="todo__check" />
                    <use xlinkHref="#todo__circle" className="todo__circle" />
                </svg>
                <div className="todo__text">{description}</div>
            </label>
        </Fragment>
    );
};

export default Checkbox;