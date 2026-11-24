import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { colors, fontFamily } from '../constants/theme';

const EventCard = ({ event, index = 0 }) => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.push(`/event/${event.id}`)}
      style={[styles.row, index % 2 === 1 && styles.rowReverse]}
    >
      <Image source={event.foto} style={styles.foto} />
      <View style={styles.body}>
        <Text style={styles.judul} numberOfLines={2}>
          {event.nama}
        </Text>
        <Text style={styles.meta} numberOfLines={1}>
          {event.tanggalShort} · {event.venueShort}
        </Text>
        <View style={styles.tags}>
          <Text style={styles.tag}>{event.kategori}</Text>
          {event.privat && <Text style={[styles.tag, styles.tagPrivate]}>Privat</Text>}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 16,
    padding: 10,
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  foto: {
    width: 64,
    height: 64,
    borderRadius: 12,
  },
  body: {
    flex: 1,
    minWidth: 0,
  },
  judul: {
    fontFamily: fontFamily.serif,
    fontSize: 13.5,
    lineHeight: 17,
    color: colors.navy,
  },
  meta: {
    fontSize: 10,
    color: colors.inkSoft,
    marginTop: 3,
  },
  tags: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 6,
    flexWrap: 'wrap',
  },
  tag: {
    fontSize: 8,
    fontFamily: fontFamily.sansBold,
    letterSpacing: 1.2,
    color: colors.gold,
    backgroundColor: colors.goldSoft,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 999,
    overflow: 'hidden',
  },
  tagPrivate: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.gold,
  },
});

export default EventCard;