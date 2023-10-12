import React, { useState } from 'react'

function Child1(props:{getMessage: (message: string)=>void}) {
    const message ="hello there ?are you okay?"
    props.getMessage(message);
  return (
  <div>
    Iam Child1
   
  </div>
  );
  };

export default Child1