export const getGifs = async (categoria) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=bBQEsHA2FXRtWESnAMfUvb0klEZgxZBL&q=${categoria}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const GIFS = data.map((img) => ({
    id: img.id,
    tittle: img.title,
    url: img.images.downsized.url,
  }));

  return GIFS;
};
