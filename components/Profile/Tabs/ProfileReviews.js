import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Body, Text, Card, CardItem, Left, Thumbnail, Button, Icon } from 'native-base';

const REVIEWS = [{
    key: 0,
    user: 'firstname lastname',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    date: '2017-03-01',
    message: 'Un avis positif Un avis positif Un avis positif Un avis positif Un avis positif Un avis positif ',
    stars: 3
}, {
    key: 1,
    user: 'firstname lastname',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    date: '2017-03-01',
    message: 'Un avis positif Un avis positif Un avis positif Un avis positif Un avis positif Un avis positif ',
    stars: 3
}, {
    key: 2,
    user: 'firstname lastname',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    date: '2017-03-01',
    message: 'Un avis positif Un avis positif Un avis positif Un avis positif Un avis positif Un avis positif ',
    stars: 3
}, {
    key: 3,
    user: 'firstname lastname',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    date: '2017-03-01',
    message: 'Un avis positif Un avis positif Un avis positif Un avis positif Un avis positif Un avis positif ',
    stars: 3
}, {
    key: 4,
    user: 'firstname lastname',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    date: '2017-03-01',
    message: 'Un avis positif Un avis positif Un avis positif Un avis positif Un avis positif Un avis positif ',
    stars: 3
}];

class ProfileReviews extends React.Component {
    render() {
        return(
            <View>
                {REVIEWS.map((l) => (
                    <Card key={l.key} style={{flex: 0}}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{uri: l.avatar}} />
                                <Body>
                                <Text>{l.user}</Text>
                                <Text note>{l.date}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>
                                {l.message}
                            </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Icon name="star" />
                                    <Text>1,926 stars</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                ))}
            </View>
        );
    }




}

export default ProfileReviews;

var styles = StyleSheet.create({
    button: {
        margin: 20
    }
});