import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HabitCard({ item, marcarComoFeito, excluirHabito }) {
  return (
    <View style={[styles.card, item.feito && styles.cardFeito]}>
      <Text style={styles.nomeHabito}>{item.nome}</Text>

      <Text style={styles.detalhe}>{item.detalhe}</Text>

      <Text style={styles.status}>
        Status: {item.feito ? 'Feito' : 'Pendente'}
      </Text>

      <TouchableOpacity
        style={styles.botaoFeito}
        onPress={() => marcarComoFeito(item.id)}
      >
        <Text style={styles.textoBotao}>Marcar como feito</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoExcluir}
        onPress={() => excluirHabito(item.id)}
      >
        <Text style={styles.textoBotao}>Excluir hábito</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  cardFeito: {
    backgroundColor: '#e0e0e0',
  },
  nomeHabito: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detalhe: {
    marginTop: 5,
    marginBottom: 5,
  },
  status: {
    marginBottom: 10,
  },
  botaoFeito: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 8,
  },
  botaoExcluir: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
});