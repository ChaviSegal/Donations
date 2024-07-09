import React, { useContext, useState, useEffect } from 'react';
import MyColorContext from './Context';
import { ChromePicker } from 'react-color';
import IconButton from '@mui/material/IconButton';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import Tooltip from '@mui/material/Tooltip';

const ColorChangerButton = () => {
  const { changeColor  } = useContext(MyColorContext);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [mouseOverIcon, setMouseOverIcon] = useState(false);

  const handleColorChange = (color) => {
    changeColor(color.hex);
  };

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const showColorPickerOnHover = () => {
    setMouseOverIcon(true);
  };

  const hideColorPickerOnLeave = () => {
    setMouseOverIcon(false);
  };

  useEffect(() => {
    let timer;
    if (mouseOverIcon) {
      timer = setTimeout(() => {
        setShowColorPicker(true);
      }, 500); // חצי שנייה
    } else {
      setShowColorPicker(false);
    }

    return () => clearTimeout(timer);
  }, [mouseOverIcon]);

  return (
    <Tooltip title="Change color">
      <div onMouseEnter={showColorPickerOnHover} onMouseLeave={hideColorPickerOnLeave}>
        <IconButton
          onClick={toggleColorPicker}
          style={{
            backgroundColor: 'lightblue',
            borderRadius: '50%',
            padding: '10px',
            color: 'white',
            backgroundColor: 'rgb(113, 57, 204)',
            fontSize: '20trem'
          }}
        >
          <ColorLensIcon style={{ fontSize: '2rem' }} />
        </IconButton>
        {showColorPicker && (
          <ChromePicker
            color="pink"
            onChangeComplete={handleColorChange}
          />
        )}
      </div>
    </Tooltip>
  );
};

export default ColorChangerButton;

