import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Body, Text, Card, CardItem } from 'native-base';

class ProfileAddress extends React.Component {
    constructor(props) {
        super(props);
        this.address = this.props.address;
    }

    render() {
        return(
            <ScrollView>
                <View style={styles.cards}>
                    <Card>
                        <CardItem>
                            <Body>
                            <Text>
                                Rue : {this.address.line1}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                            <Text>
                                Complément d adresse : {this.address.line2}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                            <Text>
                                Code postal : {this.address.postalCode}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                            <Text>
                                Ville : {this.address.city}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </View>
            </ScrollView>
        );
    }




}

export default ProfileAddress;

var styles = StyleSheet.create({
    cards: {
        margin: 10
    },
    button: {
        margin: 20
    }
});