import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Footer from '../../components/Footer';
import HabitCard from '../../components/HabitCard';
import Navbar from '../../components/Navbar';

export default function HomeScreen() {
  const [habitos, setHabitos] = useState([
    {
      id: '1',
      nome: 'Beber água',
      detalhe: 'Beber água ajuda o corpo a funcionar melhor.',
      feito: false,
    },
    {
      id: '2',
      nome: 'Caminhar',
      detalhe: 'Caminhar melhora a saúde e dá mais disposição.',
      feito: false,
    },
    {
      id: '3',
      nome: 'Dormir bem',
      detalhe: 'Dormir bem ajuda na concentração e no descanso.',
      feito: false,
    },
  ]);

  const [novoHabito, setNovoHabito] = useState('');

  function adicionarHabito() {
    if (novoHabito.trim() === '') {
      return;
    }

    const novo = {
      id: Date.now().toString(),
      nome: novoHabito,
      detalhe: 'Hábito adicionado pelo usuário.',
      feito: false,
    };

    setHabitos([...habitos, novo]);
    setNovoHabito('');
  }

  function marcarComoFeito(id: string) {
    const listaAtualizada = habitos.map((habito) => {
      if (habito.id === id) {
        return { ...habito, feito: true };
      }

      return habito;
    });

    setHabitos(listaAtualizada);
  }

  function excluirHabito(id: string) {
    const listaAtualizada = habitos.filter((habito) => habito.id !== id);
    setHabitos(listaAtualizada);
  }

  return (
    <View style={styles.container}>
      <Navbar />

      <View style={styles.conteudo}>
        <Text style={styles.titulo}>Lista de Hábitos Saudáveis</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite um novo hábito"
          value={novoHabito}
          onChangeText={setNovoHabito}
        />

        <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarHabito}>
          <Text style={styles.textoBotao}>Adicionar hábito</Text>
        </TouchableOpacity>

        <FlatList
          data={habitos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <HabitCard
              item={item}
              marcarComoFeito={marcarComoFeito}
              excluirHabito={excluirHabito}
            />
          )}
        />
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  conteudo: {
    flex: 1,
    padding: 15,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  botaoAdicionar: {
    backgroundColor: 'blue',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
});