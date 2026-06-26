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
    backgroundColor: '#FFFFFF',
    padding: 18,
    marginBottom: 15,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  cardFeito: {
    backgroundColor: '#E5E7EB',
  },

  nomeHabito: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },

  detalhe: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 10,
  },

 

  status: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 12,
  },

  botaoFeito: {
     backgroundColor: 'green',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },

  botaoInfo: {
  backgroundColor: '#2563EB',
  padding: 14,
  borderRadius: 12,
  alignItems: 'center',
  marginBottom: 10,
},

botaoExcluir: {
  backgroundColor: '#EF4444',
  padding: 14,
  borderRadius: 12,
  alignItems: 'center',
},

textoBotao: {
  color: '#FFFFFF',
  fontWeight: 'bold',
  fontSize: 16,
},
});