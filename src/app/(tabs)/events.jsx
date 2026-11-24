import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PageHeader from '../../components/PageHeader';
import CategoryChip from '../../components/CategoryChip';
import FeaturedCard from '../../components/FeaturedCard';
import EventCard from '../../components/EventCard';
import { colors } from '../../constants/theme';
import { CATEGORIES, EVENTS, FEATURED_EVENT } from '../../constants/events';

const Events = () => {
  const [kategori, setKategori] = useState('Semua');

  const lainnya = EVENTS.filter((e) => e.id !== FEATURED_EVENT.id);
  const daftar =
    kategori === 'Semua'
      ? lainnya
      : lainnya.filter((e) => e.kategori === kategori || e.kategoriLengkap.includes(kategori));

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <PageHeader
          kicker="Arsip 2026"
          title="Semua Event"
          sub={`${EVENTS.length} dokumentasi · ${CATEGORIES.length - 1} kategori`}
        />

        {/* Category Filter */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chips}
        >
          {CATEGORIES.map((c) => (
            <CategoryChip key={c} label={c} active={kategori === c} onPress={() => setKategori(c)} />
          ))}
        </ScrollView>
        {/* End Category Filter */}

        {/* Featured Event */}
        <View style={styles.featuredWrap}>
          <FeaturedCard event={FEATURED_EVENT} height={230} />
        </View>
        {/* End Featured Event */}

        {/* Event List */}
        <View style={styles.list}>
          {daftar.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </View>
        {/* End Event List */}
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
    paddingBottom: 24,
  },
  chips: {
    paddingHorizontal: 20,
    gap: 8,
    paddingBottom: 16,
  },
  featuredWrap: {
    paddingHorizontal: 20,
    marginBottom: 18,
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 18,
    gap: 10,
  },
});

export default Events;