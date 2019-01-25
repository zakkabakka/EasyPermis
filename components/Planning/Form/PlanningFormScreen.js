import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Button, Text } from 'native-base';
import Moment from 'moment';

import schedule from './../../../api/schedule';

export default class PlanningFormScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            isStartTimePickerVisible: false,
            isEndTimePickerVisible: false,
            date: null,
            startTime: null,
            endTime: null,
            scheduleId: null
        };
        this.formType = this.props.navigation.state.params.type;
        this.timeParams = this.props.navigation.state.params.object;
        if (this.formType == "edit") {
            this.state.date = this.timeParams.date;
            this.state.endTime = this.timeParams.endTime;
            this.state.startTime = this.timeParams.startTime;
            this.state.scheduleId  = this.timeParams.id;
        }
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _showStartTimePicker = () => this.setState({ isStartTimePickerVisible: true });

    _hideStartTimePicker = () => this.setState({ isStartTimePickerVisible: false });

    _showEndTimePicker = () => this.setState({ isEndTimePickerVisible: true });

    _hideEndTimePicker = () => this.setState({ isEndTimePickerVisible: false });

    _handleDatePicked = (date) => {
      console.log('A date has been picked: ', date);
        date = new Date(date);
      this.setState({date: date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()});

      this._hideDateTimePicker();
    };

    _handleStartTimePicked = (time) => {
      console.log('A time has been picked: ', time);
        time = new Date(time);
      this.setState({startTime: time.getHours()+":"+time.getMinutes()});
      this._hideStartTimePicker();
    };

    _handleEndTimePicked = (time) => {
      console.log('A time has been picked: ', time);
        time = new Date(time);
        this.setState({endTime: time.getHours()+":"+time.getMinutes()});
      this._hideEndTimePicker();
    };

    savePlanning() {
        if (!this.state.date || !this.state.startTime || !this.state.endTime) {
            alert("Tous les champs sont requis");
            return 0;
        }

        let data = {
            date: this.state.date,
            startTime: this.state.startTime,
            endTime: this.state.endTime
        };

        if (this.formType == "new") {
            schedule.add(data).then(() => this.props.navigation.goBack(null));
        }
        if (this.formType == "edit") {
            schedule.update(this.state.scheduleId, data).then(() => this.props.navigation.goBack(null));
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={this._showDateTimePicker}>
                  <Text>Selectionner une date : {Moment(this.state.date).format('DD/MM/YYYY')}</Text>
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                />
                <TouchableOpacity onPress={this._showStartTimePicker}>
                  <Text>Selectionner une heure de début : {this.state.startTime}</Text>
                </TouchableOpacity>
                <DateTimePicker
                    mode="time"
                    isVisible={this.state.isStartTimePickerVisible}
                    onConfirm={this._handleStartTimePicked}
                    onCancel={this._hideStartTimePicker}
                />
                <TouchableOpacity onPress={this._showEndTimePicker}>
                  <Text>Selectionner une heure de fin : {this.state.endTime}</Text>
                </TouchableOpacity>
                <DateTimePicker
                    mode="time"
                    isVisible={this.state.isEndTimePickerVisible}
                    onConfirm={this._handleEndTimePicked}
                    onCancel={this._hideEndTimePicker}
                />
                <Button success full style={styles.button}
                        onPress={() => this.savePlanning()}>
                    <Text style={styles.buttonText}>  Enregistrer</Text>
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        margin: 15
    },
    buttonText: {
        color: 'white',
        fontSize: 15
    },
});
