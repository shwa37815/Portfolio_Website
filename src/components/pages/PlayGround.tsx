import React, { useState } from 'react';
import type { Table } from '../parts/db_type'; 

const DBLearningPage: React.FC = () => {
  const [tables] = useState<Table[]>([
    {
      id: 'table-1',
      name: 'users',
      columns: [
        { id: 'col-1', name: 'id', type: 'number' },
        { id: 'col-2', name: 'user', type: 'string' },
        { id: 'col-3', name: 'true', type: 'boolean' }
      ]
    }
  ]);

  return (
    <div style={{ padding: '24px', color: '#1a6c77' }}>
      <h1>ノーコードDB学習グラウンド</h1>
      
      <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
        {tables.map((table) => (
          <div 
            key={table.id} 
            style={{ 
              border: '1px solid #1a6c77', 
              borderRadius: '8px', 
              padding: '16px',
              width: '250px',
              boxShadow: '0 2px 4px rgba(26,108,119,0.2)' 
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
                    //color: '#fff',
                    //backgroundColor: '#1a6c77', 
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