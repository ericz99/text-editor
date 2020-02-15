import React, { useState } from 'react';

import Editor from '../Editor';
import EditorBar from '../EditorBar';

import './styles.css';

export default function TextEditor() {
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

  return (
    <div className="text-editor">
      <EditorBar onClick={selectMethodChoice} methods={methods} />
      <Editor methods={methods} />
    </div>
  );
}
