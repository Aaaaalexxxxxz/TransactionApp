import { ThemedText } from '@/components/ThemedText';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../styles/styles';
import { Catagory } from '../../types/types';

export default function LogTransactionScreen() {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState<Catagory>('food');
  const [transactionType, setTransactionType] = useState<'income' | 'expense'>('expense');

  const handleSubmit = () => {
    // TODO: Implement transaction logging
    console.log({
      amount,
      category,
      transactionType,
      date: new Date().toLocaleDateString()
    });
    
    // Reset form
    setAmount('');
    setCategory('food');
    setTransactionType('expense');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.form}>
          <ThemedText type="title" style={styles.title}>Log Transaction</ThemedText>
          
          {/* Amount Input */}
          <View style={styles.inputGroup}>
            <ThemedText style={styles.label}>Amount ($)</ThemedText>
            <TextInput
              style={styles.input}
              value={amount}
              onChangeText={setAmount}
              keyboardType="decimal-pad"
              placeholder="Enter amount"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
            />
          </View>

          {/* Transaction Type Selection */}
          <View style={styles.inputGroup}>
            <ThemedText style={styles.label}>Transaction Type</ThemedText>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={transactionType}
                onValueChange={(value: 'income' | 'expense') => setTransactionType(value)}
                style={styles.picker}
              >
                <Picker.Item label="Expense" value="expense" />
                <Picker.Item label="Income" value="income" />
              </Picker>
            </View>
          </View>

          {/* Category Selection */}
          <View style={styles.inputGroup}>
            <ThemedText style={styles.label}>Category</ThemedText>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={category}
                onValueChange={(value: Catagory) => setCategory(value)}
                style={styles.picker}
              >
                <Picker.Item label="Food" value="food" />
                <Picker.Item label="Transport" value="transport" />
                <Picker.Item label="Housing" value="housing" />
                <Picker.Item label="Utilities" value="utilities" />
                <Picker.Item label="Entertainment" value="entertainment" />
                <Picker.Item label="Health" value="health" />
                <Picker.Item label="Education" value="education" />
                <Picker.Item label="Other" value="other" />
              </Picker>
            </View>
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <ThemedText style={styles.buttonText}>Log Transaction</ThemedText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  scrollContent: {
    flexGrow: 1,
  },
  form: {
    padding: 20,
    gap: 20,
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    color: colors.textPrimary,
    marginBottom: 4,
  },
  input: {
    backgroundColor: colors.cardBackground,
    padding: 12,
    borderRadius: 8,
    color: '#FFFFFF',
    fontSize: 16,
  },
  pickerContainer: {
    backgroundColor: colors.cardBackground,
    borderRadius: 8,
    overflow: 'hidden',
  },
  picker: {
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: colors.brandColor,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
