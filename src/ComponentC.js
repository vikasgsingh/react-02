import React, { useContext } from 'react';
import { fname, lname } from './App';

const ComponentC = () => {
  const fnameValue = useContext(fname);
  const lnameValue = useContext(lname);

  return (
    <h2>Hello, my name is {fnameValue} {lnameValue}</h2>
    
  );
};

export default ComponentC;
