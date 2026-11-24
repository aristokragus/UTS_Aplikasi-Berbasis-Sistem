import React from 'react';
import { View} from 'react-native';
import {Lucide} from "@react-native-vector-icons/lucide";

const TabBarIcon = ({ name, color, focused }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 2 }}>
      <Lucide name={name} size={22} color={color} strokeWidth={focused ? 2.4 : 1.8} />
    </View>
  );
}

export default TabBarIcon;