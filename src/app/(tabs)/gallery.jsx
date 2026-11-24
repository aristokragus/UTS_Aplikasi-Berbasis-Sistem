import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PageHeader from '../../components/PageHeader';
import { colors, fontFamily } from '../../constants/theme';
import { GALLERY_ITEMS } from '../../constants/events';

const Gallery = () => {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <PageHeader
          kicker="Dokumentasi Visual · 2024-2026"
          title="Galeri"
          sub={`Momen terpilih dari ${GALLERY_ITEMS.length} momen yang terdokumentasi`}
        />

        {/* Photo Grid */}
        <View style={styles.grid}>
          {GALLERY_ITEMS.map((item, index) => (
            <View key={item.id} style={[styles.item, { height: item.tinggi }]}>
              <Image source={item.foto} style={styles.foto} />
              <View style={styles.caption}>
                <Text style={styles.captionText}>{item.caption}</Text>
                <Text style={styles.captionIndex}>{String(index + 1).padStart(2, '0')}</Text>
              </View>
            </View>
          ))}
        </View>
        {/* End Photo Grid */}
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    rowGap: 14,
  },
  item: {
    width: '48%',
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 4,
  },
  foto: {
    width: '100%',
    height: '100%',
  },
  caption: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: 'rgba(30,35,74,0.55)',
  },
  captionText: {
    fontSize: 9.5,
    fontFamily: fontFamily.sansMedium,
    color: colors.cream,
  },
  captionIndex: {
    fontSize: 9,
    fontFamily: fontFamily.sansBold,
    letterSpacing: 1,
    color: colors.goldLight,
  },
});

export default Gallery;