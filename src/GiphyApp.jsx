import { Accordion, Alert } from "@mui/material";
import React from "react";
import { useState } from "react";
import { AddCategoria } from "./components/AddCategoria";
import { GifGrid } from "./components/GifGrid";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export const GiphyApp = () => {
  const [Categorias, setCategorias] = useState(["Pokemon", "Demon Slayer"]);
  const [isRepetida, setRepetida] = useState(false);

  const onAddCategoria = (categoria) => {
    if (Categorias.includes(categoria)) {
      setRepetida(true);
      return;
    }
    setCategorias([categoria, ...Categorias]);
    setRepetida(false);
  };
  return (
    <>
      <h1>GiphyApp</h1>
      <div>
        <AddCategoria onAddCategoria={onAddCategoria} />
        <br />
        {isRepetida ? (
          <Alert variant="filled" severity="info">
            Esa busqueda ya se ha realizado
          </Alert>
        ) : (
          <></>
        )}
        {Categorias.map((busqueda) => (
          <div key={busqueda}>
            {/*  */}
            <Accordion defaultExpanded className="acordeon">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">{busqueda}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <GifGrid categoria={busqueda} />
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
    </>
  );
};
