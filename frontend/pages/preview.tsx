"use client"
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Preview = () => {
  const data = useSelector((state: RootState) => state.data.message);
  
  return (
    <div>
      <h1>Preview Page</h1>
      {data ? (
        data.map((message) => (
          <div key={message.id}>
            <pre>{JSON.stringify(message.content[0].text.value, null, 2)}</pre>
          </div>
        ))
      ) : (
        <p>No data to display</p>
      )}
    </div>
  )
}

export default Preview;
