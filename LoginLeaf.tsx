import React, {Component} from 'react';
import {
    BackAndroid,
    Button,
    Dimensions,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import {string} from "prop-types";
let widthOfMargin = Dimensions.get('window').width*0.05;
export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

interface State {
    inputedNum: string;
    inputedPW:string;
}
export default class LoginLeaf extends Component<Props,State> {
    constructor(props: any) {
        super(props);
        this.state = {
            inputedNum: '',
            inputedPW: ''
        };
        this.updatePW = this.updatePW.bind(this);
    }

    updateNum(newText: string) {
        this.setState((state) => {
            return {
                inputedNum: newText,
            };
        });
    }

    updatePW(newText: string) {
        this.setState(() => {
            return {
                inputedPW: newText,
            };
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInputStyle}
                           placeholder={'请输入手机号'}
                           onChangeText={(newText) => this.updateNum(newText)}/>
                <Text style={styles.textPromptStyle}>
                    您输入的手机号：{this.state.inputedNum}
                </Text>
                <TextInput style={styles.textInputStyle}
                           placeholder={'请输入密码'}
                           secureTextEntry={true}
                           onChangeText={this.updatePW}
                />
                <Text style={styles.bigTextPrompt}>
                    确定
                </Text>
            </View>
        );
    }
}
 let styles = StyleSheet.create({
     container:{
         flex:1,
         backgroundColor:'white',
     },
     textInputStyle:{
         margin:widthOfMargin,
         backgroundColor:'gray',
         fontSize:20
     },
     textPromptStyle:{
         margin:widthOfMargin,
         fontSize:20
     },
     bigTextPrompt:{
         margin:widthOfMargin,
         backgroundColor:'gray',
         color:'white',
         textAlign:'center',
         fontSize:30
     }
    });


