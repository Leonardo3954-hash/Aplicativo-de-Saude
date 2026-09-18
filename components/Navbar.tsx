import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';

export default function Navbar() {
  // Abre a tela de configurações
  function abrirConfiguracoes() {
    router.push('/configuracoes');
  }

  return (
    <View style={styles.navbar}>

      {/* Ícone de saúde */}
      <View style={styles.iconeContainer}>
        <Text style={styles.icone}>♥</Text>
      </View>

      {/* Nome e slogan do aplicativo */}
      <View style={styles.informacoes}>
        <Text style={styles.titulo}>
          Habit Life
        </Text>

        <Text style={styles.slogan}>
          Pequenas ações, grandes resultados
        </Text>

        <Text style={styles.slogan}>
          para sua saúde.
        </Text>
      </View>

      {/* Botão de configurações */}
      <TouchableOpacity
        style={styles.botaoConfig}
        onPress={abrirConfiguracoes}
      >
        <Text style={styles.config}>
          ⚙
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  // Barra azul superior
  navbar: {
    backgroundColor: '#2563EB',
    minHeight: 105,
    paddingHorizontal: 18,
    paddingVertical: 18,

    flexDirection: 'row',
    alignItems: 'center',

    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,

    elevation: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },

  // Círculo branco atrás do coração
  iconeContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 12,
  },

  // Coração
  icone: {
    color: '#2563EB',
    fontSize: 25,
    fontWeight: 'bold',
  },

  // Área com nome e slogan
  informacoes: {
    flex: 1,
  },

  // Nome do aplicativo
  titulo: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: '800',
    marginBottom: 2,
  },

  // Slogan
  slogan: {
    color: '#DBEAFE',
    fontSize: 11,
    lineHeight: 15,
  },

  // Botão de configurações
  botaoConfig: {
    width: 40,
    height: 40,
    borderRadius: 20,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'rgba(255,255,255,0.15)',
  },

  // Ícone de configuração
  config: {
    color: '#FFFFFF',
    fontSize: 23,
  },
});