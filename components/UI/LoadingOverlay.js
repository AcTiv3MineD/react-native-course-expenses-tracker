import { ActivityIndicator, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function LoadingOverlay() {
    return (
        <View style={styles.containter}>
            <ActivityIndicator size="large" color="white" />
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
});