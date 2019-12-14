import React from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  ImageBackground,
  Button,
  Image,
  View,
} from 'react-native';
import styles from './styles';
import ImagePicker from 'react-native-image-picker';
import {IMAGES_OPTIONS} from '../../../config/images';
import _ from 'lodash';

class TeamsAdd extends React.Component {
  
   state = {
    image: null,
      name: '',
      year: '',
      stadium: '',
      //errors: {},
    };

  _onSubmit = () => {
    const {isFetching} = this.props;
    const {name, year, stadium, image} = this.state;
    const data = {
      strTeam: name,
      intFormedYear: year,
      strStadium: stadium,
      strTeamBadge: image,
      strTeamBadge: _.has(this.state, 'image.data')
      ? 'data:image/jpeg;base64,' + image.data
      : null,
    };
    this.props.postTeam(data);
  };

  _onImageTapped = () => {
    ImagePicker.showImagePicker(IMAGES_OPTIONS, image => {
      if (image.uri) {
        this.setState({image});
      }
    });
  };

  render() {
    const {image, name, year, stadium} = this.state;
    return (
      <SafeAreaView style={styles.container}>
          <ImageBackground 
                        source={require('../../../assets/images/portadaLiga.jpg')}
                        style={{width: '100%', heigth: '100%', flex: 1}}
                        opacity = {0.4}>
            <TouchableOpacity onPress={this._onImageTapped} style={styles.imageContainer}>
              <ImageBackground
                style= {styles.image}
                source={image ? {uri: image.uri} : null}
                >
              <Text style={styles.imageLabel}>SELECCIONAR FOTO</Text>
              </ImageBackground>
            </TouchableOpacity>
        
            <View style={{marginVertical: 20, marginHorizontal: 20}}>
              <Text style={styles.imageLabel}>
                Nombre equipo
              </Text>
              <TextInput
                style={styles.inputText}
                onChangeText={(name) => {this.setState({name})}}
                value={this.state.name}
              />
                <Text style={styles.imageLabel}>
                Año creacion
              </Text>
                <TextInput
                style={styles.inputText}
                onChangeText={(year) => {this.setState({year})}}
                value={this.state.year}
              />   
              <Text style={styles.imageLabel}>
                Nombre estadio
              </Text>
                <TextInput
                style={styles.inputText}
                onChangeText={(stadium) => {this.setState({stadium})}}
                value={this.state.stadium}
              /> 
              <View style={styles.buttonCrear}>
              <Button 
                title = 'Crear'
                onPress={this._onSubmit}
              />
              </View>
            </View>
            </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default TeamsAdd;

