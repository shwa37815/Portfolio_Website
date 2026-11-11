import type { ColumnType } from '../../db_type'; 
import { AddTableButton } from './../parts/button';
import { BlockStore } from './../parts/bulockStore';
import {useDB} from '../../hooks/useDB';

const DBLearningPage: React.FC = () => {
  const {tables, addTable, addColumn} = useDB();

//ドラッグアンドドロップ機能
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, tableId: string) => {
    e.preventDefault();
    const droppedType = e.dataTransfer.getData('text/plain') as ColumnType;

    if (!droppedType) return;

    const newColumn = {
      id: crypto.randomUUID(),
      name: `new-${droppedType}`,
      type: droppedType
    };

    addColumn(tableId, droppedType);
  };

  return (
    <div style={{ padding: '24px', color: '#1a6c77' }}>
      <h1>ノーコードDB学習グラウンド</h1>
      <AddTableButton onClick={addTable} />
      <BlockStore/>
      <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
        {tables.map((table) => (
          <div 
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, table.id)}
            key={table.id} 
            style={{ 
              border: '1px solid #1a6c77', 
              borderRadius: '8px', 
              padding: '16px',
              width: '250px',
              boxShadow: '0 2px 4px rgba(26,108,119,0.2)' ,
              backgroundColor: '#fafafa'
            }}
          >
            <h2 style={{ marginTop: 0, fontSize: '18px' }}>{table.name}</h2>
            <hr style={{ border: 'none', borderTop: '1px solid #1a6c77' }} />
            
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {table.columns.map((col) => (
                <li 
                  key={col.id}
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    padding: '6px 0',
                    borderBottom: '1px solid #eee'
                  }}
                >
                  <span style={{ fontWeight: 'bold' }}>{col.name}</span>
                  <span style={{ 
                    fontSize: '12px', 
                    padding: '2px 6px', 
                    borderRadius: '4px' 
                  }}>
                    {col.type}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DBLearningPage;