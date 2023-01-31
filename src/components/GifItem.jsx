import React from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

export const GifItem = ({ img }) => {
  return (
    <Grid item>
      <Card sx={{ maxWidth: 345 }} key={img.id}>
        <CardMedia
          component="img"
          sx={{ height: 140 }}
          image={img.url}
          title={img.tittle}
        />
        <CardContent>
          <Grid>
            <Typography gutterBottom variant="p" component="div">
              {img.tittle}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
