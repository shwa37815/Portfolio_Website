import { useState, useEffect } from 'react';

// ①コンポーネント名は大文字から始めます（Reactのルール）
const QiitaArticles = () => {
  // ②必要なState（最小構成なので選択用のStateは削りました）
  const [arts, setArts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const QIITA_USER_ID = "wash37815";

  // ③useEffectは「QiitaArticles」の中に書きます
  useEffect(() => {
    const fetchArts = async () => {
      try { // tyr を try に修正
        const response = await fetch(`https://qiita.com/api/v2/users/${QIITA_USER_ID}/items?page=1&per_page=10`);
        
        if (!response.ok) {
          throw new Error('記事が取得できませんでした');
        }
        
        const data = await response.json();
        setArts(data);
        
      } catch (err) { // cathc を catch に修正
        // ()の中をerrにしたので、err.messageで受け取ります
        setError(err.message); 
      } finally {
        setIsLoading(false); // setISLoading の大文字小文字を修正
      }
    };
    
    fetchArts();
  }, []);

  // ④画面の表示部分（return）を追加します
  return (
    <div style={{ padding: '20px' }}>
      <h2>Qiita記事一覧</h2>

      {isLoading && <p>読み込み中...</p>}
      {error && <p style={{ color: 'red' }}>エラー: {error}</p>}

      <ul>
        {arts.map((art) => (
          <li key={art.id} style={{ marginBottom: '10px' }}>
            <a href={art.url} target="_blank" rel="noopener noreferrer">
              {art.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QiitaArticles;