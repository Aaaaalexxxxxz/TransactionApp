import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, globalStyles } from '../styles/styles';
import { TransactionType } from '../types/types';

interface HeaderProps {
    transactionType: TransactionType;
    onFilterChange: (type: TransactionType) => void;
}

const Header: React.FC<HeaderProps> = ({ transactionType, onFilterChange }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity
                testID="all-button"
                style={styles.button}
                onPress={() => onFilterChange('all')}
            >
                <Text style={[styles.buttonText, transactionType === 'all' && styles.active]}>
                    All
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                testID="income-button"
                style={styles.button}
                onPress={() => onFilterChange('income')}
            >
                <Text style={[styles.buttonText, transactionType === 'income' && styles.active]}>
                    Income
                </Text>
                <Text style={globalStyles.arrowUp}>&#8593;</Text>
            </TouchableOpacity>

            <TouchableOpacity
                testID="expense-button"
                style={styles.button}
                onPress={() => onFilterChange('expense')}
            >
                <Text style={[styles.buttonText, transactionType === 'expense' && styles.active]}>
                    Expense
                </Text>
                <Text style={globalStyles.arrowDown}>&#8595;</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        marginTop: 48,
        marginBottom: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        paddingVertical: 8,
        borderRadius: 8,
        backgroundColor: colors.cardBackground,
        marginHorizontal: 8,
        width: 80,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        color: colors.brandColor,
        fontWeight: 'bold',
    },
    buttonText: {
        color: colors.textPrimary,
        marginHorizontal: 4,
    },
});

export default Header;