import React from 'react';
import { Handle } from 'react-flow-renderer';


export const SourceNode = ({ data }) => {
  return (
    <div className='px-11 py-5 border border-black rounded-md bg-gray-400'>
      {data.label}
      <Handle className='w-[6px] h-[25px] rounded-none' type="source" position="right" />
    </div>
  );
};

export const DestinationNode = ({ data }) => {
  return (
    <div className='px-11 py-5  border border-black rounded-md bg-gray-300'>
      {data.label}
      <Handle className='w-[6px] h-[25px] rounded-none' type="target" position="left" />
    </div>
  );
};