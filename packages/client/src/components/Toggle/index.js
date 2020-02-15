import React, { useState } from 'react';

export default function Toggle() {
  const [theme, setTheme] = useState(null);

  return <div className="toggle-theme">toggle theme</div>;
}
