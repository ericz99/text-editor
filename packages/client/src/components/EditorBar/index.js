import React, { useState, useRef, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBold,
  faUnderline,
  faPalette,
  faItalic,
  faStrikethrough,
  faQuoteRight,
  faAlignLeft,
  faAlignRight,
  faAlignCenter,
  faAlignJustify,
  faIndent,
  faOutdent
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import './styles.css';

const editorIcon = [
  { id: 2, class: 'bold', icon: faBold, text: 'Bold Text' },
  { id: 3, class: 'underline', icon: faUnderline, text: 'Underline Text' },
  { id: 4, class: 'italic', icon: faItalic, text: 'Italic Text' },
  { id: 5, class: 'strikeThrough', icon: faStrikethrough, text: 'Strikethrough Text' },
  { id: 6, class: 'indent', icon: faIndent, text: 'Indent' },
  { id: 7, class: 'outdent', icon: faOutdent, text: 'Outdent' },
  { id: 8, class: 'justifyLeft', icon: faAlignLeft, text: 'Align Left' },
  { id: 9, class: 'justifyRight', icon: faAlignRight, text: 'Align Right' },
  { id: 10, class: 'justifyCenter', icon: faAlignCenter, text: 'Align Center' },
  { id: 11, class: 'justifyFull', icon: faAlignJustify, text: 'Align Justify' }
];

export default function EditorBar({ onClick, methods }) {
  const [color, setColor] = useState('#FF5733');
  const [isToggle, setToggle] = useState(false);
  const myRef = useRef(null);

  const handleClickOutside = event => {
    if (myRef.current && !myRef.current.contains(event.target) && isToggle) {
      // # click outside
      setToggle(prev => !prev);
      document.execCommand('foreColor', false, color);
    }
  };

  // # this will handle mousedown event, like when you click outside a backdrop
  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const mouseDownCmd = (e, cmd) => {
    e.preventDefault();
    document.execCommand(cmd, false, null);
  };

  const handleChangeComplete = c => {
    setColor(c.hex);
  };

  const toggleColorPicker = e => {
    setToggle(prev => !prev);
    document.execCommand('foreColor', false, color);
  };

  return (
    <div className="editor-bar">
      <ul className="method-func">
        <li className="foreColor" ref={myRef}>
          <a
            href="/#"
            className="color-block list-item foreColor"
            onClick={toggleColorPicker}
            style={{ background: color }}
          >
            {/* <FontAwesomeIcon icon={faPalette} style={{ color }} /> */}
          </a>

          {isToggle && <SketchPicker color={color} onChangeComplete={handleChangeComplete} />}
        </li>

        {editorIcon.map(info => (
          <li className={`${info.class}`} key={info.id}>
            <a
              href="/#"
              className={`list-item ${info.class} ${methods.includes(info.class) ? 'active' : ''}`}
              onClick={onClick}
              onMouseDown={e => {
                e.preventDefault();
                document.execCommand(info.class, false, null);
              }}
            >
              <FontAwesomeIcon icon={info.icon} />
            </a>
            <span className="tooltip-text">{info.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

EditorBar.propTypes = {
  onClick: PropTypes.func.isRequired
};
