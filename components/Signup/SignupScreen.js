import React from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar, Alert } from 'react-native';
import { Picker, Item, Button, Form, Label, Input, CheckBox } from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { SignupStyle } from './SignupStyle';
import register from './../../api/register';

export default class SingupScreen extends React.Component {
    constructor(props) {
        super(props);
        this.sDateTimePickerVisible = false,
        this.state = {
            isDateTimePickerVisible: false,
            firstname: null,
            lastname: null,
            email: null,
            password: null,
            role: 'student', //accompanist or student
            licenceDate: null, //accompanist
            yearsExperience: null, //accompanist
            price: null, //accompanist
            city: null,
            diploma: null, //accompanist
            yearsExperience: true, //accompanist
            drivingHour: null //student
        };
    }

    singup() {
        if (!this.state.firstname || !this.state.lastname || !this.state.email || !this.state.password || !this.state.role || !this.state.city || !this.state.phone) {
            alert("Tous les champs sont requis");
            return 0;
        }
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(this.state.email) === false) {
            alert("Email incorrect");
            return 0;
        }
        if (this.state.city.length != 5) {
            alert("Code postal incorrect");
            return 0;
        }
        if (this.state.phone.length != 10) {
            alert("Portable incorrect");
            return 0;
        }

        if (this.state.role == "accompanist") {
            if (!this.state.licenceDate || !this.state.yearsExperience || !this.state.price || this.state.diploma == null)
                alert("Tous les champs sont requis 2");
            else {
                // register
                let data = {
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    email: this.state.email,
                    password: this.state.password,
                    licence_date: new Date(this.state.licenceDate),
                    diploma: this.state.diploma,
                    years_experience: this.state.yearsExperience,
                    price: this.state.price,
                    role: this.state.role,
                    city: this.state.city,
                    phone: this.state.phone
                };
                register.signup(data).then(response => {
                    this.props.navigation.goBack(null);
                });
            }
        } else {
            console.log('register student');
            // register
            let data = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                password: this.state.password,
                role: this.state.role,
                city: this.state.city,
                driving_hour: this.state.drivingHour,
                phone: this.state.phone
            };
            console.log(data);
            register.signup(data).then(() => {
                this.props.navigation.goBack(null);
            });
        }
    }

    onValueChange3(value) {
      this.setState({
        role: value
      });
    }

    onValueChange4(value) {
        this.setState({
           diploma: value
        });
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        date = new Date(date);
        this.setState({licenceDate: date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()});

        this._hideDateTimePicker();
    };

    isAccompagnist() {
        //console.log('OK');
        if(this.state.role == "accompanist") {
            return (
                <View>
                    <Button onPress={this._showDateTimePicker} transparent style={SignupStyle.buttonContainer} full>
                        <Text>Date d'obtention du permis * : {this.state.licenceDate}</Text>
                    </Button>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                    />
                    <Item floatingLabel >
                        <Label style={{color: 'white'}}>Années d'expériences *</Label>
                        <Input style={{color: 'white'}}
                               keyboardType="numeric"
                               onChangeText={(yearsExperience) => this.setState({yearsExperience: yearsExperience})} />
                    </Item>
                    <Picker
                        mode="dropdown"
                        placeholder="Bepecaser (diplome) *"
                        iosHeader="Bepecaser"
                        selectedValue={this.state.diploma}
                        onValueChange={this.onValueChange4.bind(this)} >
                        <Item label="Oui" value={true} />
                        <Item label="Non" value={false} />
                    </Picker>
                    <Item floatingLabel >
                        <Label style={{color: 'white'}}>Prix de l'heure de conduite *</Label>
                        <Input style={{color: 'white'}}
                               keyboardType="numeric"
                               onChangeText={(price) => this.setState({price: price})} />
                    </Item>
                </View>
            );
        } else {
            return (
                <View>
                    <Item floatingLabel >
                        <Label style={{color: 'white'}}>Nombre d'heure de conduite réalisée *</Label>
                        <Input style={{color: 'white'}}
                               keyboardType="numeric"
                               onChangeText={(drivingHour) => this.setState({drivingHour: drivingHour})} />
                    </Item>
                </View>
            );
        }
    }

    render() {
        return(
            <KeyboardAwareScrollView style={SignupStyle.container}>
                <View>
                    <Form>
                        <Item floatingLabel >
                            <Label style={{color: 'white'}}>Prénom *</Label>
                            <Input style={{color: 'white'}}
                                   onChangeText={(firstname) => this.setState({firstname: firstname})} />
                        </Item>
                        <Item floatingLabel >
                            <Label style={{color: 'white'}}>Nom *</Label>
                            <Input style={{color: 'white'}}
                                   onChangeText={(lastname) => this.setState({lastname: lastname})}/>
                        </Item>
                        <Item floatingLabel >
                            <Label style={{color: 'white'}}>Email *</Label>
                            <Input style={{color: 'white'}}
                                   onChangeText={(email) => this.setState({email: email})} />
                        </Item>
                        <Item floatingLabel >
                            <Label style={{color: 'white'}}>Mot de passe *</Label>
                            <Input secureTextEntry
                                   style={{color: 'white'}}
                                   onChangeText={(password) => this.setState({password: password})} />
                        </Item>
                        <Picker
                            mode="dropdown"
                            placeholder="Vous êtes ? *"
                            iosHeader="Vous êtes ?"
                            selectedValue={this.state.role}
                            onValueChange={this.onValueChange3.bind(this)} >
                            <Item label="Un accompagnateur" value="accompanist" />
                            <Item label="Un éléve" value="student" />
                        </Picker>
                        {this.isAccompagnist()}
                        <Item floatingLabel >
                            <Label style={{color: 'white'}}>Code postal *</Label>
                            <Input style={{color: 'white'}}
                                   keyboardType="numeric"
                                   maxLength={5}
                                   onChangeText={(city) => this.setState({city: city})} />
                        </Item>
                        <Item floatingLabel >
                            <Label style={{color: 'white'}}>Portable *</Label>
                            <Input style={{color: 'white'}}
                                   keyboardType="phone-pad"
                                   maxLength={10}
                                   onChangeText={(phone) => this.setState({phone: phone})} />
                        </Item>
                        <Button
                            style={SignupStyle.buttonContainer}
                            onPress={() => this.singup()}
                            full>
                            <Text style={SignupStyle.buttonText}>Inscription</Text>
                        </Button>
                    </Form>
                </View>
            </KeyboardAwareScrollView>
        )
    }
}
