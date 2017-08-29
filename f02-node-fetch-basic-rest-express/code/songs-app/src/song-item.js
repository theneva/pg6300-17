import React from 'react';

const SongItem = (props) => (
  <div>{JSON.stringify(props.song.name)}</div>
);

export default SongItem;
