import React from 'react';
import { ScrollView, View, StyleSheet, Alert, RefreshControl } from 'react-native';
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
import { Container, Header, Content, Card, CardItem, Body, Text, Button, Icon, List, ListItem } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Moment from 'moment';

import accompanist from './../../../api/accompanist';

LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.']
};

LocaleConfig.defaultLocale = 'fr';

export default class PlanningListScreen extends React.Component {
    static navigationOptions = ({ navigation }) =>  ({
        title: 'Planning Header',
        headerRight: <Button transparent onPress={() => navigation.navigate('PlanningForm', {type: 'new'})}><Text>Ajouter</Text></Button>
    });

    constructor(props) {
        super(props);
        this.state = {
            items: {},
            schedules: [],
            isRefreshing: false
        };
        this.currentDate = new Date();
        console.log(this.currentDate.toLocaleString());
    }

    refreshList() {
        this.setState({isRefreshing: true});
        this.getSchedules();
    }

    getSchedules() {
        accompanist.getSchedule().then(response => {
            this.setState({schedules: response});
            this.setState({isRefreshing: false});
        });
    }

    componentWillMount() {
        console.log('-------------------------------------------------');
        this.getSchedules();
    }

    goTotest() {
        this.props.navigation.navigate('PlanningForm');
    }

    deleteAlert(hour) {
        Alert.alert(
            'Supprimer un créneau',
            'Êtes vous sûr de vouloir supprimer ce créneau ?',
            [
                {text: 'Non', style: 'cancel'},
                {text: 'Oui', onPress: () => this.deletePlanning(hour)},
            ],
            { cancelable: false }
        )
    }

    deletePlanning(hour) {
        fetch(apiUrl+'/accompanist/schedule/'+hour.id+'/delete', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            response.json()
        })
        .then(response => {
            alert('Le créneau a été supprimé avec succès');
        })
        .catch(error => {
            alert('Une erreur est survenue. Veuillez réessayer ultérieurement');
        });
    }

    getCurrentDate() {
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();

        return year + '-' + month + '-' + date;
    }

    render() {
        return(
            <Content refreshControl={
                <RefreshControl refreshing={this.state.isRefreshing}
                                onRefresh={this.refreshList.bind(this)}
                />}>
                <List>
                    {this.state.schedules.map((schedule, key) => (
                        <ListItem avatar key={schedule.id} onPress={() => this.props.navigation.navigate('PlanningForm', {type: 'edit', object: schedule})}>
                            <Body>
                            <Text>{Moment(schedule.date).format('DD/MM/YYYY')}</Text>
                            <Text note>Heure de début : {schedule.startTime}</Text>
                            <Text note>Heure de fin : {schedule.endTime}</Text>
                            </Body>
                            {/*<Right>
                                <Text note>{course.startTime + ' - ' + course.endTime}</Text>
                            </Right>*/}
                        </ListItem>
                    ))}
                </List>
            </Content>
        )
    }

    renderItem(item) {
      return (
        <View style={[styles.item, {height: item.height}]}>
            <Text>
              {item.startTime + ' - ' + item.endTime}
            </Text>
            <Grid>
                <Col>
                    <Button transparent info onPress={() => this.props.navigation.navigate('PlanningForm', {type: 'edit', object: item})}>
                        <Text>Editer</Text>
                    </Button>
                </Col>
                <Col>
                    <Button transparent onPress={() => this.deleteAlert(item)}>
                        <Text style={{color: 'red'}}>Supprimer</Text>
                    </Button>
                </Col>
            </Grid>
        </View>
      );
    }

    renderEmptyDate() {
      // return (
      //   <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
      // );
    }

    rowHasChanged(r1, r2) {
      return r1.name !== r2.name;
    }

    timeToString(time) {
      const date = new Date(time);
      return date.toISOString().split('T')[0];
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
      backgroundColor: 'white',
      flex: 1,
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      marginTop: 17
    },
});
