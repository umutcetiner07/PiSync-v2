import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function CompareScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(e => console.log(e));
  }, []);
  return (
    <View>
      <Text>Price Comparison</Text>
      <FlatList 
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.name} - {item.vendor} - {item.price}</Text>
        )}
      />
    </View>
  );
}