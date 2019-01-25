import React from 'react';
import axios from 'axios';
import { View, Image, StyleSheet, ScrollView, Linking, Platform } from 'react-native';
import { Avatar, List, ListItem } from 'react-native-elements';
import { Text, Icon, Tabs, Tab, TabHeading, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Col, Row, Grid } from "react-native-easy-grid";
import Communications from 'react-native-communications';

import ProfileInformation from './Tabs/ProfileInformation';
import ProfileInformationStudent from './Tabs/ProfileInformationStudent';
import ProfileCourseRealised from './Tabs/ProfileCoursesRealised';
import login from './../../api/login';

const USER_INFO = {
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
};

export default class ProfileScreen extends React.Component {
    static navigationOptions = ({ navigation }) =>  ({
        title: 'Profil',
        headerRight: <Button transparent onPress={() => navigation.navigate('ProfileForm')}><Text>Modifier</Text></Button>
    });

    constructor(props) {
        super(props);
        this.state = {
            profile: []
        };
    }

    componentWillMount() {

        login.getCurrentUser()
            .then(response => {
                console.log(response.data);
                this.setState({
                    profile: response.data
                });
            })
            .catch(error => {
                console.log("PROFILE",error.response);
            });
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
                            <Ionicons name="md-call" style={{fontSize: 80}} onPress={() => Communications.phonecall(this.state.profile.phone.toString(), true)}/>
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
                            <Ionicons name="ios-mail" style={{fontSize: 80, left: 25}} onPress={() => this.sendMessage()} />
                        </Col>
                    </Grid>
                    <Text style={styles.name}>{this.state.profile.firstname + ' ' + this.state.profile.lastname}</Text>
                </View>
                {experience}
                <View>
                    <Tabs>
                        <Tab heading={ <TabHeading><Ionicons name="md-information-circle" /><Text>Informations</Text></TabHeading>}>
                            {this.state.profile.role == "accompanist" && <ProfileInformation />}
                            {this.state.profile.role == "student" && <ProfileInformationStudent />}
                        </Tab>
                        <Tab heading={ <TabHeading><Ionicons name="md-list" /><Text>Cours</Text></TabHeading>}>
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