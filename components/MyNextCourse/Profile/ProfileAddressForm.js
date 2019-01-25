import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { Form, Label } from 'native-base';

export default class ProfileAddressForm extends React.Component {

    constructor(props) {
        super(props);
        this.address = this.props.navigation.state.params;
    }

    render() {
        return(
            <ScrollView>
                <Form>
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input />
                    </Item>
                </Form>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    cards: {
        margin: 10
    },
    button: {
        margin: 20
    }
});