import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeaturedCard from '../../components/FeaturedCard';
import MiniEventCard from '../../components/MiniEventCard';
import { colors, fontFamily } from '../../constants/theme';
import { EVENTS, FEATURED_EVENT } from '../../constants/events';

const Home = () => {
  const router = useRouter();
  const pilihan = ['1', '5', '10'].map((id) => EVENTS.find((e) => e.id === id));

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Brand Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.wordmark}>Baku Hisap</Text>
            <Text style={styles.wordmarkSub}>COLLECTIVE · BALI</Text>
          </View>
          <View style={styles.monogram}>
            <Text style={styles.monogramText}>BH</Text>
          </View>
        </View>
        {/* End Brand Header */}

        {/* Featured Event */}
        <FeaturedCard event={FEATURED_EVENT} height={282} style={styles.hero} />
        {/* End Featured Event */}

        {/* Tagline */}
        <View style={styles.tagline}>
          <Text style={styles.kicker}>Kolektif Dokumentasi Event · Bali</Text>
          <Text style={styles.taglineTitle}>
            Mengabadikan rasa, suara, dan budaya <Text style={styles.taglineAccent}>Pulau Dewata.</Text>{' '}
          </Text>
        </View>
        {/* End Tagline */}

        {/* Selected Events */}
        <View style={styles.navySection}>
          <View style={styles.secHead}>
            <Text style={styles.secTitle}>Event Pilihan</Text>
            <Pressable onPress={() => router.push('/events')}>
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
        {/* End Selected Events */}

        {/* Closing Quote */}
        <View style={styles.quote}>
          <Text style={styles.quoteText}>
            &quot;Setiap event meninggalkan cerita. Kami merapikan ingatannya, satu foto dalam
            satu waktu.&quot;
          </Text>
        </View>
        {/* End Closing Quote */}
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 14,
    paddingHorizontal: 20,
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
    marginHorizontal: 20,
  },
  tagline: {
    paddingTop: 26,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  kicker: {
    fontSize: 10,
    fontFamily: fontFamily.sansBold,
    letterSpacing: 2.2,
    color: colors.gold,
    marginBottom: 9,
  },
  taglineTitle: {
    fontFamily: fontFamily.serif,
    fontSize: 27,
    lineHeight: 33,
    color: colors.navy,
  },
  taglineAccent: {
    fontFamily: fontFamily.serifItalic,
    color: colors.gold,
  },
  navySection: {
    backgroundColor: colors.navy,
    paddingTop: 24,
    paddingBottom: 26,
    marginTop: 4,
  },
  secHead: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
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
    paddingHorizontal: 20,
    gap: 10,
    paddingTop: 2,
    paddingBottom: 8,
  },
  quote: {
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 18,
    borderLeftWidth: 2,
    borderLeftColor: colors.gold,
    backgroundColor: colors.goldSoft,
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
  },
  quoteText: {
    fontFamily: fontFamily.serifItalic,
    fontSize: 14,
    lineHeight: 21,
    color: colors.navy,
  },
});

export default Home;