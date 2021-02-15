import React, { useState } from 'react';
import { sonic } from '../sonic';
import '../App.css';

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

const Canvas = ({ cells, width }) => {
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


function View() {
    const [width, setWidth] = useState(23);
    const [height, setHeight] = useState(26);
    const [cells, setCells] = useState(sonic);
    const [panelOpen, setPanelOpen] = useState(true); 

    return (
      <div className='container'>
        {panelOpen && <div className='side-panel center-column'>
          <Inputs text='How many pixels in wide' onSubmit={int => setWidth(parseInt(int))} defaultVal={width} />
          <Inputs text='How many pixels in height' onSubmit={int => setHeight(parseInt(int))} defaultVal={height} />
          <Inputs text='Enter your array' onSubmit={arr => setCells(arr.split(','))} defaultVal={cells} />
        </div>}
        <div className='center-column main'>
          <button onClick={() => setPanelOpen(!panelOpen)}>Toggle Side Panel</button>
          <Canvas cells={cells} width={width}/>
        </div>
      </div>
    );
}

export default View;
