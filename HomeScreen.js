import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Etkinlik Uygulaması</Text>
      <Button title="Etkinlik Oluştur" onPress={() => navigation.navigate('Map', { action: 'create' })} />
      <Button title="Oluşturulan Etkinliğe Katıl" onPress={() => navigation.navigate('Map', { action: 'join' })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
