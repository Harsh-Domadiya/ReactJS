import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

const ComponentWithInternalLink = () => (
  <div>
    <h1>This is the first component </h1>
    <Button ><a href="{Second-component}">Go to </a> </Button>
  </div>
);   

export default ComponentWithInternalLink;