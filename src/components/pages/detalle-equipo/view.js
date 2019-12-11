import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';

class DetalleEquipo extends React.Component {

    constructor(props) {
        super(props)
    };

    render () {
        return (
            <SafeAreaView style={styles.container} >
                <Text>
                   DETALLE EQUIPO 
                </Text>
            </SafeAreaView>
        );
    }
};

export default DetalleEquipo;
