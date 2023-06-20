import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const IdentificacaoScreen = (props) => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  const handleIdentificacao = async () => {
    try {
      
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

  const handleOpenInstagram = () => {
    const instagramUrl = 'https://instagram.com/firstcallout.ofc?igshid=MzRlODBiNWFlZA==';
    Linking.openURL(instagramUrl)
      .catch(() => {
        console.log('Erro ao abrir o link do Instagram');
      });
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

      <Button title="Identificar" onPress={handleIdentificacao} color="orange" />

      <Text style={{color:'white',padding: 15,marginTop: 15,alignItems: 'center',flexDirection: 'row',justifyContent: 'space-around', textAlign: 'justify', backgroundColor: 'orange',marginRight:9, fontSize:10}}>
        Informação: Os principais suplementos que podem ser usados para melhorar o desempenho e ganhar massa muscular são: whey protein, creatina, BCAA, glutamina, Caseína, carnitina, L-arginina, Proteínas vegetais
      </Text>
      <Text style={{color:'white',padding: 15,marginTop: 15,alignItems: 'center',flexDirection: 'row',justifyContent: 'space-around', textAlign: 'justify', backgroundColor: 'orange',marginRight:9, fontSize:10}}>
        Informação: Quais os 3 pilares da saúde?
        Algumas outras necessidades do nosso corpo chamadas de pilares estão inteiramente interligadas e também necessitam de atenção para que a vida seja realmente saudável. Dessa forma, podemos resumir os principais pilares da saúde em: exercícios físicos, alimentação, sono e saúde mental.
      </Text>
      <Text style={{color:'white',padding: 15,marginTop: 15,alignItems: 'center',flexDirection: 'row',justifyContent: 'space-around', textAlign: 'justify', backgroundColor: 'orange',marginRight:9, fontSize:10}}>
        Frequência de treino
        Informação: Existem pessoas que quando ficam uma semana sem ir para academia querem compensar tudo em um único dia, e isso é um grande erro porque a frequência com que você faz exercícios é mais importante do que a duração dos treinos.
        A frequência de treinamento é o número de sessões realizadas durante um período específico de tempo, sendo grande responsável pelos seus resultados porque precisamos de estímulos contínuos tanto para perder gordura, quanto para hipertrofia.
        Se você não tem uma frequência, que seja 3, 4 ou 5 vezes por semana você pode ter redução dos níveis de força, queda no condicionamento e perda de massa muscular.
        Não há nenhum problema se você não tem disponibilidade de ir para a academia a semana inteira, o importante é que mesmo indo apenas 3 vezes você se comprometa com essa frequência.
        O melhor caminho é alinhar junto com o profissional de educação física qual a melhor estratégia para o seu objetivo e definir qual será a duração de cada treino e a frequência dentro da sua disponibilidade.
        Ser consistente é um desafio, as vezes você tem preguiça de levantar mais cedo, ou a chuva atrapalha ou está cansado demais após o trabalho. A verdade é que sempre vão existir pedras no caminho, mas em vez de focar no problema, você deve focar na solução e fazer o que você se propôs a fazer.
      </Text>
      <Text style={styles.link} onPress={handleOpenInstagram}>
        Clique aqui para visitar o Instagram para uma consultoria
      </Text>
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
  link: {
    color: 'white',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});

export default IdentificacaoScreen;
  