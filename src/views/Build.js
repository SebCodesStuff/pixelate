import React, { useState, useEffect } from 'react';
import { ColorPicker } from '../ColorPicker';
import * as copy from 'copy-to-clipboard';
import axios from 'axios';
import '../App.css';

axios.defaults.baseURL = 'http://localhost:3001/';
axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

function Build() {
    const [width, setWidth] = useState(10);
    const [height, setHeight] = useState(10);
    const [color, setColor] = useState();
    const [cells, setCells] = useState([]);
    const [reset, setReset] = useState(false); 
    const [panelOpen, setPanelOpen] = useState(true);
  
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
    
    const Cell = ({backgroundColor, i}) => {
      const setBackgroundColor = () => {
        const newCells = cells.reduce((acc, cell, idx) => {
          if (idx === i) cell = color;
          acc.push(cell);
          return acc;
        }, [])
        setCells(newCells)
      };
  
      return (
        <div id={i} className='cell' onClick={() => setBackgroundColor()} style={{ backgroundColor }}></div>
      );
    };
  
  
  
    const Canvas = ({ cells, width }) => {
      const wrapperWidth = (width * 12);
      if (cells && cells.length < 1) return null;
        return (
        <div className='wrapper' style={{ width: wrapperWidth}}>
          {cells.map((color, i) => {
            return <Cell backgroundColor={color} i={i} />
          })}
        </div>
      );
    };
  
    useEffect(() => {
      const arr = new Array(width*height);
      arr.fill('white')
      setCells(arr);
      if (reset) setReset(false);
    }, [width, height, reset]);
  
    // const HTMLCells / convert canvas function to return cells that are 
  
    const generateHTML = () => {
      copy(cells)
    }

    // axios.get('/canvas').then(res => console.log(res));
  
    return (
        <div className='container'>
          {panelOpen && <div className='side-panel center-column'>
            <Inputs text='How many pixels in wide' onSubmit={int => setWidth(parseInt(int))} defaultVal={width} />
            <Inputs text='How many pixels in height' onSubmit={int => setHeight(parseInt(int))} defaultVal={height} />
            {/* <button onSubmit={int => testGet()} >Test</button> */}
            <ColorPicker onChange={color => setColor(color)} />
            <button onClick={() => setReset(true)}>Clear colors</button>
            <button onClick={() => generateHTML()}>Generate HTML</button>
            {/* Look at just copying to clipboard instead */}
            <p>Check the Console Logs for your array</p>
          </div>}
          <div className='center-column main'>
            <h1>Welcome to Pixelate</h1>
            <button onClick={() => setPanelOpen(!panelOpen)}>Toggle Side Panel</button>
            <Canvas cells={cells} width={width} />
          </div>
        </div>
    );
}

export default Build;
