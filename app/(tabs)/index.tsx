import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HabitCard from '../../components/HabitCard';

export default function HomeScreen() {
  const [habitos, setHabitos] = useState([
    {
      id: '1',
      nome: 'Caminhar',
      detalhe: 'Caminhar melhora a saúde e dá mais disposição.',
      dica: 'Tente caminhar pelo menos 30 minutos por dia.',
      feito: false,
    },
    {
      id: '2',
      nome: 'Dormir bem',
      detalhe: 'Dormir bem ajuda na concentração e no descanso.',
      dica: 'Evite usar o celular antes de dormir.',
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
      dica: 'Adicione uma dica prática na tela de informações.',
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

        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={adicionarHabito}
        >
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
    backgroundColor: '#f2f2f2',
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },

  botaoAdicionar: {
    backgroundColor: 'blue',
    width: '60%',
    alignSelf: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 18,
  },

  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
});