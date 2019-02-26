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
            data: this.state.data
        });
        this.props.handleClick(this.state.data);

    }

    render() {

        return (
            <View style={[, styles.container]} >
                <TouchableOpacity disabled={this.state.data.checked} style={styles.touchableOpacity} onPress={this.clickItem}>
                    {
                        (this.state.data.checked) ?
                            <View>
                                <Image source={this.state.data.icon} />
                            </View>
                            :
                            <View >
                                <Image source={require('../resources/img/icon.png')} />
                            </View>

                    }
                </TouchableOpacity>
            </View>
        );

    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: colors.primary,
        flexDirection: 'column',
        borderRadius: 10,
        padding: 8,
        elevation: 4,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: 'red',
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    touchableOpacity: {
        alignItems: 'center'
    }
});

