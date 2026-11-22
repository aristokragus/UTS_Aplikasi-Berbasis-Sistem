import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PageHeader from '../../components/PageHeader';
import FeaturedCard from '../../components/FeaturedCard';
import EventCard from '../../components/EventCard';
import { colors, spacing } from '../../constants/theme';
import { CATEGORIES, EVENTS, FEATURED_EVENT } from '../../constants/events';

const Events = () => {
  const daftar = EVENTS.filter((e) => e.id !== FEATURED_EVENT.id);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <PageHeader
          kicker="Arsip 2026"
          title="Semua Event"
          sub={`${EVENTS.length} dokumentasi · ${CATEGORIES.length - 1} kategori`}
        />

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