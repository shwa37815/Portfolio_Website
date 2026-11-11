import React, { useState } from 'react';

interface TimelineItem {
  id: number;
  date: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    date: '2026.09',
    title: 'サイトデザインの刷新とPlayground機能の追加',
    category: 'UI/UX & Architecture',
    description: 'GitHub Nextを意識したモダンなデザインへ刷新。コンポーネントをインタラクティブに試せるPlaygroundページを追加。',
    tags: ['React', 'TypeScript', 'CSS Variables'],
  },
  {
    id: 2,
    date: '2026.09',
    title: 'Google フォームを用いた Contact ページの実装',
    category: 'Feature Integration',
    description: 'iframeを用いたレスポンシブなフォーム埋め込み。画面遷移なしでお問い合わせが完結する導線を構築。',
    tags: ['React', 'Google Forms', 'TypeScript'],
  },
  {
    id: 3,
    date: '2026.09',
    title: 'Markdown学習メモ（Memo）機能の実装',
    category: 'Feature Integration',
    description: 'ReactMarkdownを活用し、GitHub風のスタイルと等幅フォントによるツリー表示に対応したナレッジベースを作成。',
    tags: ['ReactMarkdown', 'TypeScript'],
  },
  {
    id: 4,
    date: '2026.09',
    title: 'サイトデザイン一新',
    category: 'Feature/site-redesign', 
    description: 'Skillsページの削除を行い、代わりにPlaygroundページを追加。ページ全体の背景にグラデーション機能を導入し、デザインに刷新。',
    tags: ['React', 'TypeScript', 'CSS'],
  },

  {
    id: 5,
    date: '2026.10',
    title: 'アイコンの変更',
    category: 'Feature/icon_and_memopage', 
    description: 'メモをqiitaへ。それに伴い、Githubのページアイコンとメモのページアイコンをそれぞれ公式の画像へ差し替え',
    tags: ['React', 'TypeScript', 'CSS'],
  },
];

// カーソル位置を追尾して光らせるタイムラインカード
const NextTimelineCard: React.FC<{ item: TimelineItem }> = ({ item }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        marginBottom: '32px',
        padding: '28px',
        cursor: 'pointer',
        borderRadius: '16px',
        /* 【重要】上が薄く透け、下に向かって白くなるグラデーション（ガラスモーフィズム） */
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.85) 100%)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.8)',
        boxShadow: isHovered 
          ? '0 12px 30px rgba(147, 197, 253, 0.25)' 
          : '0 4px 20px rgba(0, 0, 0, 0.03)',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
      }}
    >
      {/* マウスカーソル追従型のSpotlight Glow */}
      <div
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(147, 197, 253, 0.3), transparent 40%)`,
        }}
      />

      {/* タイムラインのドット */}
      <div
        style={{
          position: 'absolute',
          left: '-29px',
          top: '32px',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: isHovered ? '#60a5fa' : '#94a3b8',
          boxShadow: isHovered ? '0 0 12px #60a5fa' : 'none',
          transition: 'all 0.3s ease',
        }}
      />

      <div style={{ fontSize: '0.8rem', color: '#2563eb', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '8px' }}>
        {item.date} • {item.category}
      </div>

      <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '12px', marginTop: 0, color: '#0f172a' }}>
        {item.title}
      </h3>

      <p style={{ fontSize: '0.92rem', lineHeight: '1.6', color: '#334155', marginBottom: '20px' }}>
        {item.description}
      </p>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {item.tags.map((tag, idx) => (
          <span
            key={idx}
            style={{
              fontSize: '0.75rem',
              padding: '4px 10px',
              borderRadius: '20px',
              border: '1px solid rgba(147, 197, 253, 0.5)',
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              color: '#1e293b',
            }}
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px 80px 20px' }}>
      {/* ヒーローエリア */}
      <section style={{ textAlign: 'center', padding: '40px 0 60px 0' }}>
        <h1
          style={{
            fontSize: '3.2rem',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.3,
            padding: '10px 0',
            margin: '0 0 16px 0',
            background: 'linear-gradient(135deg, #0f172a 0%, #475569 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
          }}
        >
          Portfolio Site
        </h1>
        <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
          ポートフォリオ掲載サイトです
          Typescript + React で主に構築されており、<br />
          GitHub Nextを参考にサイトデザインしています。<br />
          ホーム、プレイグラウンド、ポートフォリオ、Contact、Memoの5ページで構成されています。
        </p>
      </section>

      {/* タイムライン領域 */}
      <section style={{ position: 'relative', paddingLeft: '32px' }}>
        <div
          style={{
            position: 'absolute',
            left: '8px',
            top: '12px',
            bottom: '12px',
            width: '1px',
            background: 'linear-gradient(to bottom, rgba(148, 163, 184, 0.4), rgba(148, 163, 184, 0.05))',
          }}
        />

        {timelineData.map((item) => (
          <NextTimelineCard key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
};

export default Home;