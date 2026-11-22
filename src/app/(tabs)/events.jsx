import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PageHeader from '../../components/PageHeader';
import CategoryChip from '../../components/CategoryChip';
import FeaturedCard from '../../components/FeaturedCard';
import EventCard from '../../components/EventCard';
import { colors, spacing } from '../../constants/theme';
import { CATEGORIES, EVENTS, FEATURED_EVENT } from '../../constants/events';

const Events = () => {
  const [kategori, setKategori] = useState('Semua');

  const daftar = useMemo(() => {
    const lainnya = EVENTS.filter((e) => e.id !== FEATURED_EVENT.id);
    if (kategori === 'Semua') return lainnya;
    return lainnya.filter(
      (e) => e.kategori === kategori || e.kategoriLengkap.includes(kategori)
    );
  }, [kategori]);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <PageHeader
          kicker="Arsip 2026"
          title="Semua Event"
          sub={`${EVENTS.length} dokumentasi · ${CATEGORIES.length - 1} kategori`}
        />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chips}
        >
          {CATEGORIES.map((c) => (
            <CategoryChip key={c} label={c} active={kategori === c} onPress={() => setKategori(c)} />
          ))}
        </ScrollView>

        <View style={styles.featuredWrap}>
          <FeaturedCard event={FEATURED_EVENT} height={230} />
        </View>

        <View style={styles.list}>
          {daftar.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  scroll: {
    paddingBottom: spacing.xl,
  },
  chips: {
    paddingHorizontal: spacing.screenX,
    gap: spacing.sm,
    paddingBottom: spacing.lg,
  },
  featuredWrap: {
    paddingHorizontal: spacing.screenX,
    marginBottom: 18,
  },
  list: {
    paddingHorizontal: spacing.screenX,
    paddingBottom: 18,
    gap: 10,
  },
});

export default Events;