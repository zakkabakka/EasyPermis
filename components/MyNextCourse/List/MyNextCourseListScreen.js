import React from 'react';
import axios from 'axios';
import {
    View,
    ScrollView,
    StyleSheet,
    Image,
    TouchableHighlight,
    ListView,
} from 'react-native';
import {
    Text,
    Card,
    ButtonGroup,
    Tile,
    Icon,
    List,
    ListItem,
    Avatar
} from 'react-native-elements';
import { Tab, Tabs, TabHeading } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

import MyNextCourseAccepted from './State/MyNextCourseAccepted';
import MyNextCourseWaiting from './State/MyNextCourseWaiting';
import MyNextCourseCanceled from './State/MyNextCourseCanceled';
import MyNextCourseRefused from './State/MyNextCourseRefused';

const MY_NEXT_COURSES = [
    {key: 0, avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg', name: 'zak', date: '2017-01-02', startTime: '00:00', endTime: '12:00', Lieu: 'Paris' },
    {key: 1, avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg', name: 'Jackson', date: '2017-01-02', startTime: '00:00', endTime: '12:00', Lieu: 'Paris' },
    {key: 2, avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg', name: 'James', date: '2017-01-02', startTime: '00:00', endTime: '12:00', Lieu: 'Paris' },
    {key: 3, avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg', name: 'Joel', date: '2017-01-02', startTime: '00:00', endTime: '12:00', Lieu: 'Paris' },
    {key: 4, avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg', name: 'John', date: '2017-01-02', startTime: '00:00', endTime: '12:00', Lieu: 'Paris' },
    {key: 5, avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg', name: 'Jillian', date: '2017-01-02', startTime: '00:00', endTime: '12:00', Lieu: 'Paris' },
    {key: 6, avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg', name: 'Jimmy', date: '2017-01-02', startTime: '00:00', endTime: '12:00', Lieu: 'Paris' },
    {key: 7, avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg', name: 'Julie', date: '2017-01-02', startTime: '00:00', endTime: '12:00', Lieu: 'Paris' }
];

class MyNextCourseListScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Tabs>
                <Tab heading={ <TabHeading><Icon name="update" /><Text>En attente</Text></TabHeading>}>
                    <MyNextCourseWaiting navigation={this.props.navigation} />
                </Tab>
                <Tab heading={ <TabHeading><Icon name="done" /><Text>Accepté</Text></TabHeading>}>
                    <MyNextCourseAccepted navigation={this.props.navigation} />
                </Tab>
                <Tab heading={ <TabHeading><Icon name="highlight-off" /><Text>Refusé</Text></TabHeading>}>
                    <MyNextCourseRefused navigation={this.props.navigation} />
                </Tab>
                <Tab heading={ <TabHeading><Icon name="clear" /><Text>Annulé</Text></TabHeading>}>
                    <MyNextCourseCanceled navigation={this.props.navigation} />
                </Tab>
            </Tabs>
        );
    }

}

export default MyNextCourseListScreen;

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