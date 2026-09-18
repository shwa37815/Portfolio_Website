import ReactMarkdown from 'react-markdown';
import memoText from '../../assets/memo.md?raw';
import functionText from '../../assets/関数.md?raw';
import designText from '../../assets/設計.md?raw';
import { useState } from 'react';


const memoList = [
  {id: 'memo', title: '備忘録', content: memoText },
  {id: 'function', title: '関数', content: functionText },
  {id: 'design', title: '設計', content: designText },
];

const Memo = () => {
  const [selectedMemoId, setSelectedMemoId] = useState(memoList[0].id);
  const currentMemo = memoList.find((memo) => memo.id === selectedMemoId);
  return (
    <div style= {{ maxWidth: '800px', margin: '0 auto',textAlign: 'left', padding: '40px 20px', backgroundColor: '#f5f5f5', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', }}>
      <h2>学習備忘録</h2>
      <p style={{fontSize:`20px`,color:`red`}}>Qiitaサイトの記事に変更予定</p>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px',}}>
        {memoList.map((memo) => (
          <button
            key={memo.id}
            onClick={() => setSelectedMemoId(memo.id)}
            style={{
              padding: '8px 16px',
              cursor: 'pointer',
              borderRadius: '4px',
              border: '1px solid #007bff',
              backgroundColor: selectedMemoId === memo.id ? '#007bff' : '#ffffff',
              color: selectedMemoId === memo.id ? '#ffffff' : '#007bff',
              fontWeight: selectedMemoId === memo.id ? 'bold' : 'normal',
              transition: 'all 0.2s ease',
            }}
          >
            {memo.title}
          </button>
        ))}
      </div>
      <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', backgroundColor: '#f9f9f9'}}>
        {currentMemo && <ReactMarkdown>{currentMemo.content}</ReactMarkdown>}
      </div>
    </div>
  );
};

export default Memo;