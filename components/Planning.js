import React from 'react';
import { View, Text, Button, StyleSheet, Alert, SectionList, TouchableHighlight, FlatList } from 'react-native';
import ActionButton from 'react-native-action-button';

class Planning extends React.Component {

    goToAddPlanning() {
        console.log('Redirect');
        this.props.navigation.navigate('AddPlanning');
    }

    goToEditDeletePlanning(planning) {
        this.props.navigation.navigate('AddPlanning', planning);
    }

    render() {
        return(
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 0, date: '2017-01-01', startTime: '10H00', endTime: '11H00'},
                        {key: 1, date: '2017-01-01', startTime: '10H00', endTime: '11H00'},
                        {key: 2, date: '2017-01-01', startTime: '10H00', endTime: '11H00'},
                        {key: 3, date: '2017-01-01', startTime: '10H00', endTime: '11H00'},
                        {key: 4, date: '2017-01-01', startTime: '10H00', endTime: '11H00'},
                        {key: 5, date: '2017-01-01', startTime: '10H00', endTime: '11H00'},
                        {key: 6, date: '2017-01-01', startTime: '10H00', endTime: '11H00'},
                        {key: 7, date: '2017-01-01', startTime: '10H00', endTime: '11H00'},
                        {key: 8, date: '2017-01-01', startTime: '10H00', endTime: '11H00'},
                    ]}
                    renderItem={({item}) =>
                        <Text style={styles.item}
                              onPress={() => this.goToEditDeletePlanning(item)}
                        >{item.date} - {item.startTime} - {item.endTime}</Text>
                    }
                />
                <ActionButton
                    buttonColor="rgba(231,76,60,1)"
                    onPress={() => this.goToAddPlanning()}
                />
            </View>
        )
    }
}

export default Planning;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    addButton: {
        backgroundColor: '#ff5722',
        borderColor: '#ff5722',
        borderWidth: 1,
        height: 100,
        width: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        right:20,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    }
});