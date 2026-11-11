import React from 'react';
import type {ColumnType} from '../../db_type';
import { Block } from './block';

export const BlockStore = () => {
    const availableTypes: ColumnType[] = ['string', 'number', 'boolean'];

    return (
        <div style={{ padding: '24px', color: '#1a6c77' }}>
            <h1>DBパーツ</h1>
            <div style={{ display: 'flex', gap: '8px', marginTop: '24px' }}>
                        {availableTypes.map((type) => (
                            <Block key={type} type={type} />
                       ))} 
            </div>
        </div>
    );
} 