import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Form, Item, Label, Input, Picker, Button, Text } from 'native-base';
import { FormLabel, FormInput } from 'react-native-elements';

import accompanist from './../../../api/accompanist';

const ACCOMPAGNIST_DATE = [{
    key: 1,
    date: '2017-01-02'
},{
    key: 2,
    date: '2017-01-03'
},{
    key: 3,
    date: '2017-01-04'
},{
    key: 4,
    date: '2017-01-05'
}];

const ACCOMPAGNIST_HOURS = [{
    key: 1,
    hour: '12:00 - 11:00',
}, {
    key: 2,
    hour: '14:00 - 15:00',
}, {
    key: 3,
    hour: '20:00 - 21:00',
}];

export default class RequestCourseScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shedules: []
        };
        this.accompanistId = this.props.navigation.state.params;
    }
    onValueChange2(value: string) {
        this.setState({
            date: value
        });
    }
    requestCourse() {
        // call api to request course
        console.log(this.state);
    }

    componentWillMount() {
    }

    render() {
        return(
            <View style={styles.container}>
              <Form>
                <Item>
                    <Picker mode="dropdown"
                        placeholder="Sélectionner un créneau"
                        selectedValue={this.state.hour}
                        onValueChange={(hour) => this.setState({hour: hour})} >
                        {ACCOMPAGNIST_HOURS.map(hour => (
                            <Item key={hour.key} label={hour.hour} value={hour.hour} />
                        ))}
                    </Picker>
                </Item>
                <Button full
                    style={styles.button}
                    onPress={this.requestCourse()}>
                  <Text>Enregistrer</Text>
                </Button>
              </Form>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        margin: 15
    }
});
