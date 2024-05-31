import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Modal, TextInput } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { useEvent } from '../context/EventContext';

export default function MapScreen({ route, navigation }) {
  const { action } = route.params;
  const { state, dispatch } = useEvent();
  const [modalVisible, setModalVisible] = useState(false);
  const [eventName, setEventName] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleMapPress = (e) => {
    if (action === 'create') {
      setSelectedLocation(e.nativeEvent.coordinate);
      setModalVisible(true);
    }
  };

  const handleEventCreation = () => {
    if (eventName.trim()) {
      dispatch({
        type: 'ADD_EVENT',
        payload: {
          coordinate: selectedLocation,
          title: eventName,
          description: 'Bu bir etkinliktir.',
          currentQuota: 0,
          maxQuota: 100,
        },
      });
      alert(`Etkinlik oluşturuldu: ${eventName}`);
      setModalVisible(false);
      setEventName('');
    } else {
      alert('Etkinlik adı girmelisiniz.');
    }
  };

  const handleJoinEvent = (index) => {
    dispatch({
      type: 'JOIN_EVENT',
      payload: index,
    });
    alert('Etkinliğe katıldınız!');
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 41.451139,
          longitude: 31.761861,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={handleMapPress}
      >
        {state.events.map((event, index) => (
          <Marker key={index} coordinate={event.coordinate} title={event.title}>
            <Callout>
              <View style={styles.callout}>
                <Text>{event.title}</Text>
                <Text>{event.description}</Text>
                <Text>Kontenjan: {event.currentQuota}/{event.maxQuota}</Text>
                {action === 'join' && (
                  <Button title="Etkinliğe Katıl" onPress={() => handleJoinEvent(index)} />
                )}
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text>Etkinlik Adı:</Text>
          <TextInput
            style={styles.input}
            placeholder="Etkinlik adını girin"
            value={eventName}
            onChangeText={setEventName}
          />
          <Button title="Oluştur" onPress={handleEventCreation} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    left: 50,
    right: 50,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: 200,
    padding: 10,
  },
  callout: {
    width: 200,
  },
});
