import React from 'react';
import Color from './Color';

const ColorList = (props) => (
  <div>
    {props.colors.length === 0 ? (
      <p>There are no colors yet</p>
    ) : (
      <ul>
        {props.colors.map(
          color => <Color name={color.name} />
        )}
      </ul>
    )}
  </div>
);

export default ColorList;
