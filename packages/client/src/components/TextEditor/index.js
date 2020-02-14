import React from 'react';

import Editor from '../Editor';
import EditorBar from '../EditorBar';

import './styles.css';

export default function TextEditor() {
  return (
    <div className="text-editor">
      <EditorBar />
      <Editor />
    </div>
  );
}
