import React from 'react';

interface AddTableButtonProps {
    onClick: () => void;
}

export const AddTableButton = ({ onClick }: AddTableButtonProps) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <button 
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ 
                padding: '8px 16px',  
                color: '#1a6c77', 
                border:'solid 1px #1a6c77' ,
                cursor: 'pointer',
                backgroundColor: isHovered ? '#99c5f5' : 'transparent',
                transition: 'all 1s ease',
        }}
    >
            新しいテーブルを追加
        </button>
    );
};