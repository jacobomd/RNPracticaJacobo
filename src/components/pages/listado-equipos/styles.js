import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },
    addButton: {
        backgroundColor: '#ff5722',
        borderColor: '#ff5722',
        borderWidth: 1,
        height: 80,
        width: 80,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        right:20,
        shadowColor: '#000000',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        }
      },
      backgroundImage: {
        width: '100%',
        height: '100%',
      }
});

export default styles;