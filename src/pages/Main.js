import React, { Component } from 'react';

import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity, Image } from 'react-native';
import AppStrings from '../utils/AppStrings';
import ItemMemory from '../components/ItemMemory';
import { ScrollView } from 'react-native-gesture-handler';
import Images from '../utils/Images';
import { colors, dimensions, fonts } from '../styles/BaseStyle';
import ListUtil from '../utils/ListUtil'
import Icon from 'react-native-vector-icons/MaterialIcons';



export default class pages extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      itemsCliked: [],
      finish: false,

    }
  }

  static navigationOptions = () => ({
    title: AppStrings.main,
    header: null,
  })

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    this.setState({
      data: ListUtil.randomItems(ListUtil.generateList()),
      itemsCliked: []
    });
  }

  handleOk = () => {
    this.setState({
      finish: false,
    });

    this.refreshList();
  }

  handleClick = (itemCliked) => {

    if (this.state.itemsCliked.length == 0 || this.state.itemsCliked.length == 1) {
      this.state.itemsCliked.push(itemCliked);
    }

    if (this.state.itemsCliked.length == 2) {
      const item1 = this.state.itemsCliked[0];
      const item2 = this.state.itemsCliked[1];

      if (item1.name == item2.name) {
        item1.checked = true;
        this.setState({
          data: this.state.data.map(it =>
            (it.name === item1.name ? item1 : it)
          )
        });
      } else {

        setTimeout(() => {
          item1.checked = false;
          item2.checked = false;
          this.setState({
            data: this.state.data.map(it =>
              (it.name === item1.name ? item1 : it)
            )
          });
        }, 500)
      }

      this.setState({
        itemsCliked: []
      });

      if(this.isFinish()){
        this.setState({
          finish : true
        });
      }

    }
  }

  isFinish = () => {

    let isFinish = true

    this.state.data.map(item => {
      if (!item.checked) {
        isFinish = false;
      }
    })
    return isFinish;
  }

  render() {

    return (
      <View style={styleMain.container}>

        <View style={styleMain.row}>
          <FlatList data={this.state.data} numColumns={4} renderItem={({ item }) => {
            return (
              <ItemMemory data={item} handleClick={this.handleClick} />
            );
          }} keyExtractor={(item, index) => index.toString()} />

        </View>

        <TouchableOpacity onPress={this.refreshList} style={styleMain.buttonFinish}>
          <Text style={styleMain.textButton}  >{AppStrings.restart}</Text>
        </TouchableOpacity>


        {this.state.finish ?
          <View style={styleMain.finish} >
            <Image source={require('../resources/img/congratulations.jpg')} />
            <TouchableOpacity onPress={this.handleOk} style={styleMain.buttonFinish}>
              <Text style={styleMain.textButton} >{AppStrings.ok}</Text>
            </TouchableOpacity>
          </View> : null}

      </View>

    );
  }
}



const styleMain = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0,
    marginTop: dimensions.height * 0.1
  },
  finish: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
    zIndex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textFinish: {
    fontSize: fonts.lg,
    color: colors.primary
  },
  buttonFinish: {
    width: dimensions.width * 0.5,
    marginTop: 40,
    backgroundColor: colors.primary,
  },
  textButton: {
    color: colors.white,
    padding: 8,
    textAlign: 'center'
  }

});


