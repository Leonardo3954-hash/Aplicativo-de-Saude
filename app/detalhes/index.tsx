import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { Stack, router, useLocalSearchParams } from 'expo-router';

export default function Detalhes() {
  const { nome, beneficio, dica } = useLocalSearchParams();

  const [beneficioEditado, setBeneficioEditado] = useState(
    String(beneficio || '')
  );

  const [dicaEditada, setDicaEditada] = useState(
    String(dica || '')
  );

  return (
    <>
      {/* Título da barra superior do Expo Router */}
      <Stack.Screen
        options={{
          title: 'DETALHES',
        }}
      />

      <View style={styles.container}>

        {/* ===================================== */}
        {/* CABEÇALHO */}
        {/* ===================================== */}

        <View style={styles.header}>

          <View style={styles.iconeHeader}>
            <Text style={styles.iconeHeaderTexto}>
              ♥
            </Text>
          </View>

          <View style={styles.headerTextos}>
            <Text style={styles.headerTitulo}>
              Informações
            </Text>

            <Text style={styles.headerSubtitulo}>
              Conheça melhor este hábito
            </Text>
          </View>

        </View>

        {/* ===================================== */}
        {/* NOME DO HÁBITO */}
        {/* ===================================== */}

        <View style={styles.nomeContainer}>

          <Text style={styles.nome}>
            {nome}
          </Text>

          <Text style={styles.nomeSubtitulo}>
            Hábito saudável
          </Text>

        </View>

        {/* ===================================== */}
        {/* BENEFÍCIO */}
        {/* ===================================== */}

        <View style={styles.card}>

          <View style={styles.tituloCardContainer}>

            <View style={styles.iconeCardBeneficio}>
              <Text style={styles.iconeCardTexto}>
                ♥
              </Text>
            </View>

            <Text style={styles.subtitulo}>
              Benefício para a saúde
            </Text>

          </View>

          <TextInput
            style={styles.input}
            placeholder="Digite o benefício desse hábito"
            placeholderTextColor="#9CA3AF"
            value={beneficioEditado}
            onChangeText={setBeneficioEditado}
            multiline
            textAlignVertical="top"
          />

        </View>

        {/* ===================================== */}
        {/* DICA PRÁTICA */}
        {/* ===================================== */}

        <View style={styles.card}>

          <View style={styles.tituloCardContainer}>

            <View style={styles.iconeCardDica}>
              <Text style={styles.iconeDicaTexto}>
                💡
              </Text>
            </View>

            <Text style={styles.subtitulo}>
              Dica prática
            </Text>

          </View>

          <TextInput
            style={styles.input}
            placeholder="Digite uma dica prática"
            placeholderTextColor="#9CA3AF"
            value={dicaEditada}
            onChangeText={setDicaEditada}
            multiline
            textAlignVertical="top"
          />

        </View>

        {/* ===================================== */}
        {/* BOTÃO SALVAR */}
        {/* ===================================== */}

        <TouchableOpacity
          style={styles.botaoSalvar}
          onPress={() => {
            console.log('Alterações salvas');
          }}
        >
          <Text style={styles.iconeSalvar}>
            ✓
          </Text>

          <Text style={styles.textoBotaoSalvar}>
            Salvar alterações
          </Text>
        </TouchableOpacity>

        {/* ===================================== */}
        {/* BOTÃO VOLTAR */}
        {/* ===================================== */}

        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => router.back()}
        >
          <Text style={styles.iconeVoltar}>
            ←
          </Text>

          <Text style={styles.textoBotaoVoltar}>
            Voltar
          </Text>
        </TouchableOpacity>

      </View>
    </>
  );
}

const styles = StyleSheet.create({

  // ==========================================
  // TELA
  // ==========================================

  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 15,
    paddingTop: 15,
  },

  // ==========================================
  // CABEÇALHO
  // ==========================================

  header: {
    backgroundColor: '#2563EB',

    minHeight: 82,

    borderRadius: 18,

    paddingHorizontal: 16,
    paddingVertical: 13,

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 18,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.10,

    shadowRadius: 6,

    elevation: 3,
  },

  iconeHeader: {
    width: 48,
    height: 48,

    borderRadius: 24,

    backgroundColor: '#FFFFFF',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 12,
  },

  iconeHeaderTexto: {
    color: '#2563EB',

    fontSize: 25,

    fontWeight: 'bold',
  },

  headerTextos: {
    flex: 1,
  },

  headerTitulo: {
    color: '#FFFFFF',

    fontSize: 21,

    fontWeight: '800',
  },

  headerSubtitulo: {
    color: '#DBEAFE',

    fontSize: 11,

    marginTop: 3,
  },

  // ==========================================
  // NOME DO HÁBITO
  // ==========================================

  nomeContainer: {
    paddingHorizontal: 3,

    marginBottom: 16,
  },

  nome: {
    fontSize: 25,

    fontWeight: '800',

    color: '#1F2937',

    marginBottom: 4,
  },

  nomeSubtitulo: {
    fontSize: 14,

    color: '#6B7280',
  },

  // ==========================================
  // CARD
  // ==========================================

  card: {
    backgroundColor: '#FFFFFF',

    borderRadius: 17,

    padding: 16,

    marginBottom: 14,

    borderWidth: 1,

    borderColor: '#E5E7EB',

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.06,

    shadowRadius: 7,

    elevation: 3,
  },

  // ==========================================
  // TÍTULO DOS CARDS
  // ==========================================

  tituloCardContainer: {
    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 12,
  },

  iconeCardBeneficio: {
    width: 38,
    height: 38,

    borderRadius: 19,

    backgroundColor: '#DCFCE7',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 10,
  },

  iconeCardTexto: {
    color: '#10B981',

    fontSize: 19,

    fontWeight: 'bold',
  },

  iconeCardDica: {
    width: 38,
    height: 38,

    borderRadius: 19,

    backgroundColor: '#FEF3C7',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 10,
  },

  iconeDicaTexto: {
    fontSize: 19,
  },

  subtitulo: {
    flex: 1,

    fontSize: 17,

    fontWeight: '800',

    color: '#1F2937',
  },

  // ==========================================
  // INPUT
  // ==========================================

  input: {
    minHeight: 90,

    backgroundColor: '#F8FAFC',

    borderWidth: 1,

    borderColor: '#E5E7EB',

    borderRadius: 12,

    padding: 12,

    fontSize: 15,

    lineHeight: 21,

    color: '#1F2937',
  },

  // ==========================================
  // BOTÃO SALVAR
  // ==========================================

  botaoSalvar: {
    height: 48,

    backgroundColor: '#10B981',

    borderRadius: 12,

    alignItems: 'center',

    justifyContent: 'center',

    flexDirection: 'row',

    marginTop: 2,

    marginBottom: 10,
  },

  iconeSalvar: {
    color: '#FFFFFF',

    fontSize: 19,

    fontWeight: 'bold',

    marginRight: 7,
  },

  textoBotaoSalvar: {
    color: '#FFFFFF',

    fontSize: 15,

    fontWeight: '700',
  },

  // ==========================================
  // BOTÃO VOLTAR
  // ==========================================

  botaoVoltar: {
    height: 44,

    backgroundColor: '#EFF6FF',

    borderRadius: 12,

    alignItems: 'center',

    justifyContent: 'center',

    flexDirection: 'row',
  },

  iconeVoltar: {
    color: '#2563EB',

    fontSize: 21,

    fontWeight: 'bold',

    marginRight: 7,
  },

  textoBotaoVoltar: {
    color: '#2563EB',

    fontSize: 14,

    fontWeight: '700',
  },

});