import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {
  const [imagenes, setimagenes] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getGifImages = async () => {
    const GIFS = await getGifs(categoria);
    setimagenes(GIFS);
    setisLoading(false);
  };

  useEffect(() => {
    getGifImages();
  }, []);

  return { imagenes, isLoading };
};
