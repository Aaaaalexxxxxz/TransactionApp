export interface Location {
    id: number;
    address: string;
    city: string;
    zipCode: number;
}

export interface Transaction {
    id: number;
    date: string;
    txnType: 'income' | 'expense';
    category: string;
    amount: string;
    location: Location;
}

export type TransactionType = 'all' | 'income' | 'expense';
export type Catagory = 'all' | 'food' | 'transport' | 'housing' | 'utilities' | 'entertainment' | 'health' | 'education' | 'other';