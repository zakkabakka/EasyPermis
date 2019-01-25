import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import DatePicker from 'react-native-datepicker';

class AddPlanning extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: '2017-01-01',
            startTime: '00:00',
            endTime: '00:00'
        };
        this.edit  = false;
        if (this.props.navigation.state.params != null) {
            this.state = this.props.navigation.state.params;
            this.edit = true;
        }
    }

    savePlanning() {
        console.log(this.state);
    }

    deletePanning() {
        console.log('remove');
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Ajouter une heure de conduite </Text>
                <DatePicker
                    date = {this.state.date}
                    style={{width: 200}}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    confirmBtnText="OK"
                    cancelBtnText="Annuler"
                    onDateChange={(date) => {this.setState({date: date})}}
                />
                <DatePicker
                    date = {this.state.startTime}
                    style={{width: 200}}
                    mode="time"
                    placeholder="select start time"
                    format="HH:mm"
                    confirmBtnText="OK"
                    cancelBtnText="Annuler"
                    onDateChange={(time) => {this.setState({startTime: time})}}
                />
                <DatePicker
                    date = {this.state.endTime}
                    style={{width: 200}}
                    mode="time"
                    placeholder="select end time"
                    format="HH:mm"
                    confirmBtnText="OK"
                    cancelBtnText="Annuler"
                    onDateChange={(time) => {this.setState({endTime: time})}}
                />
                <Button onPress={() => this.savePlanning()} title="Save" />
                {this.edit == true &&
                    <Button onPress={() => this.deletePanning()} title="Supprimer" />
                }
            </View>
        )
    }
}

export default AddPlanning

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});