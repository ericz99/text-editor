import React, { useState } from 'react';

import Editor from '../Editor';
import EditorBar from '../EditorBar';

import './styles.css';

export default function TextEditor() {
  const [color, setColor] = useState('#000000');
  const [methods, setMethods] = useState([]);

  const selectMethodChoice = e => {
    e.preventDefault();
    const target = e.currentTarget;
    const arr = [...target.classList];
    if (!arr.includes('active')) {
      setMethods(methods => [...methods, arr[1]]);
    } else {
      setMethods(methods => [...methods].filter(method => method !== arr[1]));
    }
  };

  const getTextColor = e => {
    const { children, color } = e.target;
    // if (color) setColor(color);
    if (children.length > 0) {
      const arr = Array.from(children);
      const getElem = arr.filter(v => v.localName === 'font');
      if (getElem.length > 0) {
        const colorText = getElem[0].color;
        if (colorText !== undefined) setColor(colorText);
      }
    }
  };

  return (
    <div className="text-editor">
      <EditorBar onClick={selectMethodChoice} methods={methods} color={color} setColor={setColor} />
      <Editor methods={methods} onMouseUp={getTextColor} />
    </div>
  );
}
