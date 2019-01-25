import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

class AccompagnistsLocalisationList extends React.Component {
    constructor(props) {
        super(props);
        this.localisation = this.props.navigation.state.params;
    }


    goToProfile(accompagnist) {
        this.props.navigation.navigate('AccompagnistProfile', accompagnist);
    }

    render() {
        console.log(this.localisation);
        return (
            <FlatList
                data={[
                    {key: 'Devin', id: 1},
                    {key: 'Jackson', id: 2},
                    {key: 'James', id: 3},
                    {key: 'Joel', id: 4},
                    {key: 'John', id: 5},
                    {key: 'Jillian', id: 10},
                    {key: 'Jimmy', id: 20},
                    {key: 'Julie', id: 25},
                ]}
                renderItem={({item}) =>
                    <Text style={styles.item}
                          onPress={() => this.goToProfile(item)}
                    >{item.key}</Text>
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default AccompagnistsLocalisationList;