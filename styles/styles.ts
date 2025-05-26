import { StyleSheet } from 'react-native';

export const colors = {
    background: '#1a1a1a',
    cardBackground: '#262626',
    textPrimary: '#ffffff',
    textSecondary: '#aaaaaa',
    brandColor: '#f6e86f',
    income: '#4CAF50',
    expense: '#F44336',
    border: '#333333',
};

export const globalStyles = StyleSheet.create({
    arrowUp: {
        color: colors.income,
        fontWeight: 'bold',
    },
    arrowDown: {
        color: colors.expense,
        fontWeight: 'bold',
    },
});

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    // Add other common styles here
});