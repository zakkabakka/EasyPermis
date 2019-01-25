import React from 'react';
import { View, ScrollView, StyleSheet, Text, Alert } from 'react-native';
import { Avatar, PricingCard } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class MyNextCourseInfoScreen extends React.Component {
    constructor(props) {
        super(props);
        this.info = this.props.navigation.state.params;
    }

    cancelAlert() {
        Alert.alert(
            'Annuler un cours',
            'Êtes vous sûr de vouloir annuler ce cours ?',
            [
                {text: 'Non', style: 'cancel'},
                {text: 'Oui', onPress: () => this.cancelCourse()},
            ],
            { cancelable: true }
        )
    }

    cancelCourse() {
        // TODO call API cancel course by course ID

        // success
        alert('Le cours a été annulé avec succès');
        this.props.navigation.goBack(null);

        // error
        //alert('Une erreur est survenue. Veuillez réessayer ultérieurement');
    }

    refuseAlert() {
        Alert.alert(
            'Refuser un cours',
            'Êtes vous sûr de vouloir refuser ce cours ?',
            [
                {text: 'Non', style: 'cancel'},
                {text: 'Oui', onPress: () => this.refuseCourse()},
            ],
            { cancelable: false }
        )
    }

    refuseCourse() {
        // TODO call API refuse course by course ID

        // success
        alert('Le cours a été refusé avec succès');
        this.props.navigation.goBack(null);

        // error
        //alert('Une erreur est survenue. Veuillez réessayer ultérieurement');
    }

    acceptAlert() {
        Alert.alert(
            'Accepter un cours',
            'Êtes vous sûr de vouloir accepter ce cours ?',
            [
                {text: 'Non', style: 'cancel'},
                {text: 'Oui', onPress: () => this.acceptCourse()},
            ],
            { cancelable: true }
        )
    }

    acceptCourse() {
        // TODO call API accept course by course ID

        // success
        alert('Le cours a été accepté avec succès');
        this.props.navigation.goBack(null);

        // error
        //alert('Une erreur est survenue. Veuillez réessayer ultérieurement');
    }

    buttons() {
        if (this.info.state == "accepted") {
            return (
                <Button full iconLeft warning
                        style={styles.button}
                        onPress={() => this.cancelAlert()}>
                    <Ionicons name='clear' />
                    <Text style={styles.buttonText}>   Annuler</Text>
                </Button>
            );
        }
        // seulement si c'est un accompagnateur : check sur le role de l'utilisateur
        if (this.info.state == "waiting") {
            return (
                <View>
                    <Grid>
                        <Col>
                            <Button iconLeft success full style={styles.buttonAcceptRefuse}
                                    onPress={() => this.acceptAlert()}>
                                <Ionicons name='done' />
                                <Text style={styles.buttonText}>   Accepted</Text>
                            </Button>
                        </Col>
                        <Col>
                            <Button iconLeft danger full style={styles.buttonAcceptRefuse}
                                    onPress={() => this.refuseAlert()}>
                                <Ionicons name='highlight-off' />
                                <Text style={styles.buttonText}>   Refuser</Text>
                            </Button>
                        </Col>
                    </Grid>
                </View>
            )
        }
    }

    render() {
        return(
            <ScrollView>
                <View style={styles.headerContainer}>
                    <Avatar
                        large
                        rounded
                        source={{uri: this.info.avatar}}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />
                </View>
                <View>
                    <PricingCard
                        color='#d81b60'
                        title={this.info.name}
                        price='20€'
                        info={[
                            'Date : '+this.info.date,
                            'Heure : '+this.info.startTime+' '+this.info.endTime,
                            'Lieu : '+this.info.Lieu
                        ]}
                        button={{ title: 'Voir son profil', Ionicons: 'person' }}
                        onButtonPress={() => this.props.navigation.navigate('Profile', this.key)}
                    />
                    {this.buttons()}
                </View>
            </ScrollView>
        )
    }
}

export default MyNextCourseInfoScreen;

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
    button: {
        margin: 15
    },
    buttonText: {
        color: 'white',
        fontSize: 15
    },
    buttonAcceptRefuse: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    }
});
