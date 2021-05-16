import React from 'react';

import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const MovieItem = ({
  id,
  title,
  directors,
  imageUrl,
  cinemaWorldPrice,
  filmWorldPrice,
  icon,
}) => {
  return (
    <GridListTile key={id}>
      <img src={imageUrl} alt={title} />
      <GridListTileBar
        title={title}
        subtitle={<span>by: {directors}</span>}
        actionIcon={
          <IconButton aria-label={`info about ${title}`} className={icon}>
            <InfoIcon />
          </IconButton>
        }
      />
    </GridListTile>
  );
};

export default MovieItem;
