import React from 'react';
import { View, ScrollView, StyleSheet, Text, Alert } from 'react-native';
import { Avatar, PricingCard, Icon } from 'react-native-elements';
import { Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import accompanist from './../../../api/accompanist';

const ACCOMPAGNIST_INFO = {
    id: 2,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    firstName: 'iliass',
    lastName: 'Marchoud',
    place: 'Meaux',
    price: 13
};

class MapInfoScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infos: []
        };
        this.accompanist = this.props.navigation.state.params;
    }

    getAccompagnistInfo() {

    }

    componentWillMount() {
        accompanist.info(this.accompanist.id).then(res => this.setState({infos: res}));
    }

    render() {
        return(
            <ScrollView>
                <View style={styles.headerContainer}>
                    <Avatar
                        large
                        rounded
                        source={{uri: ACCOMPAGNIST_INFO.avatar}}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />
                </View>
                <View>
                    <PricingCard
                        color='#d81b60'
                        title={this.state.infos.firstname + ' ' + this.state.infos.lastname}
                        price={this.state.infos.price+' €'}
                        info={[
                            'Lieu : '+this.state.infos.city
                        ]}
                        button={{ title: 'Voir son profil', Icon: 'person' }}
                        onButtonPress={() => this.props.navigation.navigate('Profile', this.state.infos)}
                    />
                </View>
                <Button full
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('RequestCourse', this.state.infos.id)}>
                    <Text style={styles.buttonText}>Faire une demande de cours</Text>
                </Button>
            </ScrollView>
        )
    }
}

export default MapInfoScreen;

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
