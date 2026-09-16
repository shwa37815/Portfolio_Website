const PlayButton = () => {
  return (
    <div style={{ textAlign: 'center', padding: '40px 0' }}>
      <button
        style={{
          width: '200px',    
          height: '60px',     
          fontSize: '30px',   
          cursor: 'pointer', 
        }}
      >
        プレイ
      </button>
    </div>
  );
};

export default PlayButton;