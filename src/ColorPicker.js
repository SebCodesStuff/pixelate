import React from 'react';
import { SketchPicker } from 'react-color';

export class ColorPicker extends React.Component {
  state = {
    background: '#fff',
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
    this.props.onChange(color.hex)
  };

  render() {
    return (
      <SketchPicker
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
      />
    );
  }
}