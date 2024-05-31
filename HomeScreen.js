import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: '#c7ffcf' }]}>
      <Text style={styles.title}>Univent-Map</Text>
      <View style={styles.buttonContainer}>
        <Button title="Etkinlik Oluştur" onPress={() => navigation.navigate('Map', { action: 'create' })} />
        <Button title="Oluşturulan Etkinliğe Katıl" onPress={() => navigation.navigate('Map', { action: 'join' })} />
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="user" size={30} color="black" />
          <Text>Profil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="bell" size={30} color="black" />
          <Text>Bildirimler</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="envelope" size={30} color="black" />
          <Text>Mesajlar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="cog" size={30} color="black" />
          <Text>Ayarlar</Text>
        </TouchableOpacity>
      </View>
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
  buttonContainer: {
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 20,
  },
  iconButton: {
    alignItems: 'center',
  },
});
