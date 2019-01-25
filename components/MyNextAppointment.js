import React from 'react';
import { View, Text, FlatList, StyleSheet} from 'react-native';

class MyNextAppointment extends React.Component {
    render() {
        return(
            <View>
                <Text>Mes prochain cours</Text>
                <FlatList
                    data={[
                        {key: 0, name: 'Devin', date: '2017-01-02', startTime: '00:00', endTime: '12:00' },
                        {key: 1, name: 'Jackson', date: '2017-01-02', startTime: '00:00', endTime: '12:00'},
                        {key: 2, name: 'James', date: '2017-01-02', startTime: '00:00', endTime: '12:00'},
                        {key: 3, name: 'Joel', date: '2017-01-02', startTime: '00:00', endTime: '12:00'},
                        {key: 4, name: 'John', date: '2017-01-02', startTime: '00:00', endTime: '12:00'},
                        {key: 5, name: 'Jillian', date: '2017-01-02', startTime: '00:00', endTime: '12:00'},
                        {key: 6, name: 'Jimmy', date: '2017-01-02', startTime: '00:00', endTime: '12:00'},
                        {key: 7, name: 'Julie', date: '2017-01-02', startTime: '00:00', endTime: '12:00'},
                    ]}
                    renderItem={({item}) =>
                        <View style={styles.item}
                              >
                            <Text onPress={() => this.props.navigation.navigate('InfoAppointment', item)}>{item.name}</Text>
                            <Text onPress={() => this.props.navigation.navigate('InfoAppointment', item)}>{item.date} - {item.startTime} - {item.endTime}</Text>
                        </View>
                    }
                />
            </View>
        );
    }
}

export default MyNextAppointment;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 10,
        height: 44,
    },
});
