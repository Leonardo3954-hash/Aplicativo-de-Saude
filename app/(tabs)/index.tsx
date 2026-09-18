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
import HabitCard from '../../components/HabitCard';

export default function HomeScreen() {
  // Lista de hábitos
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

  // Guarda o texto digitado no campo
  const [novoHabito, setNovoHabito] = useState('');

  // Adiciona um novo hábito
  function adicionarHabito() {
    // Não permite adicionar campo vazio
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

  // Marca o hábito como concluído
  function marcarComoFeito(id: string) {
    const listaAtualizada = habitos.map((habito) => {
      if (habito.id === id) {
        return { ...habito, feito: true };
      }

      return habito;
    });

    setHabitos(listaAtualizada);
  }

  // Exclui um hábito
  function excluirHabito(id: string) {
    const listaAtualizada = habitos.filter(
      (habito) => habito.id !== id
    );

    setHabitos(listaAtualizada);
  }

  // Conta quantos hábitos já foram concluídos
  const quantidadeFeitos = habitos.filter(
    (habito) => habito.feito
  ).length;

  // Calcula a porcentagem de progresso
  const progresso =
    habitos.length === 0
      ? 0
      : quantidadeFeitos / habitos.length;

  return (
    <View style={styles.container}>

      {/* Barra superior do aplicativo */}
      <Navbar />

      <FlatList
        style={styles.lista}
        contentContainerStyle={styles.conteudo}
        data={habitos}
        keyExtractor={(item) => item.id}

        // Cabeçalho da lista
        ListHeaderComponent={
          <View>

            {/* Título */}
            <Text style={styles.titulo}>
              Seus hábitos saudáveis
            </Text>

            <Text style={styles.subtitulo}>
              Pequenas ações, grandes resultados para sua saúde.
            </Text>

            {/* Card de progresso */}
            <View style={styles.cardProgresso}>

              <View style={styles.linhaProgresso}>
                <View>
                  <Text style={styles.tituloProgresso}>
                    Seu progresso hoje
                  </Text>

                  <Text style={styles.textoProgresso}>
                    {quantidadeFeitos} de {habitos.length}{' '}
                    hábitos concluídos
                  </Text>
                </View>

                <View style={styles.circuloProgresso}>
                  <Text style={styles.numeroProgresso}>
                    {Math.round(progresso * 100)}%
                  </Text>
                </View>
              </View>

              {/* Barra de progresso */}
              <View style={styles.barraFundo}>
                <View
                  style={[
                    styles.barraPreenchida,
                    {
                      width: `${progresso * 100}%`,
                    },
                  ]}
                />
              </View>
            </View>

            {/* Área para adicionar hábito */}
            <Text style={styles.tituloAdicionar}>
              Adicionar novo hábito
            </Text>

            <View style={styles.areaAdicionar}>

              <TextInput
                style={styles.input}
                placeholder="Ex: Beber água"
                placeholderTextColor="#9CA3AF"
                value={novoHabito}
                onChangeText={setNovoHabito}
              />

              <TouchableOpacity
                style={styles.botaoAdicionar}
                onPress={adicionarHabito}
              >
                <Text style={styles.iconeAdicionar}>+</Text>

                <Text style={styles.textoBotao}>
                  Adicionar hábito
                </Text>
              </TouchableOpacity>

            </View>

            {/* Título da lista */}
            <View style={styles.linhaTituloLista}>
              <Text style={styles.tituloLista}>
                Seus hábitos
              </Text>

              <Text style={styles.contador}>
                {habitos.length}
              </Text>
            </View>

          </View>
        }

        // Cada hábito será exibido através do HabitCard
        renderItem={({ item }) => (
          <HabitCard
            item={item}
            marcarComoFeito={marcarComoFeito}
            excluirHabito={excluirHabito}
          />
        )}

        // Mensagem caso não existam hábitos
        ListEmptyComponent={
          <View style={styles.semHabitos}>
            <Text style={styles.iconeSemHabitos}>♡</Text>

            <Text style={styles.textoSemHabitos}>
              Nenhum hábito cadastrado
            </Text>

            <Text style={styles.subtextoSemHabitos}>
              Adicione seu primeiro hábito saudável acima.
            </Text>
          </View>
        }

        // Espaço no final da tela
        ListFooterComponent={
          <View style={styles.espacoFinal} />
        }

        showsVerticalScrollIndicator={false}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  // Tela principal
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  // Lista
  lista: {
    flex: 1,
  },

  // Conteúdo interno
  conteudo: {
    padding: 18,
    paddingBottom: 30,
  },

  // Título principal
  titulo: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1F2937',
    marginTop: 5,
    marginBottom: 5,
  },

  // Subtítulo
  subtitulo: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 18,
  },

  // Card de progresso
  cardProgresso: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 22,

    borderWidth: 1,
    borderColor: '#E5E7EB',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },

  // Linha do progresso
  linhaProgresso: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  // Título do progresso
  tituloProgresso: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 5,
  },

  // Texto do progresso
  textoProgresso: {
    fontSize: 13,
    color: '#6B7280',
  },

  // Círculo que mostra a porcentagem
  circuloProgresso: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Número da porcentagem
  numeroProgresso: {
    fontSize: 14,
    fontWeight: '800',
    color: '#2563EB',
  },

  // Fundo da barra
  barraFundo: {
    width: '100%',
    height: 9,
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
    overflow: 'hidden',
  },

  // Parte preenchida da barra
  barraPreenchida: {
    height: '100%',
    backgroundColor: '#10B981',
    borderRadius: 10,
  },

  // Título da área de adicionar
  tituloAdicionar: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 10,
  },

  // Área de adicionar
  areaAdicionar: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 24,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },

  // Campo de texto
  input: {
    height: 48,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 15,
    color: '#1F2937',
    marginBottom: 10,
  },

  // Botão adicionar
  botaoAdicionar: {
    height: 46,
    backgroundColor: '#10B981',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  // Ícone +
  iconeAdicionar: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '400',
    marginRight: 7,
  },

  // Texto do botão
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

  // Linha do título dos hábitos
  linhaTituloLista: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  // Título da lista
  tituloLista: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1F2937',
  },

  // Número de hábitos
  contador: {
    marginLeft: 8,
    minWidth: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#DBEAFE',
    color: '#2563EB',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 13,
    fontWeight: '800',
    paddingTop: 5,
  },

  // Quando não existem hábitos
  semHabitos: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  // Ícone da mensagem
  iconeSemHabitos: {
    fontSize: 40,
    color: '#2563EB',
    marginBottom: 10,
  },

  // Texto principal
  textoSemHabitos: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 5,
  },

  // Subtexto
  subtextoSemHabitos: {
    fontSize: 13,
    color: '#6B7280',
    textAlign: 'center',
  },

  // Espaço final
  espacoFinal: {
    height: 20,
  },
});