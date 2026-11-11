import React from 'react';
import {useState} from 'react';
import type { Table, ColumnType } from '../db_type';

export const useDB = () => {
        const [tables, setTables] = useState<Table[]>([]);
        
        //テーブル追加
        const addTable = () => {
            const newTable: Table = { 
                id: crypto.randomUUID(),
                name : 'new-table',
                columns: [],
            };
            setTables((prevTables) => [...prevTables, newTable]); 
        }
        
        //カラム追加
        const addColumn = (tableId: string, droppedType: ColumnType) => {
            const newColumn = {
                id: crypto.randomUUID(),
                name: `new-${droppedType}`,
                type: droppedType,
            };
            setTables((prevTables) =>
                prevTables.map((table) => 
                    table.id === tableId ? { ...table, columns: [...table.columns, newColumn] } : table)
            );
        };


        const updateTableName = (tableId:string,newName:string) => {
            setTables((prevTables) =>
                prevTables.map((table) => 
                    table.id === tableId ? { ...table, name: newName } : table)
                );
        };

        return {
            tables,
            addTable,
            addColumn,   
            updateTableName,
        };
};