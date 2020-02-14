import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeading,
  faBold,
  faUnderline,
  faCode,
  faItalic,
  faStrikethrough,
  faQuoteRight,
  faListUl,
  faLink
} from '@fortawesome/free-solid-svg-icons';

import './styles.css';

const editorIcon = [
  { id: 0, icon: faHeading, text: 'Heading Text' },
  { id: 1, icon: faBold, text: 'Bold Text' },
  { id: 2, icon: faUnderline, text: 'Underline Text' },
  { id: 3, icon: faCode, text: 'Code Style' },
  { id: 4, icon: faItalic, text: 'Italic Text' },
  { id: 5, icon: faStrikethrough, text: 'Strikethrough Text' },
  { id: 6, icon: faQuoteRight, text: 'Quote' },
  { id: 7, icon: faListUl, text: 'List' },
  { id: 8, icon: faLink, text: 'Link' }
];

export default function EditorBar() {
  /** RENDER ICON LIST */
  const renderListIcon = (
    <ul className="method-func">
      {editorIcon.map(info => (
        <li className="list-item" key={info.id}>
          <FontAwesomeIcon icon={info.icon} />
          <span className="tooltip-text">{info.text}</span>
        </li>
      ))}
    </ul>
  );

  return <div className="editor-bar">{renderListIcon}</div>;
}
