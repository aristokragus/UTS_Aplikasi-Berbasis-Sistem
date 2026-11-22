import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fontFamily } from '../constants/theme';

const PageHeader = ({ kicker, title, sub }) => {
  return (
    <View style={styles.wrap}>
      <Text style={styles.kicker}>{kicker}</Text>
      <Text style={styles.title}>{title}</Text>
      {sub ? <Text style={styles.sub}>{sub}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
  },
  kicker: {
    fontSize: 10,
    fontFamily: fontFamily.sansBold,
    letterSpacing: 2.2,
    color: colors.gold,
    marginBottom: 8,
  },
  title: {
    fontFamily: fontFamily.serif,
    fontSize: 28,
    color: colors.navy,
  },
  sub: {
    fontSize: 11,
    fontFamily: fontFamily.sans,
    color: colors.inkSoft,
    marginTop: 6,
  },
});

export default PageHeader;