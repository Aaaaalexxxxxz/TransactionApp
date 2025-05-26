import { Transaction } from '@/types/types';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Transactions from "../../components/Transactions";
import TXNS from '../../data/transactions.json';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.frame}>
                <Transactions transactions={TXNS as Transaction[]} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
    },
    frame: {
        flex: 1,
        maxWidth: 500,
        width: '100%',
        alignSelf: 'center',
    },
});

export { HomeScreen };
