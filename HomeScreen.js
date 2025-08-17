import React from 'react';
import { View, Button } from 'react-native';
export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Button title="View Vendors" onPress={() => navigation.navigate('Vendors')} />
      <Button title="Compare Prices" onPress={() => navigation.navigate('Compare')} />
    </View>
  );
}