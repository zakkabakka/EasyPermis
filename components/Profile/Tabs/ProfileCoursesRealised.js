import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Body, Text, Card, CardItem, Left, Thumbnail, Button, Icon, List, ListItem, Right } from 'native-base';

const COURSES = [
    {key: 0, avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg', name: 'Devin', date: '2017-01-02', startTime: '00:00', endTime: '12:00', Lieu: 'Paris', },
    {key: 1, avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg', name: 'Devin', date: '2017-01-02', startTime: '00:00', endTime: '12:00', Lieu: 'Paris' }
];

class ProfileCoursesRealised extends React.Component {
    render() {
        return(
            <ScrollView>
                <List>
                    {COURSES.map((course, key) => (
                        <ListItem avatar key={course.key} >
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
            </ScrollView>
        );
    }




}

export default ProfileCoursesRealised;

var styles = StyleSheet.create({
    button: {
        margin: 20
    }
});