/** @format */

import {AppRegistry} from 'react-native';
import React, { Component } from 'react';
import { Text, View,ScrollView,FlatList } from 'react-native';
import {name as appName} from './app.json';
class TabItem extends Component{
    press(){
        this.props.onChange(this.props.name);
    }
    render(){
        return(
            <Text style={{fontSize:50,margin:10}} onPress={()=>this.press()}>{this.props.name}</Text>
        );
    }
}
class ListName extends Component{
    render(){
        return(
            <Text>name is {this.props.name}</Text>
        );
    }
}
export default class Practice extends Component{
    constructor(props) {
        super(props);
        this.state={
            listName:'default'
        };
    }
    getListData(){
       var data = [
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ];
       switch (this.state.listName) {
           case 'tab1':
               data =  [
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ];
               break;
           case 'tab2':
               data =  [
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ];
               break;
             case 'tab3':
               data =  [
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ];
               break;
           default:break;
       }
       this.state.data = data;
    }
    handleChange(name){
    this.setState({listName:name},()=>{this.getListData()});
    }
    listPress(itemName){
        alert(itemName);
    }
    componentDidMount(){
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    data: responseJson.movies,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }
    render(){
        return (
            <View style={{alignItems:'center'}}>
            <ScrollView horizontal={true}>
                <TabItem name='tab1'onChange={(val) => {this.handleChange(val)}}  />
                <TabItem name='tab21' onChange={(val) => {this.handleChange(val)}} />
                <TabItem name='tab3' onChange={(val) => {this.handleChange(val)}} />
                <TabItem name='tab3' onChange={(val) => {this.handleChange(val)}} />
                <TabItem name='tab3' onChange={(val) => {this.handleChange(val)}} />
                <TabItem name='tab3' onChange={(val) => {this.handleChange(val)}} />
                <TabItem name='tab3' onChange={(val) => {this.handleChange(val)}} />
                <TabItem name='tab3' onChange={(val) => {this.handleChange(val)}} />
                <TabItem name='tab3' onChange={(val) => {this.handleChange(val)}} />
                <TabItem name='tab3' onChange={(val) => {this.handleChange(val)}} />
                <TabItem name='tab3' onChange={(val) => {this.handleChange(val)}} />
                <TabItem name='tab3' onChange={(val) => {this.handleChange(val)}} />
                <TabItem name='tab3' onChange={(val) => {this.handleChange(val)}} />
            </ScrollView>
                <ListName name={this.state.listName}/>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) => <Text onPress={()=>this.listPress(item.title)}>{item.title}, {item.releaseYear}</Text>}
                />
            </View>
        )
    }
}
AppRegistry.registerComponent(appName, () => Practice);
