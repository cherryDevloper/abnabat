import React, { useState, useEffect } from 'react';
import './Alert.css';

const Alert = ({ type, message }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`alert ${type} ${show ? 'show' : ''}`}>
      <span>{message}</span>
    </div>
  );
};

export default Alert;
