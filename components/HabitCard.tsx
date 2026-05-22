import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HabitCard({
  item,
  marcarComoFeito,
  excluirHabito,
}: any) {
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
        style={styles.botaoInfo}
        onPress={() =>
          router.push({
            pathname: '/detalhes',
            params: {
              nome: item.nome,
              beneficio: item.detalhe,
              dica: item.dica,
            },
          })
        }
      >
        <Text style={styles.textoBotao}>Informações</Text>
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
    padding: 18,
    marginBottom: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#dddddd',
  },

  cardFeito: {
    backgroundColor: '#eeeeee',
  },

  nomeHabito: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  detalhe: {
    fontSize: 15,
    marginBottom: 8,
  },

  status: {
    fontSize: 15,
    marginBottom: 12,
    fontWeight: 'bold',
  },

  botaoFeito: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 8,
  },

  botaoInfo: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 8,
  },

  botaoExcluir: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
});