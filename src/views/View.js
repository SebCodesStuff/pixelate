import React, { useState, useEffect } from 'react';
import { ColorPicker } from '../ColorPicker';
import '../App.css';

function View() {
    const [width, setWidth] = useState(10);
    const [height, setHeight] = useState(10);
    const [cells, setCells] = useState([]);
  
    const Inputs = ({text, defaultVal, onSubmit}) => {
      const [value, setValue] = useState(defaultVal);
      const onChange = (e) => setValue(e.target.value); 
    
      return (
        <>
          <h2>{text}</h2>
          <input type='text' value={value} onChange={onChange} ></input>
          <button onClick={() => onSubmit(value)}>Submit</button>
        </>
      );
    };

    
    const HtmlCell = ({ color }) => {
        const [backgroundColor, setBackgroundColor] = useState('white');
        return <div className='cell' onMouseOver={() => setBackgroundColor(color)} style={{ backgroundColor }}></div>
      };
  
  
  
    const Canvas = () => {
      const wrapperWidth = (width * 12);
      if (cells && cells.length < 1) return null;
        return (
        <div className='wrapper' style={{ width: wrapperWidth}}>
          {cells.map(color => {
            return <HtmlCell color={color} />
          })}
        </div>
      );
    };

    return (
        <>
            <Inputs text='How many pixels in wide' onSubmit={int => setWidth(parseInt(int))} defaultVal={width} />
            <Inputs text='How many pixels in height' onSubmit={int => setHeight(parseInt(int))} defaultVal={height} />
            <Inputs text='Enter your array' onSubmit={arr => setWidth(setCells(arr.split(',')))} defaultVal={cells} />
            <Canvas />
        </>
    );
}

export default View;
