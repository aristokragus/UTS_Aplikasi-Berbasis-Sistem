import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, fontFamily } from '../constants/theme';

const CategoryChip = ({ label, active = false, onPress }) => {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={[styles.chip, active && styles.chipActive]}
    >
      <Text style={[styles.label, active && styles.labelActive]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    flexShrink: 0,
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.white,
  },
  chipActive: {
    backgroundColor: colors.navy,
    borderColor: colors.navy,
  },
  label: {
    fontSize: 11,
    fontFamily: fontFamily.sansSemiBold,
    color: colors.inkSoft,
  },
  labelActive: {
    color: colors.cream,
  },
});

export default CategoryChip;