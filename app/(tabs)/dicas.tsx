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
    descricao: 'Mantenha-se hidratado ao longo do dia.',
    icone: '💧',
    cor: '#DBEAFE',
  },
  {
    id: '2',
    titulo: 'Atividade Física',
    descricao: 'Movimente-se regularmente e mantenha uma rotina ativa.',
    icone: '🏃',
    cor: '#DCFCE7',
  },
  {
    id: '3',
    titulo: 'Dormir Bem',
    descricao: 'Tenha uma rotina de sono adequada para descansar melhor.',
    icone: '🌙',
    cor: '#EDE9FE',
  },
  {
    id: '4',
    titulo: 'Alimentação',
    descricao: 'Inclua frutas, verduras e alimentos variados nas refeições.',
    icone: '🥗',
    cor: '#FFEDD5',
  },
  {
    id: '5',
    titulo: 'Saúde Mental',
    descricao: 'Reserve momentos para descansar, relaxar e cuidar de você.',
    icone: '🧠',
    cor: '#CCFBF1',
  },
];

export default function DicasScreen() {
  return (
    <View style={styles.container}>

      {/* Cabeçalho */}
      <View style={styles.header}>

        {/* Ícone */}
        <View style={styles.iconeHeader}>
          <Text style={styles.iconeHeaderTexto}>
            ♥
          </Text>
        </View>

        {/* Título */}
        <View>
          <Text style={styles.titulo}>
            Dicas de Saúde
          </Text>

          <Text style={styles.subtitulo}>
            Pequenas atitudes para uma vida mais saudável
          </Text>
        </View>

      </View>

      {/* Texto introdutório */}
      <View style={styles.introducao}>
        <Text style={styles.introducaoTitulo}>
          Cuide da sua saúde 💚
        </Text>

        <Text style={styles.introducaoTexto}>
          Confira algumas dicas simples que podem
          ajudar a tornar sua rotina mais saudável.
        </Text>
      </View>

      {/* Lista de dicas */}
      <FlatList
        data={dicas}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.lista}

        renderItem={({ item }) => (
          <View style={styles.card}>

            {/* Ícone da dica */}
            <View
              style={[
                styles.iconeContainer,
                { backgroundColor: item.cor },
              ]}
            >
              <Text style={styles.icone}>
                {item.icone}
              </Text>
            </View>

            {/* Conteúdo */}
            <View style={styles.conteudoCard}>

              <Text style={styles.cardTitulo}>
                {item.titulo}
              </Text>

              <Text style={styles.cardTexto}>
                {item.descricao}
              </Text>

            </View>

          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  // Tela principal
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 15,
    paddingTop: 15,
  },

  // Cabeçalho
  header: {
    backgroundColor: '#2563EB',

    minHeight: 82,

    borderRadius: 18,

    paddingHorizontal: 16,
    paddingVertical: 13,

    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 3,
  },

  // Círculo do ícone
  iconeHeader: {
    width: 48,
    height: 48,
    borderRadius: 24,

    backgroundColor: '#FFFFFF',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 12,
  },

  // Ícone do cabeçalho
  iconeHeaderTexto: {
    color: '#2563EB',
    fontSize: 25,
    fontWeight: 'bold',
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
    fontSize: 11,
    marginTop: 3,
  },

  // Introdução
  introducao: {
    marginBottom: 14,
    paddingHorizontal: 3,
  },

  introducaoTitulo: {
    color: '#1F2937',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 4,
  },

  introducaoTexto: {
    color: '#6B7280',
    fontSize: 13,
    lineHeight: 19,
  },

  // Lista
  lista: {
    paddingBottom: 20,
  },

  // Card
  card: {
    backgroundColor: '#FFFFFF',

    borderRadius: 17,

    padding: 15,

    marginBottom: 12,

    flexDirection: 'row',
    alignItems: 'center',

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

  // Círculo do ícone
  iconeContainer: {
    width: 52,
    height: 52,

    borderRadius: 26,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 13,
  },

  // Ícone
  icone: {
    fontSize: 25,
  },

  // Área dos textos
  conteudoCard: {
    flex: 1,
  },

  // Título do card
  cardTitulo: {
    fontSize: 17,
    fontWeight: '800',
    color: '#1F2937',

    marginBottom: 5,
  },

  // Descrição
  cardTexto: {
    color: '#6B7280',
    fontSize: 13,
    lineHeight: 19,
  },
});