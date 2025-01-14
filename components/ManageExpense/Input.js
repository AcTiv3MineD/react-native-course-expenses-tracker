import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({label, textInputConfig, hasError}) {
    let inputStyles = [styles.input];
    let labelStyles = [styles.label];

    if(textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.multilineInput);
    }

    if(hasError) {
        labelStyles.push(styles.errorLabel);
    }

    return (
        <View style={styles.container}>
            <Text style={labelStyles}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig} />
        </View>
    );
}

export default Input;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 4,
        marginVertical: 8,
    },

    label: {
        marginBottom: 4,
        fontSize: 14,
        color: GlobalStyles.colors.primary100,
    },

    errorLabel: {
        color: GlobalStyles.colors.error500,
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