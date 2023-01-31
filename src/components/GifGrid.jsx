import { CircularProgress, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ categoria }) => {
  const { imagenes, isLoading } = useFetchGifs(categoria);
  // const getGifsImages = async (cat) => {
  //   const GIFS = await getGifs(cat);
  //   setimagenes(GIFS);
  // };
  // const [imagenes, setimagenes] = useState([]);
  // useEffect(() => {
  //   getGifsImages(categoria);
  // }, []);

  return (
    <>
      <Grid container spacing={2} justifyItems="center">
        {isLoading ? (
          <CircularProgress />
        ) : (
          imagenes.map((img) => <GifItem key={img.id} img={img} />)
        )}
      </Grid>
    </>
  );
};
