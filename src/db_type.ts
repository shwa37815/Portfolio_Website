// それぞれの頭に「export」をつけるだけ！（defaultは不要です）

export type ColumnType = 'string' | 'number' | 'boolean';

export interface Column {
    id: string;
    name: string;
    type: ColumnType;
}

export interface Table {
    id: string;
    name: string;
    columns: Column[];
}