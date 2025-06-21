import { StyleSheet } from "react-native";

export default StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#111",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        backgroundColor: "#fff",
        paddingInline: 20,
        paddingBlock: 40,
        alignItems: "center",
        borderRadius: 20,
        gap: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    input: {
        width: 200,
        backgroundColor: "#eee",
        borderRadius: 5,
    },
    mensaje: {
        color: "red",
    },
});
