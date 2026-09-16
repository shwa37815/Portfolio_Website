const Portfolio = () => {
    return (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <h2>ポートフォリオ一覧</h2>
            <p style={{ fontSize: '1.2em', color: '#666' }}>制作したアプリやツールの一覧です。</p>
            
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '20px', 
                flexWrap: 'wrap', 
                marginTop: '30px' 
            }}>
                
                <div style={{
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    padding: '20px',
                    width: '300px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    textAlign: 'left'
                }}>
                    <h3 style={{ margin: '0 0 10px 0' }}>日報自動作成ツール</h3>
                    <p style={{ color: '#333', fontSize: '0.9em', lineHeight: '1.5' }}>
                        日々の業務報告（日報）の作成を自動化・効率化するために作成したツールです。
                    </p>
                    <p style={{ color: '#999', fontSize: '0.9em', lineHeight: '1.5' }}>
                        ※現在準備中のため、構造段階です。
                    </p>
                    <a 
                        href="https://github.com/shwa37815/AutoCreate_daily_report" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                            display: 'inline-block', 
                            marginTop: '15px', 
                            color: '#0969da', 
                            textDecoration: 'none',
                            fontWeight: 'bold'
                        }}
                    >
                        GitHubでコードを見る →
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;