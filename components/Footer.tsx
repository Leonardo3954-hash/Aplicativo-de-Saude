import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.texto}>Trabalho Escolar - 2026</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'lightgray',
    padding: 12,
    alignItems: 'center',
  },
  texto: {
    fontSize: 14,
  },
});