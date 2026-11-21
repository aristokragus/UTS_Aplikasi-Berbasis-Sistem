import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Lucide from '@react-native-vector-icons/lucide';
import { colors, fontFamily, spacing } from '../constants/theme';

const FeaturedCard = ({ event, height = 230, style }) => {
  const router = useRouter();

  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => router.push(`/event/${event.id}`)}
      style={[styles.wrap, { height }, style]}
    >
      <Image source={event.fotoHero ?? event.foto} style={styles.foto} />
      <LinearGradient
        colors={['rgba(30,35,74,0.08)', 'rgba(30,35,74,0.08)', 'rgba(30,35,74,0.88)']}
        locations={[0, 0.35, 1]}
        style={styles.shade}
      />
      <View style={styles.chip}>
        <Text style={styles.chipText}>Featured</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.kicker}>
          {event.kategori} · {event.tanggalShort} 2026
        </Text>
        <Text style={styles.judul} numberOfLines={2}>
          {event.nama}
        </Text>
        <Text style={styles.meta}>{event.venueShort}</Text>
        <View style={styles.cta}>
          <Text style={styles.ctaText}>Lihat dokumentasi</Text>
          <Lucide name="arrow-right" size={12} color={colors.goldLight} strokeWidth={2.4} />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: {
    borderRadius: 18,
    overflow: 'hidden',
    alignSelf: 'stretch',
  },
  foto: { width: '100%', height: '100%' },
  shade: {
    ...StyleSheet.absoluteFillObject,
  },
  chip: {
    position: 'absolute',
    top: 14,
    left: 14,
    backgroundColor: colors.gold,
    paddingHorizontal: 11,
    paddingVertical: 5,
    borderRadius: 999,
  },
  chipText: {
    color: colors.cream,
    fontSize: 9,
    fontFamily: fontFamily.sansBold,
    letterSpacing: 1.8,
  },
  body: {
    position: 'absolute',
    left: spacing.lg,
    right: spacing.lg,
    bottom: spacing.lg,
  },
  kicker: {
    color: colors.goldLight,
    fontSize: 9.5,
    fontFamily: fontFamily.sansBold,
    letterSpacing: 2,
    marginBottom: 6,
  },
  judul: {
    color: colors.cream,
    fontFamily: fontFamily.serif,
    fontSize: 23,
    lineHeight: 27,
  },
  meta: {
    color: colors.cream,
    opacity: 0.85,
    fontSize: 10.5,
    fontFamily: fontFamily.sansMedium,
    marginTop: 6,
  },
  cta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 9,
  },
  ctaText: {
    color: colors.goldLight,
    fontSize: 10.5,
    fontFamily: fontFamily.sansBold,
    letterSpacing: 0.4,
  },
});

export default FeaturedCard;