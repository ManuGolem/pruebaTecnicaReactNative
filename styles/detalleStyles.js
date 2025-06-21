import { StyleSheet } from "react-native";

export default StyleSheet.create({
    page: {
        backgroundColor: "#eee",
        padding: 20,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },
    item: {
        backgroundColor: "#fff",
        padding: 20,
        alignItems: "center",
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    precio: {
        fontSize: 22,
        fontWeight: "bold",
        color: "red",
    },
    description: {
        fontSize: 16,
        backgroundColor: "#ddd",
        borderRadius: 10,
        padding: 10,
    },
    image: {
        width: 300,
        height: 300,
    },
    compra: {
        flexDirection: "row",
        gap: 10,
    },
    cantidad: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    botones: {
        backgroundColor: "#ddd",
        paddingInline: 10,
        paddingBlock: 5,
        borderRadius: 10,
    },
    carrito: {
        flexDirection: "row",
        gap: 10,
        backgroundColor: "#33bbff",
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
});
