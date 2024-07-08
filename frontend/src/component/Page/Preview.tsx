import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { CustomMessage } from "../../store/message/messageSlice";
import { useAppDispatch } from "../../hooks";
import { getPdfFile } from "../../store/pdf/pdfService";
import ReactMarkdown from "react-markdown";
import "./Preview.css";

const Preview = () => {
  const dispatch = useAppDispatch();
  const dataFromStore = useSelector(
    (state: RootState) => state.message.message
  );
  const { pdfUrl, error } = useSelector((state: RootState) => state.pdfFile);
  const [data, setData] = useState<CustomMessage | null>(null);

  useEffect(() => {
    setData(dataFromStore ?? null);
    if (dataFromStore?.id) {
      dispatch(getPdfFile({ id: dataFromStore.id }));
    }
  }, []);

  return (
    <div>
      <h1>Preview Page</h1>
      {data ? (
        <div className="preview-container">
          <div className="markdown-container">
            <ReactMarkdown>{data.value}</ReactMarkdown>
          </div>
          <div className="download-btn">
            <button
              onClick={() => pdfUrl && window.open(pdfUrl)}
              className={`${
                error
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-700"
              } text-white font-bold py-2 px-4 rounded flex items-center`}
              disabled={error}>
              Download PDF
            </button>
          </div>
        </div>
      ) : (
        <p>No data to display</p>
      )}
    </div>
  );
};

export default Preview;
