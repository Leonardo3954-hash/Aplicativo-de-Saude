import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
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
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoTexto}>
            {resultado}
          </Text>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },

  tituloContainer: {
    backgroundColor: '#0A8F08',
    padding: 15,
    borderRadius: 15,
    marginBottom: 25,
    alignItems: 'center',
  },

  titulo: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },

  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },

  botao: {
    backgroundColor: '#0A8F08',
    width: '60%',
    alignSelf: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },

  resultadoContainer: {
    marginTop: 35,
    backgroundColor: '#666666',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },

  resultadoTexto: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});