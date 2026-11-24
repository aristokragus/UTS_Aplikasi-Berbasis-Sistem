import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { colors, fontFamily } from '../constants/theme';

const FeaturedCard = ({ event, height = 262, style }) => {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.push(`/event/${event.id}`)} style={[styles.wrap, style, { height }]}>
      <Image source={event.fotoHero || event.foto} style={styles.foto} />
      <LinearGradient
        colors={['rgba(30,35,74,0)', 'rgba(30,35,74,0.62)']}
        style={styles.shade}
      />
      <View style={styles.content}>
        <Text style={styles.kicker}>{event.kategoriLengkap}</Text>
        <Text style={styles.judul} numberOfLines={2}>
          {event.nama}
        </Text>
        <Text style={styles.meta} numberOfLines={1}>
          {event.tanggal} · {event.venue}
        </Text>
        <View style={styles.chip}>
          <Text style={styles.chipText}>Lihat Detail</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: colors.navy,
  },
  foto: {
    width: '100%',
    height: '100%',
  },
  shade: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    paddingTop: 40,
  },
  kicker: {
    fontSize: 9,
    fontFamily: fontFamily.sansBold,
    letterSpacing: 2,
    color: colors.goldLight,
    marginBottom: 6,
  },
  judul: {
    fontFamily: fontFamily.serif,
    fontSize: 19,
    lineHeight: 24,
    color: colors.cream,
  },
  meta: {
    fontSize: 10,
    fontFamily: fontFamily.sansMedium,
    color: colors.goldSoft,
    marginTop: 5,
  },
  chip: {
    alignSelf: 'flex-start',
    marginTop: 10,
    backgroundColor: colors.gold,
    borderRadius: 999,
    paddingHorizontal: 11,
    paddingVertical: 5,
  },
  chipText: {
    fontSize: 9,
    fontFamily: fontFamily.sansBold,
    letterSpacing: 1.6,
    color: colors.cream,
  },
});

export default FeaturedCard;