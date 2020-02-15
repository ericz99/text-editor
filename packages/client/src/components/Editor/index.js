import React, { useState } from 'react';
import ContentEditable from 'react-contenteditable';

import './styles.css';

export default function Editor({ methods, onMouseUp }) {
  const [html, setHtml] = useState('');
  const [editable, setEditable] = useState(true);

  const getTextValue = e => {
    const { value } = e.target;
    setHtml(value);
  };

  return (
    <div className="editor">
      <ContentEditable
        className="t-area"
        tagName="pre"
        onChange={getTextValue}
        onMouseUp={onMouseUp}
        spellCheck="true"
        html={html}
      />
    </div>
  );
}
