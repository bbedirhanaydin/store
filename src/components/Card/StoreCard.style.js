import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#dcdcdc',
    height: Dimensions.get('window').height / 2,
    width: Dimensions.get('window').width / 2.2,
    marginBottom: 12,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    height: '61%',
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    marginTop: 12,
  },
  price: {
    fontSize: 19,
    fontWeight: '700',
    color: 'gray',
  },
  bottomView: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    right: 10,
  },
});
