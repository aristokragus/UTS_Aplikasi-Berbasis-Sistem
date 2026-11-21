import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeaturedCard from '../../components/FeaturedCard';
import MiniEventCard from '../../components/MiniEventCard';
import { colors, fontFamily, spacing } from '../../constants/theme';
import { EVENTS, FEATURED_EVENT } from '../../constants/events';

const Home = () => {
  const router = useRouter();
  const pilihan = ['1', '5', '10'].map((id) => EVENTS.find((e) => e.id === id));

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.wordmark}>Baku Hisap</Text>
            <Text style={styles.wordmarkSub}>COLLECTIVE · BALI</Text>
          </View>
          <View style={styles.monogram}>
            <Text style={styles.monogramText}>BH</Text>
          </View>
        </View>

        <FeaturedCard event={FEATURED_EVENT} height={282} style={styles.hero} />

        <View style={styles.navySection}>
          <View style={styles.secHead}>
            <Text style={styles.secTitle}>Event Pilihan</Text>
            <Pressable accessibilityRole="button" onPress={() => router.push('/events')}>
              <Text style={styles.secLink}>Lihat semua</Text>
            </Pressable>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.hScroll}
          >
            {pilihan.map((event) => (
              <MiniEventCard key={event.id} event={event} />
            ))}
          </ScrollView>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 14,
    paddingHorizontal: spacing.screenX,
  },
  wordmark: {
    fontFamily: fontFamily.serif,
    fontSize: 21,
    lineHeight: 24,
    color: colors.navy,
  },
  wordmarkSub: {
    fontSize: 8,
    fontFamily: fontFamily.sansBold,
    letterSpacing: 2.6,
    color: colors.gold,
    marginTop: 4,
  },
  monogram: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.navy,
    alignItems: 'center',
    justifyContent: 'center',
  },
  monogramText: {
    fontFamily: fontFamily.serifItalic,
    fontSize: 14,
    color: colors.cream,
  },
  hero: {
    marginHorizontal: spacing.screenX,
  },
  navySection: {
    backgroundColor: colors.navy,
    paddingTop: spacing.xl,
    paddingBottom: 26,
    marginTop: 4,
  },
  secHead: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.screenX,
    marginBottom: 12,
  },
  secTitle: {
    fontFamily: fontFamily.serif,
    fontSize: 19,
    color: colors.cream,
  },
  secLink: {
    fontSize: 11,
    fontFamily: fontFamily.sansBold,
    letterSpacing: 0.3,
    color: colors.goldLight,
  },
  hScroll: {
    paddingHorizontal: spacing.screenX,
    gap: 10,
    paddingTop: 2,
    paddingBottom: 8,
  },
});

export default Home;