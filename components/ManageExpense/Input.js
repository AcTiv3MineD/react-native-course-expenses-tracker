import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({label, textInputConfig}) {
    let inputStyles = [styles.input];

    if(textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.multilineInput);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig} />
        </View>
    );
}

export default Input;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 4,
        marginVertical: 8,
    },

    label: {
        marginBottom: 4,
        fontSize: 14,
        color: GlobalStyles.colors.primary100,
    },

    input: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        backgroundColor: GlobalStyles.colors.primary50,
        fontSize: 16,
        color: GlobalStyles.colors.primary800,
    },

    multilineInput: {
        minHeight: 100,
        textAlignVertical: 'top',
    },
});