import React from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  SafeAreaView,
  processColor,
} from 'react-native';

const ListItem = ({ item, onSubtract, onAdd }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
      <Text>{item.name} - </Text>
      <Text>{item.price}</Text>
    </View>
    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
      <Button title="Subtract" onPress={onSubtract} />
      <Text>{item.quantity}</Text>
      <Button title="Add" onPress={onAdd} />
    </View>
  </View>
);

/*
class App extends React.Component {
  state = {
    products,
  };

  onSubtract = (item, index) => {
    const products = [...this.state.products];
    products[index].quantity -= 1;
    this.setState({ products });
  }

  onAdd = (item, index) => {
    const products = [...this.state.products];
    products[index].quantity += 1;
    this.setState({ products });
  }

  render() {
    const { products } = this.state;
    let totalQuantity = 0;
    let totalPrice = 0;
    products.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.quantity * item.price;
    })

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={this.state.products}
          renderItem={({ item, index }) => (
            <ListItem
              item={item}
              onSubtract={() => this.onSubtract(item, index)}
              onAdd={() => this.onAdd(item, index)}
            />
          )}
          keyExtractor={item => item._id}
        />
        <Text>Total Quantity: {totalQuantity}</Text>
        <Text>Total Price: {totalPrice}</Text>
      </SafeAreaView>
    );
  }
}
*/

export default function  SamplePage   ({ navigation}){ 
  const [products, setProducts] = React.useState([
    { _id: 1, name: 'Item 1', price: 50, quantity: 0 },
    { _id: 2, name: 'Item 2', price: 29, quantity: 0 },
    { _id: 3, name: 'Item 3', price: 200, quantity: 0 },
  ]);

  const onSubtract = (item, index) => {
    const nextProducts = [...products];
    nextProducts[index].quantity -= 1;
    setProducts(nextProducts);
  };

  const onAdd = (item, index) => {
    const nextProducts = [...products];
    nextProducts[index].quantity += 1;
    setProducts(nextProducts);
  };

  let totalQuantity = 0;
  let totalPrice = 0;
  products.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.quantity * item.price;
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={products}
        renderItem={({ item, index }) => (
          <ListItem
            item={item}
            onSubtract={() => onSubtract(item, index)}
            onAdd={() => onAdd(item, index)}
          />
        )}
        keyExtractor={(item) => item._id}
      />
      <Text>Total Quantity: {totalQuantity}</Text>
      <Text>Total Price: {totalPrice}</Text>
    </SafeAreaView>
  );
};


