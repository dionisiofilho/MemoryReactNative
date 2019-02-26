import React, { Component } from 'react';

import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { colors } from '../styles/BaseStyle';

export default class components extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: props.data,
        }
    }


    componentWillReceiveProps(props) {
        this.setState({ data: props.data });
    }

    clickItem = () => {
        this.state.data.checked = true
        this.setState({
            data : this.state.data
        });
        this.props.handleClick(this.state.data);
    }

    render() {

        return (
            <View style={styles.container}>
                <TouchableOpacity disabled={this.state.data.checked} style={styles.touchableOpacity} onPress={this.clickItem}>
                    <Image style={styles.imageDefault} source={(this.state.data.checked) ? this.state.data.icon : require('../resources/img/icon.png')} />
                </TouchableOpacity>
            </View>
        );

    }
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 8,
    },

    imageDefault: {

    },

    touchableOpacity: {

        alignItems: 'center'
    }
});

