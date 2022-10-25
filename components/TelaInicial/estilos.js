import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#2c2e2d',
    },
    img:{
        width: 90,
        height: 100,
        borderRadius: 50,
    },
    titulo:{
        color: 'darkgreen',
        fontSize: 30,
        borderStyle: "dotted",
        fontWeight: "bold",
    },
    descricao: {
        color: '#9b9f9d',
        margin: 30,
    },
    card: {
        width: 250,
        alignItems: "center",
        backgroundColor: '#107c0f',
        flexDirection: 'row',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    cardImg: {
        width: 100,
        height: 90,
    },
    cardTexto: {
        color: 'white',
    },
});

export default estilos;