import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    
  },
  imageContainer: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.black,
    overflow: 'hidden',
    margin: 20,
  },
  image: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLabel: {
    color: colors.black,
    fontWeight: '600',
  },

  inputLabel: {
    color: colors.black,
    fontSize: 14,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
 
  inputText: {
    marginVertical: 10,
    borderWidth: 2,
    borderColor: colors.black,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: colors.black,
  },
  inputError: {
    color: 'red',
    fontSize: 12,
    marginTop: 6,
    textAlign: 'right',
  },
  buttonCrear: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    marginTop: 40,
    marginHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

});


