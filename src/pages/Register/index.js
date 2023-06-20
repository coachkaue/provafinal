import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';

export default function SignUp() {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    console.log('Nome:', name);
    console.log('Data de nascimento:', dateOfBirth);
    console.log('E-mail:', email);
    console.log('Senha:', password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.message}>Cadastrar-Se</Text>
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title}>Nome</Text>
        <TextInput
          placeholder="Digite seu nome completo..."
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <DatePicker
          style={styles.datePicker}
          date={dateOfBirth}
          mode="date"
          format="DD/MM/YYYY"
          placeholder="Selecione a data de nascimento..."
          confirmBtnText="Confirmar"
          cancelBtnText="Cancelar"
          customStyles={{
            dateInput: styles.dateInput,
            dateText: styles.dateText,
            placeholderText: styles.placeholderText,
            // Estilização adicional, se necessário
          }}
          onDateChange={(date) => setDateOfBirth(date)}
        />

        <Text style={styles.title}>E-mail</Text>
        <TextInput
          placeholder="Digite seu e-mail..."
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Digite sua senha..."
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27282d',
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  containerForm: {
    flex: 1,
    backgroundColor: 'black',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginTop: 28,
    color: 'orange',
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    color: 'orange',
  },
  datePicker: {
    marginBottom: 12,
  },
  dateInput: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
  },
  dateText: {
    color: 'orange',
  },
  placeholderText: {
    color: 'orange',
  },
  button: {
    backgroundColor: 'orange',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
  },
});