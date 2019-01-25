import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar, Alert } from 'react-native';
import { Picker, Item, Label, Input } from 'native-base';
import { LoginStyle } from './LoginStyle';
import login from './../../api/login';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    signin() {
        if (!this.state.email || !this.state.password) {
            alert("Tous les champs sont requis");
            return 0;
        }
        login.login(this.state).then(response => {
            console.log("----LOGIN GOOD----",response.role);
            if (response.role == "student")
                this.props.navigation.navigate('StudentTabs');
            if (response.role == "accompanist")
                this.props.navigation.navigate('AccompagnistTabs');
        });
    }

    signup() {
        this.props.navigation.navigate('Signup');
    }

    render() {
        return(
            <KeyboardAvoidingView behavior="padding" style={LoginStyle.container}>
                <View style={LoginStyle.logoContainer}>
                    <Image
                        style={LoginStyle.logo}
                        source={require('../../images/logo.png')}/>
                    <Text style={LoginStyle.title}>Trouver un accompagnateur en un seul click</Text>
                </View>
                <View style={LoginStyle.formContainer}>
                    <Item floatingLabel >
                        <Label style={{color: 'white'}}>Email</Label>
                        <Input style={{color: 'white'}}
                               onChangeText={(email) => this.setState({email: email})} />
                    </Item>
                    <Item floatingLabel style={{marginBottom: 20}}>
                        <Label style={{color: 'white'}}>Mot de passe</Label>
                        <Input style={{color: 'white'}}
                               secureTextEntry
                               onChangeText={(password) => this.setState({password:password})} />
                    </Item>
                    <TouchableOpacity
                        onPress={() => this.signin()}
                        style={LoginStyle.buttonContainer}>
                        <Text style={LoginStyle.buttonText}>Connexion</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.signup()}
                        style={LoginStyle.buttonContainer}>
                        <Text style={LoginStyle.buttonText}>Inscription</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}
