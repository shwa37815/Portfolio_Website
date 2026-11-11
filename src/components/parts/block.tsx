import React from 'react';
import type {ColumnType} from '../../db_type';

interface BlockProps {
    type: ColumnType;
}

export const Block: React.FC<BlockProps> = ({ type }:BlockProps) => {
    const [isHovered,setIsHovered] = React.useState(false);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('text/plain', type);
        e.dataTransfer.effectAllowed = 'copy';
    };
        return (
        <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            draggable = {true}
            onDragStart={handleDragStart}
            style={{
            padding: '8px 16px',
            backgroundColor: isHovered ? '#cceef2' : 'transparent',
            border: '1px solid #1a6c77',
            borderRadius: '4px',
            fontWeight:'bold',
            cursor: 'grab',
            transition: 'all 1s ease',
            }}>
            {type}
        </div>

    );
} ;