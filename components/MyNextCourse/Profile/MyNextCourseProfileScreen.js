import React from 'react';
import { View, Image, StyleSheet, ScrollView, Platform, Linking } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Text, Icon, Tabs, Tab, TabHeading } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import Communications from 'react-native-communications';

import ProfileInformation from '../../Profile/Tabs/ProfileInformation';
import ProfileInformationStudent from './../../Profile/Tabs/ProfileInformationStudent';
import ProfileCourseRealised from './../../Profile/Tabs/ProfileCoursesRealised';


const USER_INFO = {
    id: '1',
    firstName: 'zak',
    lastName: 'kherfi',
    email: 'zakka@bakka.com',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    phone: '0102030405',
    yearsExperience: '8 ans',
    address: {
        line1: '2 Square Chalses',
        line2: 'APT 571',
        postalCode: '77100',
        city: 'Meaux',
        country: 'France'
    }
};

export default class MyNextCourseProfileScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: this.props.navigation.state.params
        };

    }

    sendMessage() {
        const url = (Platform.OS === 'android')
            ? 'sms:'+this.state.profile.phone+'?body=Votre Message'
            : 'sms:'+this.state.profile.phone;

        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                console.log('Unsupported url: ' + url)
            } else {
                return Linking.openURL(url)
            }
        }).catch(err => console.error('An error occurred', err))
    }

    getUserById() {
        // TODO : call API to get user info by id
    }

    render() {
        let experience;
        if (this.state.profile.role == "accompagnist") {
            experience = (
                <View style={styles.bar}>
                    <View style={styles.barItem}>
                        <Text style={styles.barTop}>{this.state.profile.years_experience} ans</Text>
                        <Text style={styles.barBottom}>Expérience</Text>
                    </View>
                </View>
            );
        }

        return(
                <ScrollView>
                    <View style={styles.headerContainer}>
                        <Grid>
                            <Col>
                                <Icon name="call" style={{fontSize: 80}} onPress={() => Communications.phonecall(this.state.profile.phone.toString(), true)}/>
                            </Col>
                            <Col>
                                <Avatar
                                    large
                                    rounded
                                    source={{uri: USER_INFO.avatar}}
                                    activeOpacity={0.7}
                                />
                            </Col>
                            <Col>
                                <Icon name="ios-mail-outline" style={{fontSize: 80, left: 25}} onPress={() => this.sendMessage()} />
                            </Col>
                        </Grid>
                        <Text style={styles.name}>{this.state.profile.firstname + ' ' + this.state.profile.lastname}</Text>
                    </View>
                    {experience}
                    <View>
                        <Tabs>
                            <Tab heading={ <TabHeading><Icon name="information-circle" /><Text>Informations</Text></TabHeading>}>
                                {this.state.profile.role == "accompanist" && <ProfileInformation />}
                                {this.state.profile.role == "student" && <ProfileInformationStudent />}
                            </Tab>
                            <Tab heading={ <TabHeading><Icon name="list" /><Text>Cours</Text></TabHeading>}>
                                <ProfileCourseRealised navigation={this.props.navigation} />
                            </Tab>
                        </Tabs>
                    </View>
                </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        backgroundColor: '#d81b60',
    },
    bar: {
        flexDirection: 'row'
    },
    barItem: {
        flex: 1,
        padding: 18,
        alignItems: 'center'
    },
    barTop: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    barBottom: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    name: {
        marginTop: 20,
        fontSize: 25,
        color: 'white'
    },
    counter: {
        borderStyle: 'solid',
        padding: 20,
        backgroundColor: 'grey'
    },
    counterContent: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: 'white'
    },
    button: {
        margin: 20
    }
});