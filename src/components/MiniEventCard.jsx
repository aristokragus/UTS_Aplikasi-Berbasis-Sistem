import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { colors, fontFamily } from '../constants/theme';

const MiniEventCard = ({ event }) => {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.push(`/event/${event.id}`)} style={styles.card}>
      <Image source={event.foto} style={styles.foto} />
      <View style={styles.body}>
        <Text style={styles.judul} numberOfLines={2}>
          {event.nama}
        </Text>
        <Text style={styles.meta} numberOfLines={1}>
          {event.tanggalShort}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 186,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 14,
    overflow: 'hidden',
  },
  foto: {
    width: '100%',
    height: 96,
  },
  body: {
    padding: 10,
  },
  judul: {
    fontFamily: fontFamily.serif,
    fontSize: 12.5,
    lineHeight: 16,
    color: colors.navy,
  },
  meta: {
    fontSize: 9.5,
    color: colors.inkSoft,
    marginTop: 4,
  },
});

export default MiniEventCard;
