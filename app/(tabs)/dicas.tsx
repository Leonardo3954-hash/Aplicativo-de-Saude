import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

const dicas = [
  {
    id: '1',
    titulo: 'Beber Água',
    descricao: 'Beba pelo menos 2 litros de água por dia.',
  },
  {
    id: '2',
    titulo: 'Atividade Física',
    descricao: 'Faça 30 minutos de exercícios diariamente.',
  },
  {
    id: '3',
    titulo: 'Dormir Bem',
    descricao: 'Durma entre 7 e 8 horas por noite.',
  },
  {
    id: '4',
    titulo: 'Alimentação',
    descricao: 'Consuma frutas e verduras todos os dias.',
  },
  {
    id: '5',
    titulo: 'Saúde Mental',
    descricao: 'Reserve um tempo para descansar e relaxar.',
  },
];

export default function DicasScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>
          Dicas de Saúde
        </Text>
      </View>

      <FlatList
        data={dicas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitulo}>
              {item.titulo}
            </Text>

            <Text style={styles.cardTexto}>
              {item.descricao}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 15,
  },

  header: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 16,
    marginBottom: 12,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  cardTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 5,
  },

  cardTexto: {
    color: '#6B7280',
    fontSize: 15,
  },
});