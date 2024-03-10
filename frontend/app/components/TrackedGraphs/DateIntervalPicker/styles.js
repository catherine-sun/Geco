import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    selectors: {
        display: "flex",
        flexDirection: "row",
        marginRight: -5
    },
    btn: {
        fontSize: 16,
        color: "grey",
        fontWeight: "bold",
    },
    btnDate: {
        borderBottomWidth: 1,
        color: "grey",
        marginRight: 5,
        marginLeft: 5,
    },
    header: {
        fontSize: 18,
        paddingRight: 20,
        color: "grey",
        fontWeight: "bold",
    },
    picker: {
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        bottom: "10px"
    },
    pickerView: {
        backgroundColor: "white",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        bottom: 0,
        height: 400
    },
    pickerHeader: {
        fontWeight: "600"
    }
})

export default styles;