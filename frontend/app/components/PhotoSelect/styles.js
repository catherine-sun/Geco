import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    imageContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#D9D9D9",
        margin: 10
    },
    photoButton: {
        backgroundColor: "#80ccff",
        display: "flex",
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
        borderRadius: 10,
        height: 70,
        margin: 10,
        borderStyle: "solid",
        borderColor: "#004d80",
        borderWidth: 0
    },
    photoButtonText: {
        color: "#004d80",
        fontWeight: "bold",
        fontSize: 20
    },
    photoButtonIcon: {
        marginLeft: 10,
        marginRight: 20
    },
    submitButton: {
        backgroundColor: "#6ce06c",
        display: "flex",
        flexDirection: "row",
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 10,
        height: 70,
        margin: 10,
    },
    submitButtonText: {
        color: "#006633",
        fontWeight: "bold",
        fontSize: 20
    },
    submitButtonIcon: {
        color: "#006633"
    }
});

export default styles;