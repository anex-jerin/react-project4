import React, { useState } from 'react';
import {AiOutlineMinus, AiOutlinePlus}  from 'react-icons/ai'
import { VscDebugBreakpointDataUnverified } from 'react-icons/vsc';


const Quiz = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <div className='quizes'>
        <div className='head'>
          <h1>{title}</h1>
          <button
            onClick={() => {
              setShowInfo(!showInfo);
            }}
          >
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
        <div className='info'>
          <h5>{showInfo && <VscDebugBreakpointDataUnverified />}</h5>
          <h5>{showInfo && info}</h5>
        </div>
      </div>
    </>
  );
};

export default Quiz;
