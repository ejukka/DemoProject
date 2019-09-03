import {StyleSheet} from 'react-native';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';

const styles = StyleSheet.create({
  background: {
    paddingBottom: 200,
    paddingTop: 40,
    paddingHorizontal: 32,
    backgroundColor: Colors.lighter,
  },
  logo: {
    opacity: 0.4,
    overflow: 'visible',
    resizeMode: 'cover',
    marginLeft: 10,
    marginBottom: -192,
  },
  text: {
    fontSize: 30,
    fontWeight: '600',
    color: Colors.black,
    paddingTop: 2,
    paddingVertical: 150,
  },
});

export default styles;
