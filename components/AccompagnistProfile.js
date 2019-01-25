import React from 'react';
import { View, Text, Button, TouchableHighlightExample, Alert } from 'react-native';
import {RkButton} from 'react-native-ui-kitten';

class AccompagnistProfile extends React.Component {
    constructor(props) {
        super(props);
        this.accompagnist = this.props.navigation.state.params;
    }

    goToRequestAppointment(accompagnist) {
        this.props.navigation.navigate('RequestAppointment', accompagnist)
    }

    goToAccompagnistPlanning(accompagnist) {
        this.props.navigation.navigate('Planning', accompagnist);
    }

    goToCourseRequest() {
        this.props.navigation.navigate('CourseList');
    }

    render() {
        return(
            <View>
                <Text>Accompagnist profile : {this.accompagnist.key}</Text>
                <Button onPress={() => this.goToRequestAppointment(this.accompagnist)} title="Demande cours (ROLE STUDENT)" />
                <Button onPress={() => this.goToAccompagnistPlanning(this.accompagnist)} title="Voir son planning (ROLE STUDENT)" />
                <Button onPress={() => this.goToCourseRequest()} title="Voir mes demandes de cours (ROLE ACCOMPAGNIST CONNECTED)"/>
            </View>
        )
    }
}

export default AccompagnistProfile;
