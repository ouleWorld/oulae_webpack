import * as React from 'react';
import { useState } from 'react';

const Button = () => {
  const [num, setNum] = useState(0);

  return (
    <>
      <div>here1</div>
      <div>{num}</div>
      <button
        onClick={() => {
          setNum((value) => value + 1);
        }}
      >
        click me!
      </button>
    </>
  );
};

const Component = () => {
  return (
    <>
      <div>Page1</div>
      <Button></Button>
    </>
  );
};

export default Component;
