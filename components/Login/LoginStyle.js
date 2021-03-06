import { StyleSheet } from 'react-native';

export const LoginStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d81b60'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 200,
        height: 200
    },
    title: {
        color: '#FFF',
        width: 200,
        marginTop:10,
        textAlign: 'center',
        opacity: 0.9
    },
    input: {
        height: 40,
        backgroundColor: '#f8bbd0',
        marginBottom: 10,
        paddingHorizontal: 10
    },
    formContainer: {
        padding: 20
    },
    buttonContainer: {
        backgroundColor: '#ec407a',
        paddingVertical: 15,
        marginBottom: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF'
    }
});