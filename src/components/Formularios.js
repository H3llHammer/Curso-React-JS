import React, { useState } from "react";

/*export default function Formularios() {
  const [nombre, setNombre] = useState("");
  const [sabor, setSabor] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [terminos, setTerminos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <p>Elije tu sabor JS favorito</p>
        <input
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="vanilla">Vanilla</label>
        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          id="angular"
          name="sabor"
          value="angular"
          onChange={(e) => setSabor(e.target.value)}
          defaultChecked
        />
        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          id="vue"
          name="sabor"
          value="vue"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="vue">Vue</label>
        <p>Elije tu lenguaje de programacion favorito</p>
        <select
          name="lenguaje"
          onChange={(e) => setLenguaje(e.target.value)}
          defaultValue=""
        >
          <option value="">- - -</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <br />
        <label htmlFor="terminos">Acepto términos y condiciones</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={(e) => setTerminos(e.target.checked)}
        />
        <input type="submit" />
      </form>
    </>
  );
}*/

export default function Formularios() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      //con [e.target.name] hacemos que sea una propiedad del objeto
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      //con [e.target.name] hacemos que sea una propiedad del objeto
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        <p>Elije tu sabor JS favorito</p>
        <input
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          onChange={handleChange}
        />
        <label htmlFor="vanilla">Vanilla</label>
        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={handleChange}
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          id="angular"
          name="sabor"
          value="angular"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          id="vue"
          name="sabor"
          value="vue"
          onChange={handleChange}
        />
        <label htmlFor="vue">Vue</label>
        <p>Elije tu lenguaje de programacion favorito</p>
        <select name="lenguaje" onChange={handleChange} defaultValue="">
          <option value="">- - -</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <br />
        <label htmlFor="terminos">Acepto términos y condiciones</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={handleChecked}
        />
        <input type="submit" />
      </form>
    </>
  );
}
