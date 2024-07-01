"use client";
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CustomMessage } from '@/store/slice/dataSlice';
import { RootState } from '@/store';

const Preview = () => {
  const dataFromStore = useSelector((state: RootState) => state.data.message);
  const [data, setData] = useState<CustomMessage | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    console.log('Redux state data:', dataFromStore);
  }, [dataFromStore]);

  useEffect(() => {
    setIsClient(true);
    console.log('useEffect data', data)
    console.log('useEffect dataFromStore', dataFromStore)
    setData(dataFromStore);
  }, [data, dataFromStore]);

  if (!isClient) {
    console.log('isClient data', data)
    console.log('isClient dataFromStore', dataFromStore)
    return <div suppressHydrationWarning={true}>Loading...</div>; // 或者顯示一個加載指示器
  }

  return (
    <div>
      <h1>Preview Page</h1>
      {data ? (
        <div suppressHydrationWarning={true}>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>No data to display</p>
      )}
    </div>
  );
};

export default Preview;