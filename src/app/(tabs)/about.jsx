import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Lucide} from "@react-native-vector-icons/lucide";
import PageHeader from '../../components/PageHeader';
import { colors, fontFamily } from '../../constants/theme';

const TIM = [
  { inisial: 'AD', nama: 'Agus Dindin', peran: 'Founder' }
];

const KONTAK = [
  { ikon: 'map-pin', teks: 'Denpasar, Bali, Indonesia' },
  { ikon: 'mail', teks: 'team@bakuhisap.id' },
  { ikon: 'instagram', teks: '@bakuhisap.collective' },
  { ikon: 'globe', teks: 'bakuhisap.id' },
];

const BANNER_URI =
  'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80&fit=crop';

const About = () => {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <PageHeader kicker="Sejak 2019 · Denpasar" title="Tentang Kami" />

        <View style={styles.banner}>
          <Image source={{ uri: BANNER_URI }} style={styles.bannerFoto} />
          <View style={styles.bannerLabel}>
            <Text style={styles.bannerText}>Baku Hisap Collective</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profil</Text>
          <Text style={styles.paragraph}>
            <Text style={styles.paragraphBold}>Baku Hisap Collective</Text> adalah kolektif
            dokumentasi event yang berbasis di Denpasar, Bali. Kami mendokumentasikan beragam
            event, dari festival budaya dan konser musik hingga pertemuan korporat, dengan
            pendekatan editorial yang tenang dan presisi.
          </Text>
        </View>

        <View style={styles.visi}>
          <Text style={styles.visiQmark}></Text>
          <Text style={styles.kicker}>Visi</Text>
          <Text style={styles.visiText}>
            Menjadi arsip visual paling terpercaya untuk event di Bali, tempat setiap momen
            bernilai dikenang.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tim</Text>
          {TIM.map((m) => (
            <View key={m.inisial} style={styles.member}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{m.inisial}</Text>
              </View>
              <View>
                <Text style={styles.memberNama}>{m.nama}</Text>
                <Text style={styles.memberPeran}>{m.peran}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Kontak</Text>
          {KONTAK.map((k) => (
            <View key={k.teks} style={styles.crow}>
              <Lucide name={k.ikon} size={17} color={colors.gold} strokeWidth={1.8} />
              <Text style={styles.crowText}>{k.teks}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.footer}>© 2026 Baku Hisap Collective · Denpasar, Bali</Text>
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
  banner: {
    marginHorizontal: 20,
    height: 150,
    borderRadius: 16,
    overflow: 'hidden',
  },
  bannerFoto: {
    width: '100%',
    height: '100%',
  },
  bannerLabel: {
    position: 'absolute',
    left: 12,
    bottom: 12,
    backgroundColor: 'rgba(30,35,74,0.78)',
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 999,
  },
  bannerText: {
    fontSize: 9,
    fontFamily: fontFamily.sansSemiBold,
    letterSpacing: 1.4,
    color: colors.cream,
  },
  section: {
    paddingTop: 22,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontFamily: fontFamily.serif,
    fontSize: 19,
    color: colors.navy,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 12.5,
    lineHeight: 21,
    fontFamily: fontFamily.sans,
    color: colors.inkSoft,
  },
  paragraphBold: {
    fontFamily: fontFamily.sansSemiBold,
    color: colors.navy,
  },
  visi: {
    marginTop: 20,
    marginHorizontal: 20,
    paddingVertical: 18,
    paddingLeft: 22,
    paddingRight: 20,
    borderLeftWidth: 2,
    borderLeftColor: colors.gold,
    backgroundColor: colors.goldSoft,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  visiQmark: {
    position: 'absolute',
    top: 6,
    right: 16,
    fontFamily: fontFamily.serif,
    fontSize: 52,
    lineHeight: 56,
    color: colors.gold,
    opacity: 0.35,
  },
  kicker: {
    fontSize: 10,
    fontFamily: fontFamily.sansBold,
    letterSpacing: 2.2,
    color: colors.gold,
    marginBottom: 8,
  },
  visiText: {
    fontFamily: fontFamily.serifItalic,
    fontSize: 16,
    lineHeight: 24,
    color: colors.navy,
  },
  member: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.navy,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontFamily: fontFamily.serifItalic,
    fontSize: 15,
    color: colors.cream,
  },
  memberNama: {
    fontSize: 12.5,
    fontFamily: fontFamily.sansBold,
    color: colors.navy,
  },
  memberPeran: {
    fontSize: 10,
    fontFamily: fontFamily.sans,
    color: colors.inkSoft,
    marginTop: 2,
  },
  crow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 11,
    paddingHorizontal: 2,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
  crowText: {
    fontSize: 12,
    fontFamily: fontFamily.sansMedium,
    color: colors.navy,
  },
  footer: {
    paddingTop: 24,
    paddingHorizontal: 20,
    paddingBottom: 18,
    textAlign: 'center',
    fontSize: 9.5,
    fontFamily: fontFamily.sans,
    letterSpacing: 0.4,
    color: colors.inkSoft,
  },
});

export default About;