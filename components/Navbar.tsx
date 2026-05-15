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
    backgroundColor: 'green',
    padding: 20,
    alignItems: 'center',
  },
  texto: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});