import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        margin: 10,
        flex: 1,
    },
    graphContainer: {
        borderColor: "#D9D9D9",
        borderWidth: 3,
        borderRadius: 15,
        marginTop: 10,
        width: "100%",
        display: "flex",
        justifyContent: "center"
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