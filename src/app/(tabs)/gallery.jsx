import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Gallery = () => {
  return (
    <View style={styles.wrap}>
      <Text style={styles.text}>Gallery</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 16 },
});

export default Gallery;