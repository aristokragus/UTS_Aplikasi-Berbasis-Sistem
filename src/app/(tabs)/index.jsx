import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeaturedCard from '../../components/FeaturedCard';
import { colors, fontFamily, spacing } from '../../constants/theme';
import { FEATURED_EVENT } from '../../constants/events';

const Home = () => {
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
});

export default Home;