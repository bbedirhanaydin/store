import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
} from 'react-native';
import StoreCard from './components/Card/StoreCard';
import store_data from './store_data.json';

const App = () => {
  const [text, onChangeText] = React.useState('Ara...');
  const renderItem = props => {
    return <StoreCard store={props.item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>BEDIRSTORE</Text>
      <View style={styles.inputStyles}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <FlatList
        style={styles.flatList}
        data={store_data}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  row: {
    flex: 1,
    justifyContent: 'space-evenly',
  },

  title: {
    fontSize: 35,
    marginLeft: 10,
  },

  input: {
    width: '90%',
    height: 40,
    backgroundColor: '#dcdcdc',
    margin: 10,
    borderRadius: 8,
    padding: 10,
  },
  inputStyles: {
    alignItems: 'center',
  },
});

export default App;
