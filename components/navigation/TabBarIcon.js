import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

export function TabBarIcon({ style, ...rest }) {
  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}