import React, { useState } from "react";

export const AddCategoria = ({ onAddCategoria }) => {
  const [value, setvalue] = useState("");
  const onChangeValue = (e) => {
    setvalue(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim().length <= 1) return;
    onAddCategoria(value);
    setvalue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe aqui para buscar"
        value={value}
        name="busqueda"
        onChange={onChangeValue}
      />
    </form>
  );
};
