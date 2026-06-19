import { StyleSheet, Text, View } from 'react-native';

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <Text style={styles.texto}>App Saúde</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#2563EB',
    padding: 20,
    alignItems: 'center',
    elevation: 4,
  },

  texto: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});