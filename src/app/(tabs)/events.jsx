import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Events = () => {
  return (
    <View style={styles.wrap}>
      <Text style={styles.text}>Events</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 16 },
});

export default Events;