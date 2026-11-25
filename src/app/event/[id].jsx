import React from 'react';
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {Lucide} from "@react-native-vector-icons/lucide";
import { colors, fontFamily } from '../../constants/theme';
import { getEventById } from '../../constants/events';

const EventDetail = () => {
  const { id } = useLocalSearchParams();
  const event = getEventById(id);
  const router = useRouter();

  if (!event) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.notFound}>
          <Text style={styles.sectionTitle}>Event tidak ditemukan</Text>
          <Pressable onPress={() => router.back()}>
            <Text style={styles.backText}>Kembali</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  const onDaftar = () =>
    Alert.alert('Daftar Event', `Pendaftaran "${event.nama}" akan segera dibuka.`);

  return (
    <View style={styles.safe}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Image source={event.fotoHero || event.foto} style={styles.heroFoto} />
          <LinearGradient
            colors={['rgba(30,35,74,0.35)', 'rgba(30,35,74,0)', 'rgba(30,35,74,0.55)']}
            locations={[0, 0.4, 1]}
            style={styles.heroShade}
          />
          <Pressable onPress={() => router.back()} style={styles.backBtn}>
            <Lucide name="chevron-left" size={18} color={colors.navy} strokeWidth={2.2} />
          </Pressable>
          <View style={styles.heroChip}>
            <Text style={styles.heroChipText}>{event.kategoriLengkap}</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.judul}>{event.nama}</Text>
          <Text style={styles.tema}>{event.tema}</Text>

          <View style={styles.metaRow}>
            <View style={styles.icard}>
              <View style={styles.icardIcon}>
                <Lucide name="calendar-days" size={17} color={colors.gold} strokeWidth={1.8} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.icardLabel}>Tanggal</Text>
                <Text style={styles.icardValue}>{event.tanggal}</Text>
              </View>
            </View>
            <View style={styles.icard}>
              <View style={styles.icardIcon}>
                <Lucide name="map-pin" size={17} color={colors.gold} strokeWidth={1.8} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.icardLabel}>Lokasi</Text>
                <Text style={styles.icardValue} numberOfLines={2}>
                  {event.venue}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.kicker}>Tentang Event</Text>
            <Text style={styles.paragraph}>{event.deskripsi}</Text>
          </View>

          {event.lineup.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.kicker}>Lineup</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.lineup}>
                  {event.lineup.map((a) => (
                    <View key={a.nama} style={styles.artist}>
                      <View style={styles.artistIkon}>
                        <Lucide name="music" size={26} color={colors.gold} strokeWidth={1.8} />
                      </View>
                      <Text style={styles.artistNama}>{a.nama}</Text>
                    </View>
                  ))}
                </View>
              </ScrollView>
            </View>
          )}

          <View style={styles.section}>
            <Text style={styles.kicker}>Dokumentasi</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.thumbs}>
                {event.dokumentasi.map((foto, i) => (
                  <Image key={i} source={foto} style={styles.thumb} />
                ))}
              </View>
            </ScrollView>
          </View>
          <View style={{ height: 16 }} />
        </View>
      </ScrollView>

      <View style={styles.ctaBar}>
        <Pressable
          onPress={event.privat ? undefined : onDaftar}
          disabled={event.privat}
          style={[styles.btn, event.privat && styles.btnDisabled]}
        >
          <Text style={styles.btnText}>{event.privat ? 'Event Privat' : 'Daftar Event'}</Text>
          {!event.privat && (
            <Lucide name="arrow-right" size={14} color={colors.cream} strokeWidth={2.4} />
          )}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  backText: {
    color: colors.gold,
    fontFamily: fontFamily.sansBold,
    fontSize: 13,
  },
  hero: {
    height: 340,
  },
  heroFoto: {
    width: '100%',
    height: '100%',
  },
  heroShade: {
    ...StyleSheet.absoluteFillObject,
  },
  backBtn: {
    position: 'absolute',
    top: 46,
    left: 20,
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.cream,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroChip: {
    position: 'absolute',
    left: 20,
    bottom: 22,
    backgroundColor: colors.gold,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  heroChipText: {
    color: colors.cream,
    fontSize: 9,
    fontFamily: fontFamily.sansBold,
    letterSpacing: 1.8,
  },
  content: {
    backgroundColor: colors.cream,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -26,
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  judul: {
    fontFamily: fontFamily.serif,
    fontSize: 24,
    lineHeight: 29,
    color: colors.navy,
  },
  tema: {
    fontFamily: fontFamily.serifItalic,
    fontSize: 14,
    color: colors.gold,
    marginTop: 7,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 16,
  },
  icard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 14,
    paddingVertical: 11,
    paddingHorizontal: 12,
  },
  icardIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.goldSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icardLabel: {
    fontSize: 8.5,
    fontFamily: fontFamily.sansBold,
    letterSpacing: 1.4,
    color: colors.inkSoft,
  },
  icardValue: {
    fontSize: 11,
    fontFamily: fontFamily.sansSemiBold,
    color: colors.navy,
    marginTop: 3,
    lineHeight: 14,
  },
  section: {
    paddingTop: 20,
  },
  kicker: {
    fontSize: 10,
    fontFamily: fontFamily.sansBold,
    letterSpacing: 2.2,
    color: colors.gold,
    marginBottom: 9,
  },
  paragraph: {
    fontSize: 12.5,
    lineHeight: 21,
    fontFamily: fontFamily.sans,
    color: colors.inkSoft,
  },
  lineup: {
    flexDirection: 'row',
    gap: 14,
    paddingVertical: 2,
  },
  artist: {
    width: 64,
    alignItems: 'center',
    gap: 7,
  },
  artistIkon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: colors.goldSoft,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  artistNama: {
    fontSize: 9.5,
    fontFamily: fontFamily.sansSemiBold,
    color: colors.navy,
    textAlign: 'center',
  },
  thumbs: {
    flexDirection: 'row',
    gap: 10,
    paddingBottom: 4,
  },
  thumb: {
    width: 120,
    height: 86,
    borderRadius: 12,
  },
  ctaBar: {
    borderTopWidth: 1,
    borderTopColor: colors.line,
    backgroundColor: colors.cream,
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 22,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: colors.navy,
    borderRadius: 14,
    paddingVertical: 15,
  },
  btnDisabled: {
    backgroundColor: colors.line,
  },
  btnText: {
    color: colors.cream,
    fontFamily: fontFamily.sansBold,
    fontSize: 13,
    letterSpacing: 0.4,
  },
});

export default EventDetail;