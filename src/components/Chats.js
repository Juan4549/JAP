import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card, IconButton } from "react-native-paper";
import { AuthContext } from "../context/auth";

const ChatsComponent = ({ route }) => {
    const [u, setU] = useContext(AuthContext)
    const List = u.matchs.map(element =>
        < Card key={element.uid}>
            <Card.Title
                titleStyle={styles.textTitulo}
                title={element.names + ' ' + element.surnames}
                left={() => <Image
                    style={styles.avatar}
                    source={{
                        uri: element.urlFoto,
                    }}
                />
                }
                right={() => <IconButton icon="send" onPress={() => {
                    console.log('Abre Char'),
                        route.props.navigation.push('Chat', {
                            itemId: Math.floor(Math.random() * 100),
                        })
                }} />}
            />
        </Card >
    )
    return (
        <View
            style={styles.conteiner}>
            {List}
        </View>
    )
};
export const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        margin: 15,
    },
    conteinerChip: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15,
        flexWrap: "wrap",
    },
    divider: {
        borderWidth: 0.7
    },
    textTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textSubTitulo: {
        fontSize: 15,
    },
    textDescip: {
        fontSize: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    avatar: {
        width: 45,
        height: 45,
    }
})
export default ChatsComponent