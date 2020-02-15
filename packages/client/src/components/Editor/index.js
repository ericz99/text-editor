import React, { useState } from 'react';
import ContentEditable from 'react-contenteditable';

import './styles.css';

export default function Editor({ methods }) {
  const [html, setHtml] = useState('<p>Hello <b>World</b> !</p><p>Paragraph 2</p>');
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
        spellCheck="true"
        html={html}
      />
    </div>
  );
}
