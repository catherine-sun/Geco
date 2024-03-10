import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        width: "80%",
        margin: 10
    },
    graphContainer: {
        backgroundColor: "#D9D9D9",
        maxWidth: 400,
        borderRadius: 15,
        marginTop: 10,

    },
    noDataContainer: {
        backgroundColor: "#D9D9D9",
        padding: 20,
        borderRadius: 15,
        marginTop: 10,
    },
    noDataContainerText: {
        fontWeight: "bold",
        color: "grey",
    }
})

export default styles;