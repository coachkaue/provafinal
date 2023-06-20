import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const IdentificacaoScreen = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  const handleIdentificacao = async () => {
    try {
      // Verifica se os campos estão preenchidos
      if (!nome || !idade) {
        Alert.alert('Erro', 'Por favor, preencha todos os campos');
        return;
      }

      // Salva os dados na memória do aplicativo usando AsyncStorage
      await AsyncStorage.setItem('nome', nome);
      await AsyncStorage.setItem('idade', idade);

      // Limpa os campos após a identificação
      setNome('');
      setIdade('');

      Alert.alert('Sucesso', 'Identificação realizada com sucesso!');
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Erro',
        'Ocorreu um erro ao salvar os dados. Por favor, tente novamente.'
      );
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={text => setNome(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Idade"
        value={idade}
        onChangeText={text => setIdade(text)}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Identificar" onPress={handleIdentificacao} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'orange',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'orange',
  },
});

export default IdentificacaoScreen;