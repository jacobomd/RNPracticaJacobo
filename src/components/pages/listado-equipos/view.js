import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';

class ListEquipos extends React.Component {
    render () {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <Text>LISTADO DE EQUIPOS</Text>
                </View>
                <TouchableOpacity onPress={() => Actions.push('DetalleEquipo', {title: 'Detalle'})}>
                    <Text>{'IR A DETALLE'}</Text>
                    
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

export default ListEquipos;