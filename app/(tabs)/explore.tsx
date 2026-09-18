import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Share,
} from 'react-native';

export default function ExploreScreen() {
  // Guarda o peso digitado
  const [peso, setPeso] = useState('');

  // Guarda a altura digitada
  const [altura, setAltura] = useState('');

  // Guarda o resultado do cálculo
  const [resultado, setResultado] = useState('');

  // Calcula o IMC
  function calcularIMC() {
    // Converte vírgula em ponto para permitir valores como 1,80
    const pesoNumero = parseFloat(peso.replace(',', '.'));
    const alturaNumero = parseFloat(altura.replace(',', '.'));

    // Verifica se os valores foram preenchidos corretamente
    if (
      !pesoNumero ||
      !alturaNumero ||
      pesoNumero <= 0 ||
      alturaNumero <= 0
    ) {
      setResultado('Preencha peso e altura corretamente.');
      return;
    }

    // Fórmula do IMC
    const imc =
      pesoNumero / (alturaNumero * alturaNumero);

    // Classificação usada no cálculo original
    let classificacao = '';

    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc < 25) {
      classificacao = 'Peso normal';
    } else if (imc < 30) {
      classificacao = 'Sobrepeso';
    } else {
      classificacao = 'Obesidade';
    }

    // Mostra o resultado
    setResultado(
      `Seu IMC é: ${imc.toFixed(2)}\nClassificação: ${classificacao}`
    );
  }

  // Compartilha o resultado
  async function compartilharResultado() {
    // Não faz nada se ainda não houver resultado
    if (resultado === '') {
      return;
    }

    try {
      await Share.share({
        message: `${resultado}

Calculado pelo Habit Life.`,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>

      {/* Título da tela */}
      <View style={styles.tituloContainer}>

        <View style={styles.iconeTitulo}>
          <Text style={styles.icone}>
            ⚖
          </Text>
        </View>

        <View>
          <Text style={styles.titulo}>
            Calculadora de IMC
          </Text>

          <Text style={styles.subtituloTitulo}>
            Faça o cálculo de forma simples
          </Text>
        </View>

      </View>

      {/* Card principal */}
      <View style={styles.card}>

        <Text style={styles.tituloCard}>
          Informe seus dados
        </Text>

        <Text style={styles.textoCard}>
          Digite seu peso e sua altura para
          realizar o cálculo.
        </Text>

        {/* Campo de peso */}
        <Text style={styles.label}>
          ⚖ Peso
        </Text>

        <View style={styles.inputContainer}>

          <TextInput
            style={styles.input}
            placeholder="Ex.: 70"
            placeholderTextColor="#9CA3AF"
            keyboardType="numeric"
            value={peso}
            onChangeText={setPeso}
          />

          <Text style={styles.unidade}>
            kg
          </Text>

        </View>

        {/* Campo de altura */}
        <Text style={styles.label}>
          📏 Altura
        </Text>

        <View style={styles.inputContainer}>

          <TextInput
            style={styles.input}
            placeholder="Ex.: 1,80"
            placeholderTextColor="#9CA3AF"
            keyboardType="numeric"
            value={altura}
            onChangeText={setAltura}
          />

          <Text style={styles.unidade}>
            m
          </Text>

        </View>

        {/* Botão calcular */}
        <TouchableOpacity
          style={styles.botao}
          onPress={calcularIMC}
        >
          <Text style={styles.iconeBotao}>
            ▣
          </Text>

          <Text style={styles.textoBotao}>
            Calcular IMC
          </Text>
        </TouchableOpacity>

      </View>

      {/* Resultado */}
      {resultado !== '' && (
        <View style={styles.resultadoContainer}>

          <View style={styles.resultadoCabecalho}>

            <View style={styles.iconeResultado}>
              <Text style={styles.iconeResultadoTexto}>
                ✓
              </Text>
            </View>

            <Text style={styles.tituloResultado}>
              Seu resultado
            </Text>

          </View>

          <View style={styles.resultadoBox}>

            <Text style={styles.resultadoTexto}>
              {resultado}
            </Text>

          </View>

          {/* Botão compartilhar */}
          <TouchableOpacity
            style={styles.botaoCompartilhar}
            onPress={compartilharResultado}
          >
            <Text style={styles.iconeCompartilhar}>
              ↗
            </Text>

            <Text style={styles.textoCompartilhar}>
              Compartilhar resultado
            </Text>
          </TouchableOpacity>

        </View>
      )}

      {/* Informação */}
      <View style={styles.infoContainer}>

        <View style={styles.infoIcone}>
          <Text style={styles.infoIconeTexto}>
            i
          </Text>
        </View>

        <View style={styles.infoTextoContainer}>

          <Text style={styles.infoTitulo}>
            Sobre o IMC
          </Text>

          <Text style={styles.infoTexto}>
            O IMC é uma medida de referência que
            relaciona peso e altura. A interpretação
            pode variar de acordo com idade e outros
            fatores.
          </Text>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  // Tela principal
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 18,
  },

  // Cabeçalho da tela
  tituloContainer: {
    backgroundColor: '#2563EB',
    minHeight: 86,
    borderRadius: 18,

    paddingHorizontal: 18,
    paddingVertical: 14,

    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 16,

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
  iconeTitulo: {
    width: 48,
    height: 48,
    borderRadius: 24,

    backgroundColor: '#FFFFFF',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 12,
  },

  // Ícone do título
  icone: {
    fontSize: 23,
    color: '#2563EB',
  },

  // Título
  titulo: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '800',
  },

  // Subtítulo
  subtituloTitulo: {
    color: '#DBEAFE',
    fontSize: 12,
    marginTop: 2,
  },

  // Card dos campos
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,

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

    marginBottom: 16,
  },

  // Título do card
  tituloCard: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 5,
  },

  // Descrição do card
  textoCard: {
    fontSize: 13,
    color: '#6B7280',
    lineHeight: 19,
    marginBottom: 17,
  },

  // Nome dos campos
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 7,
  },

  // Container do campo
  inputContainer: {
    height: 50,

    backgroundColor: '#F8FAFC',

    borderWidth: 1,
    borderColor: '#E5E7EB',

    borderRadius: 12,

    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 14,
  },

  // Campo de texto
  input: {
    flex: 1,
    height: '100%',

    paddingHorizontal: 14,

    fontSize: 15,
    color: '#1F2937',
  },

  // Unidade kg / m
  unidade: {
    color: '#374151',
    fontSize: 14,
    fontWeight: '700',
    paddingHorizontal: 14,
  },

  // Botão calcular
  botao: {
    height: 48,

    backgroundColor: '#10B981',

    borderRadius: 12,

    alignItems: 'center',
    justifyContent: 'center',

    flexDirection: 'row',

    marginTop: 2,
  },

  // Ícone calcular
  iconeBotao: {
    color: '#FFFFFF',
    fontSize: 17,
    marginRight: 8,
  },

  // Texto calcular
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },

  // Card do resultado
  resultadoContainer: {
    backgroundColor: '#FFFFFF',

    borderRadius: 18,

    padding: 18,

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

    marginBottom: 16,
  },

  // Cabeçalho do resultado
  resultadoCabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  // Ícone do resultado
  iconeResultado: {
    width: 36,
    height: 36,
    borderRadius: 18,

    backgroundColor: '#DCFCE7',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 10,
  },

  iconeResultadoTexto: {
    color: '#10B981',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // Título do resultado
  tituloResultado: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1F2937',
  },

  // Caixa escura do resultado
  resultadoBox: {
    backgroundColor: '#334155',

    borderRadius: 14,

    paddingVertical: 18,
    paddingHorizontal: 15,

    alignItems: 'center',

    marginBottom: 12,
  },

  // Texto do resultado
  resultadoTexto: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 26,
  },

  // Compartilhar
  botaoCompartilhar: {
    height: 45,

    backgroundColor: '#EFF6FF',

    borderRadius: 12,

    alignItems: 'center',
    justifyContent: 'center',

    flexDirection: 'row',
  },

  iconeCompartilhar: {
    color: '#2563EB',
    fontSize: 20,
    marginRight: 7,
  },

  textoCompartilhar: {
    color: '#2563EB',
    fontSize: 14,
    fontWeight: '700',
  },

  // Card informativo
  infoContainer: {
    backgroundColor: '#EFF6FF',

    borderRadius: 16,

    padding: 15,

    flexDirection: 'row',

    borderWidth: 1,
    borderColor: '#DBEAFE',
  },

  // Ícone de informação
  infoIcone: {
    width: 32,
    height: 32,
    borderRadius: 16,

    backgroundColor: '#2563EB',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 10,
  },

  infoIconeTexto: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  // Área dos textos
  infoTextoContainer: {
    flex: 1,
  },

  infoTitulo: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1E3A8A',
    marginBottom: 4,
  },

  infoTexto: {
    fontSize: 12,
    color: '#475569',
    lineHeight: 17,
  },
});