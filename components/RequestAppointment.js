import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import DropDown, { Select, Option, OptionList, } from 'react-native-selectme';

class RequestAppointment extends React.Component {
    constructor(props) {
        super(props);

        this.accompagnist = this.props.navigation.state.params;

        this.state = {
          date: '',
          time: ''
        };
    }

    _getOptionListDate() {
      return this.refs['OPTIONLIST'];
    }

    _getOptionListTime() {
      return this.refs['OPTIONLIST2'];
    }

    _date(date) {
    this.setState({
        ...this.state,
        date: date
      });
    }

    _time(time) {
    this.setState({
        ...this.state,
        time: time
      });
    }




    createAppointment() {
        // request to API : send data

        // success
        Alert.alert(
            'Demande de cours',
            'Votre demande de cours a bien été enregistrer. Merci de patienter, votre accompagnateur vous contactera',
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
            <View>
                <Text>Faire une demande de cours (mettre le formulaire)</Text>
                <Text>ID de l'accmpagnateur : {this.accompagnist.id}</Text>
                <Select
                  width={250}
                  ref="SELECT1"
                  optionListRef={this._getOptionListDate.bind(this)}
                  defaultValue="Select a date"
                  onSelect={this._date.bind(this)}>
                  <Option>{'2017-01-02'}</Option>
                  <Option>{'2017-01-03'}</Option>
                  <Option>{'2017-01-04'}</Option>
                  <Option>{'2017-01-05'}</Option>
                </Select>

                <Text>Selected date: {this.state.date}</Text>

                <Select
                  width={250}
                  ref="SELECT2"
                  optionListRef={this._getOptionListTime.bind(this)}
                  defaultValue="Select a date"
                  onSelect={this._time.bind(this)}>
                  <Option>{'12:00 à 13:00'}</Option>
                  <Option>{'14:00 à 15:00'}</Option>
                  <Option>{'15:00 à 16:OO'}</Option>
                  <Option>{'17:00 à 18:00'}</Option>
                </Select>

                <Text>Selected time: {this.state.time}</Text>

                <OptionList ref="OPTIONLIST"/>
                <OptionList ref="OPTIONLIST2"/>
                <Button
                    title="Faire ma demande"
                    onPress={() => this.createAppointment()}>

                </Button>
            </View>
        )
    }
}

export default RequestAppointment;
