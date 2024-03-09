import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        display: "flex",
        flexDirection: "column"
    },
    selectors: {
        display: "flex",
        flexDirection: "row"
    },
    btn: {
        fontSize: 16,
        paddingRight: 20,
    },
    picker: {
        maxWidth: 400,
        display: "flex",
        alignItems: "center"
    },
    pickerHeader: {
        fontWeight: 600
    }
})

export default styles;