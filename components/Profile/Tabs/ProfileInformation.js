import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Body, Text, Card, CardItem } from 'native-base';
import Moment from 'moment';

import login from './../../../api/login';

class ProfileInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: []
        };
    }

    componentWillMount() {
        login.getCurrentUser()
            .then(response => { 
                this.setState({
                    profile: response.data
                });
            })
            .catch(error => {
                console.log(error.response)
            });
    }

    render() {
        return(
            <ScrollView>
                <View style={styles.cards}>
                    <Card>
                        <CardItem>
                            <Body>
                            <Text>
                                Nom et prénom : {this.state.profile.firstname + ' ' + this.state.profile.lastname}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                            <Text>
                                Email : {this.state.profile.email}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                            <Text>
                                Numéro de téléphone : {this.state.profile.phone}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                            <Text>
                                Date d obtention du permis : {Moment(this.state.profile.licence_date).format('d/M/Y')}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                            <Text>
                                Bepecaser : {this.state.profile.diploma}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                            <Text>
                                Prix de lheure de conduite : {this.state.profile.price}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                            <Text>
                                Code postal : {this.state.profile.city}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </View>
            </ScrollView>
        );
    }




}

export default ProfileInformation;

var styles = StyleSheet.create({
    cards: {
        margin: 10
    },
    button: {
        margin: 20
    }
});