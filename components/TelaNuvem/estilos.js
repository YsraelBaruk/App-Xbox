import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    titulo: {
        fontSize: 30,
        padding: 20,
        color: "green",
        fontWeight: "500",
    },
    subtitulo: {
        fontSize: 15,
        padding: 20,
        color: "white",
        fontWeight: "400",
    },
    paragrafo: {
        fontSize: 15,
        padding: 20,
        color: "white",
    },
    img: {
        width: 250,
        height: 150,
    },
});

export default estilos;