import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { CustomMessage } from '../../store/message/message-slice';
import ReactMarkdown from 'react-markdown';
import './Preview.css';

const Preview = () => {
  const dataFromStore = useSelector(
    (state: RootState) => state.message.message
  );
  const [data, setData] = useState<CustomMessage | null>(null);

  useEffect(() => {
    console.log('useEffect data', data);
    console.log('useEffect dataFromStore', dataFromStore);
    setData(dataFromStore);
  }, [data, dataFromStore]);

  return (
    <div>
      <h1>Preview Page</h1>
      {data ? (
        <div className="markdown-container">
          <ReactMarkdown>{data.value}</ReactMarkdown>
        </div>
      ) : (
        <p>No data to display</p>
      )}
    </div>
  );
};

export default Preview;
