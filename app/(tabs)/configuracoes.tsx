import { Stack, router } from 'expo-router';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function Configuracoes() {

  // Volta para a tela anterior
  function voltar() {
    router.back();
  }

  return (
    <View style={styles.container}>

      {/* Configura o nome que aparece no topo */}
      <Stack.Screen
        options={{
          title: 'CONFIGURAÇÕES',
        }}
      />

      {/* Cabeçalho */}

      <View style={styles.header}>

        <View style={styles.iconeHeader}>
          <Text style={styles.icone}>
            ⚙
          </Text>
        </View>

        <View>
          <Text style={styles.titulo}>
            Configurações
          </Text>

          <Text style={styles.subtitulo}>
            Personalize seu Habit Life
          </Text>
        </View>

      </View>

      {/* Sobre o aplicativo */}

      <View style={styles.card}>

        <View style={styles.linha}>

          <View style={styles.iconeCard}>
            <Text style={styles.iconeCardTexto}>
              ℹ
            </Text>
          </View>

          <View style={styles.textos}>
            <Text style={styles.tituloCard}>
              Sobre o Habit Life
            </Text>

            <Text style={styles.textoCard}>
              Aplicativo desenvolvido para ajudar
              no acompanhamento de hábitos saudáveis.
            </Text>
          </View>

        </View>

      </View>

      {/* Informações do projeto */}

      <View style={styles.card}>

        <View style={styles.linha}>

          <View style={styles.iconeCardVerde}>
            <Text style={styles.iconeCardTexto}>
              ♥
            </Text>
          </View>

          <View style={styles.textos}>
            <Text style={styles.tituloCard}>
              Objetivo do aplicativo
            </Text>

            <Text style={styles.textoCard}>
              Incentivar pequenas ações diárias
              que contribuam para uma vida mais saudável.
            </Text>
          </View>

        </View>

      </View>

      {/* Versão */}

      <View style={styles.cardVersao}>

        <Text style={styles.tituloVersao}>
          Habit Life
        </Text>

        <Text style={styles.textoVersao}>
          Versão 1.0
        </Text>

        <Text style={styles.textoVersao}>
          Pequenas ações, grandes resultados para sua saúde.
        </Text>

      </View>

      {/* Botão voltar */}

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={voltar}
      >

        <Text style={styles.iconeVoltar}>
          ←
        </Text>

        <Text style={styles.textoBotao}>
          Voltar
        </Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  // Tela principal
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 15,
  },

  // Cabeçalho
  header: {
    backgroundColor: '#2563EB',

    borderRadius: 18,

    padding: 16,

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 18,

    elevation: 3,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.10,

    shadowRadius: 6,
  },

  // Ícone do cabeçalho
  iconeHeader: {
    width: 50,

    height: 50,

    borderRadius: 25,

    backgroundColor: '#FFFFFF',

    alignItems: 'center',

    justifyContent: 'center',

    marginRight: 12,
  },

  icone: {
    fontSize: 25,

    color: '#2563EB',
  },

  // Título
  titulo: {
    color: '#FFFFFF',

    fontSize: 21,

    fontWeight: '800',
  },

  // Subtítulo
  subtitulo: {
    color: '#DBEAFE',

    fontSize: 12,

    marginTop: 3,
  },

  // Card
  card: {
    backgroundColor: '#FFFFFF',

    borderRadius: 16,

    padding: 16,

    marginBottom: 12,

    borderWidth: 1,

    borderColor: '#E5E7EB',

    elevation: 2,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.06,

    shadowRadius: 5,
  },

  // Linha do card
  linha: {
    flexDirection: 'row',

    alignItems: 'center',
  },

  // Ícone do card
  iconeCard: {
    width: 44,

    height: 44,

    borderRadius: 22,

    backgroundColor: '#EFF6FF',

    alignItems: 'center',

    justifyContent: 'center',

    marginRight: 12,
  },

  iconeCardVerde: {
    width: 44,

    height: 44,

    borderRadius: 22,

    backgroundColor: '#DCFCE7',

    alignItems: 'center',

    justifyContent: 'center',

    marginRight: 12,
  },

  iconeCardTexto: {
    fontSize: 21,

    color: '#2563EB',
  },

  // Textos do card
  textos: {
    flex: 1,
  },

  tituloCard: {
    fontSize: 17,

    fontWeight: '800',

    color: '#1F2937',

    marginBottom: 4,
  },

  textoCard: {
    fontSize: 14,

    lineHeight: 20,

    color: '#6B7280',
  },

  // Card da versão
  cardVersao: {
    backgroundColor: '#EFF6FF',

    borderRadius: 16,

    padding: 18,

    alignItems: 'center',

    marginTop: 4,
  },

  tituloVersao: {
    color: '#2563EB',

    fontSize: 18,

    fontWeight: '800',

    marginBottom: 4,
  },

  textoVersao: {
    color: '#6B7280',

    fontSize: 12,

    textAlign: 'center',

    marginTop: 3,
  },

  // Botão voltar
  botaoVoltar: {
    height: 46,

    backgroundColor: '#2563EB',

    borderRadius: 12,

    alignItems: 'center',

    justifyContent: 'center',

    flexDirection: 'row',

    marginTop: 15,
  },

  iconeVoltar: {
    color: '#FFFFFF',

    fontSize: 21,

    fontWeight: 'bold',

    marginRight: 7,
  },

  textoBotao: {
    color: '#FFFFFF',

    fontSize: 15,

    fontWeight: '700',
  },

});