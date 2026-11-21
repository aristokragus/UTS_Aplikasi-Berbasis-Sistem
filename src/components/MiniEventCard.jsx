import React from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { colors, fontFamily, radius } from '../constants/theme';

const MiniEventCard = ({ event }) => {
  const router = useRouter();

  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => router.push(`/event/${event.id}`)}
      style={styles.card}
    >
      <Image source={event.foto} style={styles.foto} />
      <Text style={styles.tanggal}>
        {event.tanggalShort} 2026 · {event.kategori}
      </Text>
      <Text style={styles.nama} numberOfLines={2}>
        {event.nama}
      </Text>
      <Text style={styles.venue} numberOfLines={1}>
        {event.venueShort}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 140,
    flexShrink: 0,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.card,
    overflow: 'hidden',
    paddingBottom: 13,
  },
  foto: {
    height: 108,
    width: '100%',
  },
  tanggal: {
    fontSize: 8.5,
    fontFamily: fontFamily.sansBold,
    letterSpacing: 1.6,
    color: colors.gold,
    marginTop: 10,
    marginHorizontal: 12,
  },
  nama: {
    fontFamily: fontFamily.serif,
    fontSize: 13.5,
    lineHeight: 17,
    color: colors.navy,
    marginTop: 4,
    marginHorizontal: 12,
  },
  venue: {
    fontSize: 9.5,
    fontFamily: fontFamily.sans,
    lineHeight: 13,
    color: colors.inkSoft,
    marginTop: 4,
    marginHorizontal: 12,
  },
});

export default MiniEventCard;