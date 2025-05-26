import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/styles';
import { Transaction } from '../types/types';

interface TransactionItemProps {
    transaction: Transaction;
    testID?: string;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction, testID }) => {
    return (
        <View style={styles.item} testID={testID}>
            <View>
                <Text testID="category" style={styles.category}>
                    {transaction.category}
                </Text>
            </View>
            <View style={styles.amountContainer}>
                <Text
                    testID="amount"
                    style={[
                        styles.amount,
                        transaction.txnType === "income" ? styles.income : styles.expense,
                    ]}>
                    {transaction.txnType === "income" ? "+" : "-"}${Math.abs(parseFloat(transaction.amount.replace(/[^0-9.-]+/g, ''))).toFixed(2)}
                </Text>
                <Text testID="date" style={styles.date}>
                    {transaction.date}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        paddingVertical: 16,
        paddingHorizontal: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.cardBackground,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 8,
    },
    amountContainer: {
        alignItems: 'flex-end',
    },
    category: {
        fontSize: 16,
        color: colors.textPrimary,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    city: {
        fontSize: 12,
        color: colors.brandColor,
    },
    amount: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    income: {
        color: colors.income,
    },
    expense: {
        color: colors.expense,
    },
    date: {
        fontSize: 12,
        color: colors.textSecondary,
    },
});

export default TransactionItem;