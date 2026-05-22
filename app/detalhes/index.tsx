import { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Detalhes() {
  const { nome, beneficio, dica } = useLocalSearchParams();

  const [beneficioEditado, setBeneficioEditado] = useState(String(beneficio || ''));
  const [dicaEditada, setDicaEditada] = useState(String(dica || ''));

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{nome}</Text>

      <View style={styles.card}>
        <Text style={styles.subtitulo}>Benefício para a saúde:</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite o benefício desse hábito"
          value={beneficioEditado}
          onChangeText={setBeneficioEditado}
          multiline
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitulo}>Dica prática:</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite uma dica prática"
          value={dicaEditada}
          onChangeText={setDicaEditada}
          multiline
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  card: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#dddddd',
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    minHeight: 80,
    textAlignVertical: 'top',
  },
});