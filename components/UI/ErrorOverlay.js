import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function LoadingOverlay({message}) {
    return (
        <View style={styles.containter}>
            <Text style={[styles.title, styles.text]}>An error ocurred!</Text>
            <Text style={styles.text}>{message}</Text>
        </View>
    );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});