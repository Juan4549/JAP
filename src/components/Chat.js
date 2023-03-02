import React from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";

const ChatComponent = ({ route }) => {
    return (
        <View>
            {console.log(route.params)}
            <Text>hola {route.params.itemId}</Text>
            <TextInput
                label="Escribe un mensaje"
                right={<TextInput.Icon icon="send" />}
            />
        </View>
    )
};

export default ChatComponent