import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        
    },

    image: {
        width: 400,
        height: 400,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'black', 
        marginVertical: 10,
    },

    longText: {
        color: 'black',
        marginTop: 30,
    },

});

export default styles;