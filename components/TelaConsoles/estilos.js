import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e6e6e6",
        padding: 40,
    },
    box: {
        alignItems: "center",
        margin: 80,
        marginEnd: 30,
        marginTop: 30,
    },
    img: {
        alignItems: "center",
        width: 100,
        height: 150,
    },
    titulo: {
        fontSize: 20,
        fontWeight: "700",
        color: "green",
    },
    subtitulo: {
        fontSize: 15,
        fontWeight: "700",
        color: "black",
    },
    paragrafo: {
        fontSize: 10,
    },
});

export default estilos;