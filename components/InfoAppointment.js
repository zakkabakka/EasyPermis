import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';

class InfoAppointment extends React.Component {
    constructor(props) {
        super(props);

        this.info = this.props.navigation.state.params;
    }


    acceptAppointment() {
        // request to API : send data

        // success
        Alert.alert(
            'Accpeter un cours',
            "Vous venez d'accepter un cours",
            [
                {text: 'OK', onPress: () => this.props.navigation.dispatch(NavigationActions.reset(
                        {
                            index: 0,
                            actions: [
                                NavigationActions.navigate({ routeName: 'Map'})
                            ]
                        }))
                },
            ],
            { cancelable: false }
        );

        // false

    }

    refuseAppointment() {
        // request to API : send data

        // success
        Alert.alert(
            'Refuser un cours',
            'Vous venez de refuser un cours',
            [
                {text: 'OK', onPress: () => this.props.navigation.dispatch(NavigationActions.reset(
                        {
                            index: 0,
                            actions: [
                                NavigationActions.navigate({ routeName: 'Map'})
                            ]
                        }))
                },
            ],
            { cancelable: false }
        );

        // false

    }

    cancelAppointment() {
        // request to API : send data

        // success
        Alert.alert(
            "Annuler un cours",
            "Vous venez d'annuler un cours",
            [
                {text: 'OK', onPress: () => this.props.navigation.dispatch(NavigationActions.reset(
                        {
                            index: 0,
                            actions: [
                                NavigationActions.navigate({ routeName: 'Map'})
                            ]
                        }))
                },
            ],
            { cancelable: false }
        );

        // false

    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Info Appointement </Text>
                <Text>Student : {this.info.name}</Text>
                <Text>date de rdv : {this.info.date}</Text>
                <Text>heure : {this.info.startTime} à {this.info.endTime}</Text>
                <Button onPress={() => this.acceptAppointment()} title="Accepter" />
                <Button onPress={() => this.refuseAppointment()} title="Refuser" />
                <Button onPress={() => this.cancelAppointment()} title="Annuler" />
            </View>
        )
    }
}

export default InfoAppointment;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
