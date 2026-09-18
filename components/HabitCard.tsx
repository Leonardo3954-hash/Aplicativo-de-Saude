import { router } from 'expo-router';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HabitCard({
  item,
  marcarComoFeito,
  excluirHabito,
}: any) {

  // ==========================================
  // ESCOLHE O ÍCONE DE ACORDO COM O NOME
  // ==========================================

  function escolherVisual(nome: string) {
    const nomeMinusculo = nome.toLowerCase();

    if (
      nomeMinusculo.includes('caminhar') ||
      nomeMinusculo.includes('caminhada')
    ) {
      return {
        icone: '🚶',
        fundo: '#DCFCE7',
      };
    }

    if (
      nomeMinusculo.includes('dormir') ||
      nomeMinusculo.includes('sono')
    ) {
      return {
        icone: '🌙',
        fundo: '#EDE9FE',
      };
    }

    if (
      nomeMinusculo.includes('água') ||
      nomeMinusculo.includes('agua') ||
      nomeMinusculo.includes('hidratação') ||
      nomeMinusculo.includes('hidratacao')
    ) {
      return {
        icone: '💧',
        fundo: '#DBEAFE',
      };
    }

    if (
      nomeMinusculo.includes('atividade física') ||
      nomeMinusculo.includes('atividade fisica') ||
      nomeMinusculo.includes('exercício') ||
      nomeMinusculo.includes('exercicio') ||
      nomeMinusculo.includes('academia')
    ) {
      return {
        icone: '🏃',
        fundo: '#D1FAE5',
      };
    }

    if (
      nomeMinusculo.includes('alimentação') ||
      nomeMinusculo.includes('alimentacao') ||
      nomeMinusculo.includes('comer') ||
      nomeMinusculo.includes('fruta') ||
      nomeMinusculo.includes('verdura')
    ) {
      return {
        icone: '🥗',
        fundo: '#FFEDD5',
      };
    }

    if (
      nomeMinusculo.includes('mental') ||
      nomeMinusculo.includes('relaxar') ||
      nomeMinusculo.includes('descansar')
    ) {
      return {
        icone: '🧠',
        fundo: '#CCFBF1',
      };
    }

    // Ícone padrão
    return {
      icone: '♥',
      fundo: '#EFF6FF',
    };
  }

  // Guarda o visual escolhido
  const visual = escolherVisual(item.nome);

  return (
    <View
      style={[
        styles.card,
        item.feito && styles.cardFeito,
      ]}
    >

      {/* ===================================== */}
      {/* CABEÇALHO DO CARD */}
      {/* ===================================== */}

      <View style={styles.cabecalho}>

        {/* Ícone */}
        <View
          style={[
            styles.iconeContainer,
            {
              backgroundColor: visual.fundo,
            },
          ]}
        >
          <Text style={styles.icone}>
            {visual.icone}
          </Text>
        </View>

        {/* Nome + Status */}
        <View style={styles.tituloContainer}>

          <Text style={styles.nomeHabito}>
            {item.nome}
          </Text>

          {/* Status */}
          <View
            style={[
              styles.statusContainer,
              item.feito
                ? styles.statusFeito
                : styles.statusPendente,
            ]}
          >
            <Text
              style={[
                styles.statusTexto,
                item.feito
                  ? styles.textoStatusFeito
                  : styles.textoStatusPendente,
              ]}
            >
              {item.feito
                ? '✓ Concluído'
                : '○ Pendente'}
            </Text>
          </View>

        </View>

      </View>

      {/* ===================================== */}
      {/* DESCRIÇÃO */}
      {/* ===================================== */}

      <Text style={styles.detalhe}>
        {item.detalhe}
      </Text>

      {/* ===================================== */}
      {/* BOTÃO DE CONCLUIR */}
      {/* ===================================== */}

      {!item.feito ? (
        <TouchableOpacity
          style={styles.botaoFeito}
          onPress={() =>
            marcarComoFeito(item.id)
          }
        >
          <Text style={styles.iconeBotao}>
            ✓
          </Text>

          <Text style={styles.textoBotaoFeito}>
            Marcar como feito
          </Text>
        </TouchableOpacity>
      ) : (
        // Mensagem exibida quando já foi concluído
        <View style={styles.mensagemConcluido}>
          <Text style={styles.iconeConcluido}>
            ✓
          </Text>

          <Text style={styles.textoConcluido}>
            Hábito concluído hoje!
          </Text>
        </View>
      )}

      {/* ===================================== */}
      {/* BOTÕES INFERIORES */}
      {/* ===================================== */}

      <View style={styles.linhaBotoes}>

        {/* BOTÃO INFORMAÇÕES */}
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
          <Text style={styles.iconeInfo}>
            ⓘ
          </Text>

          <Text style={styles.textoBotaoInfo}>
            Informações
          </Text>
        </TouchableOpacity>

        {/* BOTÃO EXCLUIR */}
        <TouchableOpacity
          style={styles.botaoExcluir}
          onPress={() =>
            excluirHabito(item.id)
          }
        >
          <Text style={styles.iconeExcluir}>
            ×
          </Text>

          <Text style={styles.textoBotaoExcluir}>
            Excluir
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  // ==========================================
  // CARD
  // ==========================================

  card: {
    backgroundColor: '#FFFFFF',

    padding: 17,

    marginBottom: 15,

    borderRadius: 18,

    borderWidth: 1,

    borderColor: '#E5E7EB',

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.07,

    shadowRadius: 8,

    elevation: 3,
  },

  // Card quando concluído
  cardFeito: {
    backgroundColor: '#F0FDF4',

    borderColor: '#BBF7D0',
  },

  // ==========================================
  // CABEÇALHO
  // ==========================================

  cabecalho: {
    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 14,
  },

  // ==========================================
  // ÍCONE
  // ==========================================

  iconeContainer: {
    width: 48,

    height: 48,

    borderRadius: 24,

    alignItems: 'center',

    justifyContent: 'center',

    marginRight: 12,
  },

  icone: {
    fontSize: 24,
  },

  // ==========================================
  // NOME
  // ==========================================

  tituloContainer: {
    flex: 1,
  },

  nomeHabito: {
    fontSize: 20,

    fontWeight: '700',

    color: '#1F2937',

    marginBottom: 6,
  },

  // ==========================================
  // STATUS
  // ==========================================

  statusContainer: {
    alignSelf: 'flex-start',

    paddingHorizontal: 10,

    paddingVertical: 4,

    borderRadius: 20,
  },

  statusPendente: {
    backgroundColor: '#FEF3C7',
  },

  statusFeito: {
    backgroundColor: '#DCFCE7',
  },

  statusTexto: {
    fontSize: 12,

    fontWeight: '700',
  },

  textoStatusPendente: {
    color: '#92400E',
  },

  textoStatusFeito: {
    color: '#166534',
  },

  // ==========================================
  // DESCRIÇÃO
  // ==========================================

  detalhe: {
    fontSize: 15,

    lineHeight: 21,

    color: '#6B7280',

    marginBottom: 15,
  },

  // ==========================================
  // BOTÃO MARCAR COMO FEITO
  // ==========================================

  botaoFeito: {
    backgroundColor: '#10B981',

    minHeight: 45,

    borderRadius: 12,

    alignItems: 'center',

    justifyContent: 'center',

    flexDirection: 'row',

    marginBottom: 10,
  },

  iconeBotao: {
    color: '#FFFFFF',

    fontSize: 18,

    fontWeight: 'bold',

    marginRight: 7,
  },

  textoBotaoFeito: {
    color: '#FFFFFF',

    fontSize: 15,

    fontWeight: '700',
  },

  // ==========================================
  // MENSAGEM DE CONCLUÍDO
  // ==========================================

  mensagemConcluido: {
    minHeight: 45,

    borderRadius: 12,

    backgroundColor: '#DCFCE7',

    alignItems: 'center',

    justifyContent: 'center',

    flexDirection: 'row',

    marginBottom: 10,

    borderWidth: 1,

    borderColor: '#BBF7D0',
  },

  iconeConcluido: {
    color: '#15803D',

    fontSize: 18,

    fontWeight: 'bold',

    marginRight: 7,
  },

  textoConcluido: {
    color: '#166534',

    fontSize: 14,

    fontWeight: '700',
  },

  // ==========================================
  // LINHA DOS BOTÕES
  // ==========================================

  linhaBotoes: {
    flexDirection: 'row',

    gap: 10,
  },

  // ==========================================
  // INFORMAÇÕES
  // ==========================================

  botaoInfo: {
    flex: 1,

    minHeight: 43,

    backgroundColor: '#EFF6FF',

    borderRadius: 12,

    alignItems: 'center',

    justifyContent: 'center',

    flexDirection: 'row',
  },

  iconeInfo: {
    color: '#2563EB',

    fontSize: 17,

    fontWeight: 'bold',

    marginRight: 6,
  },

  textoBotaoInfo: {
    color: '#2563EB',

    fontSize: 14,

    fontWeight: '700',
  },

  // ==========================================
  // EXCLUIR
  // ==========================================

  botaoExcluir: {
    flex: 1,

    minHeight: 43,

    backgroundColor: '#FEF2F2',

    borderRadius: 12,

    alignItems: 'center',

    justifyContent: 'center',

    flexDirection: 'row',
  },

  iconeExcluir: {
    color: '#EF4444',

    fontSize: 21,

    fontWeight: 'bold',

    marginRight: 5,
  },

  textoBotaoExcluir: {
    color: '#EF4444',

    fontSize: 14,

    fontWeight: '700',
  },

});