import React from 'react';
import axios from 'axios';
import { ScrollView, StyleSheet, RefreshControl } from 'react-native';
import { List, ListItem, Left, Body, Right, Thumbnail, Text, Content } from 'native-base';

import accompanist from './../../../../api/accompanist';
import student from './../../../../api/accompanist';
import login from './../../../../api/login';

const MY_NEXT_COURSES = [
    {key: 0, avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg', name: 'zakka', date: '2017-01-02', startTime: '00:00', endTime: '12:00', Lieu: 'Paris', state: 'waiting' },
    {key: 1, avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg', name: 'bakka', date: '2017-01-02', startTime: '00:00', endTime: '12:00', Lieu: 'Paris', state: 'waiting' },
    {key: 2, avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg', name: 'houari', date: '2017-01-02', startTime: '00:00', endTime: '12:00', Lieu: 'Paris', state: 'waiting' },
    {key: 3, avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg', name: 'dakka', date: '2017-01-02', startTime: '00:00', endTime: '12:00', Lieu: 'Paris', state: 'waiting' },
    {key: 4, avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg', name: 'mouha', date: '2017-01-02', startTime: '00:00', endTime: '12:00', Lieu: 'Paris', state: 'waiting' },
    {key: 5, avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg', name: 'Julie', date: '2017-01-02', startTime: '00:00', endTime: '12:00', Lieu: 'Paris', state: 'waiting' },
    {key: 6, avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg', name: 'Julie', date: '2017-01-02', startTime: '00:00', endTime: '12:00', Lieu: 'Paris', state: 'waiting' },    {key: 13, avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg', name: 'Julie', date: '2017-01-02', startTime: '00:00', endTime: '12:00', Lieu: 'Paris', state: 'waiting' },
];

export default class MyNextCourseWaiting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            isRefreshing: false
        }
    }

    refreshList() {
        this.setState({isRefreshing: true});
        login.getCurrentUser()
            .then(response => { 
                if (response.data.role == "accompanist"){
                    this.getAccompanistCourses();
                }
                else {
                    this.getStudentCourses();
                }
            })
            .catch(error => {
                console.log(error.response)
            });

        this.setState({isRefreshing: false});
    }

    componentWillMount() {

        login.getCurrentUser()
            .then(response => { 
                if (response.data.role == "accompanist"){
                    this.getAccompanistCourses();
                }
                else {
                    this.getStudentCourses();
                }
            })
            .catch(error => {
                console.log("WATINGEURROR",error.response)
            });
    }

    getAccompanistCourses() {
        accompanist.myCourses("pending").then(res => this.setState({courses: res}));
    }
    getStudentCourses() {
        student.myCourses("pending").then(res => console.log(res))
            .catch(error => console.log(error));
    }

    render() {
        return(
            <Content refreshControl={
                <RefreshControl refreshing={this.state.isRefreshing}
                                onRefresh={this.refreshList.bind(this)}
                />}>
                <List>
                    {MY_NEXT_COURSES.map((course, key) => (
                        <ListItem avatar key={course.key}
                            onPress={() => this.props.navigation.navigate('MyNextCourseInfo', course)} >
                            <Left>
                                <Thumbnail source={{ uri: course.avatar }} />
                            </Left>
                            <Body>
                                <Text>{course.name}</Text>
                                <Text note>Date : {course.date}</Text>
                                <Text note>Lieu : {course.Lieu}</Text>
                            </Body>
                            <Right>
                                <Text note>{course.startTime + ' - ' + course.endTime}</Text>
                            </Right>
                        </ListItem>
                    ))}
                </List>
            </Content>
        );
    }
}

var styles = StyleSheet.create({
    list: {
        flexDirection: 'column',
        flex:1,
    },
    item: {
        backgroundColor: 'lightgray',
        margin: 3,
        flex:1,
        height: 60
    }
});





