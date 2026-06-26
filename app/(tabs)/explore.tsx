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
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  function calcularIMC() {
    const pesoNumero = parseFloat(peso.replace(',', '.'));
    const alturaNumero = parseFloat(altura.replace(',', '.'));

    if (!pesoNumero || !alturaNumero) {
      setResultado('Preencha peso e altura corretamente.');
      return;
    }

    const imc = pesoNumero / (alturaNumero * alturaNumero);

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

    setResultado(
      `Seu IMC é: ${imc.toFixed(2)}\nClassificação: ${classificacao}`
    );
  }

  async function compartilharResultado() {
    if (resultado === '') return;

    try {
      await Share.share({
        message: `${resultado}

Calculado pelo App Saúde.`,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>
          Calculadora de IMC
        </Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Digite seu peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua altura (Ex: 1,80)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={calcularIMC}
      >
        <Text style={styles.textoBotao}>
          Calcular IMC
        </Text>
      </TouchableOpacity>

      {resultado !== '' && (
        <>
          <View style={styles.resultadoContainer}>
            <Text style={styles.resultadoTexto}>
              {resultado}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.botaoCompartilhar}
            onPress={compartilharResultado}
          >
            <Text style={styles.textoBotao}>
              Compartilhar Resultado
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8FAFC',
  },

  tituloContainer: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 15,
    marginBottom: 25,
    alignItems: 'center',
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    color: '#1F2937',
  },

  botao: {
    backgroundColor: '#10B981',
    width: '60%',
    alignSelf: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  botaoCompartilhar: {
    backgroundColor: '#2563EB',
    width: '60%',
    alignSelf: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 17,
  },

  resultadoContainer: {
    marginTop: 30,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  resultadoTexto: {
    color: '#1F2937',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});