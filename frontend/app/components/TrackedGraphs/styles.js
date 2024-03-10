import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        width: "80%",
        margin: 10
    },
    graphContainer: {
        borderColor: "#D9D9D9",
        borderWidth: 3,
        borderRadius: 15,
        marginTop: 10,
        width: "100%"
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