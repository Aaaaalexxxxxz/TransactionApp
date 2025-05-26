import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/styles';
import { Transaction, TransactionType } from '../types/types';
import Header from './Header';
import TransactionItem from './TransactionItem';

interface TransactionsProps {
    transactions: Transaction[];
}

const Transactions: React.FC<TransactionsProps> = ({ transactions }) => {
    const [filter, setFilter] = useState<TransactionType>('all');

    console.log('Current transactions:', transactions); // Debug log

    const filteredTransactions = transactions.filter((transaction) => {
        console.log('Filtering transaction:', transaction); // Debug log
        if (filter === 'all') return true;
        return transaction.txnType.toLowerCase() === filter;
    });

    return (
        <View style={styles.container} testID="transactions-list">
            <Header transactionType={filter} onFilterChange={setFilter} />
            <FlatList
                data={filteredTransactions}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TransactionItem
                        transaction={item}
                        testID={`transaction-item-${item.id}`}
                    />
                )}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>No transactions found</Text>
                    </View>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    listContent: {
        paddingBottom: 20,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
    },
    emptyText: {
        color: colors.textSecondary,
        fontSize: 16,
    },
});

export default Transactions;