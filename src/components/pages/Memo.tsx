import { useState, useEffect } from 'react';

type Article = {
  id: string;
  title: string;
  url: string;
};

const QiitaArticles = () => {
  const [arts, setArts] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const QIITA_USER_ID = "wash37815";

  useEffect(() => {
    const fetchArts = async () => {
      try {
        const response = await fetch(`https://qiita.com/api/v2/users/${QIITA_USER_ID}/items?page=1&per_page=10`);
        
        if (!response.ok) {
          throw new Error('記事が取得できませんでした');
        }
        
        const data = await response.json();
        setArts(data);
        
      } catch (err) {

        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('予期せぬエラーが発生しました');
        }
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchArts();
  }, []);

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