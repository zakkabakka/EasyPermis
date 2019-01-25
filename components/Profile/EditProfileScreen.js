import React from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar, Alert } from 'react-native';
import { Picker, Item, Button, Form, Label, Input, CheckBox } from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import student from './../../api/student';
import accompanist from './../../api/accompanist';
import login from './../../api/login';

export default class EditProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            profile: []
        };
    }

    componentWillMount() {
        
        login.getCurrentUser()
            .then(response => {

                let date = new Date(response.data.licence_date);
                //console.log(date);
                response.data.licence_date = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
                

                this.setState({
                    profile: response.data
                });
            })
            .catch(error => {
                console.log("PROFILE",error.response)
            });
    }

    edit() {
        /*if (!this.state.profile.firstname || !this.state.profile.lastname || !this.state.profile.email || !this.state.profile.password || !this.state.profile.role || !this.state.profile.city || !this.state.profile.phone) {
            alert("Tous les champs sont requis");
            return 0;
        }*/
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(this.state.profile.email) === false) {
            alert("Email incorrect");
            return 0;
        }
        if (this.state.profile.city.length != 5) {
            alert("Code postal incorrect");
            return 0;
        }
        if (this.state.profile.phone.length != 10) {
            alert("Portable incorrect");
            return 0;
        }

        if (this.state.profile.role == "accompanist") {
            /*if (!this.state.profile.licence_date || !this.state.profile.years_experience || !this.state.profile.price || this.state.profile.diploma == null)
                alert("Tous les champs sont requis 2");
            else {*/
                accompanist.update(this.state.profile).then(response => {
                    this.props.navigation.goBack(null);
                });
            //}
        } else {
            student.update(this.state.profile).then(() => {
                this.props.navigation.goBack(null);
            });
        }
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        date = new Date(date);
        this.state.profile.licence_date = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate();

        this._hideDateTimePicker();
    };

    isAccompagnist() {
        //console.log('OK');
        if(this.state.profile.role == "accompanist") {
            return (
                <View>
                    <Button onPress={this._showDateTimePicker} transparent full>
                        <Text>Date d'obtention du permis * : {this.state.licence_date}</Text>
                    </Button>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                        value={this.state.profile.licence_date}
                    />
                    <Item floatingLabel >
                        <Label>Années d'expériences : {`${this.state.profile.years_experience}`}</Label>
                        <Input keyboardType="numeric"
                               onChangeText={(yearsExperience) => this.state.profile.years_experience = yearsExperience} />
                    </Item>
                    <Picker
                        value={this.state.profile.diploma}
                        mode="dropdown"
                        placeholder="Bepecaser (diplome) *"
                        iosHeader="Bepecaser"
                        selectedValue={this.state.diploma}
                        onValueChange={(diploma) => this.state.profile.diploma = diploma} >
                        <Item label="Oui" value={true} />
                        <Item label="Non" value={false} />
                    </Picker>
                    <Item floatingLabel >
                        <Label>Prix de l'heure de conduite : {`${this.state.profile.price}`}</Label>
                        <Input keyboardType="numeric"
                               onChangeText={(price) => this.state.profile.price = price} />
                    </Item>
                </View>
            );
        } else {
            return (
                <View>
                    <Item floatingLabel >
                        <Label>Nombre d'heure de conduite réalisée : {`${this.state.profile.driving_hours}`}</Label>
                        <Input keyboardType="numeric"
                               onChangeText={(drivingHour) => this.state.profile.driving_hours = drivingHour} />
                    </Item>
                </View>
            );
        }
    }

    render() {
        return(
            <KeyboardAwareScrollView>
                <View>
                    <Form>
                        <Item floatingLabel >
                            <Label>Prénom : {this.state.profile.firstname}</Label>
                            <Input onChangeText={(firstname) => this.state.profile.firstname = firstname} />
                        </Item>
                        <Item floatingLabel >
                            <Label>Nom : {this.state.profile.lastname}</Label>
                            <Input onChangeText={(lastname) => this.state.profile.lastname = lastname}/>
                        </Item>
                        <Item floatingLabel >
                            <Label >Email : {this.state.profile.email}</Label>
                            <Input onChangeText={(email) => this.state.profile.email = email} />
                        </Item>
                        <Item floatingLabel >
                            <Label >Mot de passe : {this.state.profile.password}</Label>
                            <Input secureTextEntry
                                   onChangeText={(password) => this.state.profile.password = password } />
                        </Item>
                        {this.isAccompagnist()}
                        <Item floatingLabel >
                            <Label >Code postal : {this.state.profile.city}</Label>
                            <Input keyboardType="numeric"
                                   maxLength={5}
                                   onChangeText={(city) => this.state.profile.city = city} />
                        </Item>
                        <Item floatingLabel >
                            <Label >Portable : {`${this.state.profile.phone}`}</Label>
                            <Input keyboardType="phone-pad"
                                   maxLength={10}
                                   onChangeText={(phone) => this.state.profile.phone = phone} />
                        </Item>
                        <Button
                            style={{margin: 10}}
                            onPress={() => this.edit()}
                            full>
                            <Text style={{color: 'white'}}>Enregister</Text>
                        </Button>
                    </Form>
                </View>
            </KeyboardAwareScrollView>
        )
    }
}
