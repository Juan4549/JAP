import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Card, IconButton } from "react-native-paper";
import { AuthContext } from "../context/auth";
import firebase from "../database/firebase";
import { useMatch } from "../hooks/useMatch";

const ChatsComponent = ({ route }) => {
    const [u, setU] = useContext(AuthContext)
    const { getMatch, setMatch,getChats } = useMatch();
    const List = u.user?.chats?.map(element =>
        < Card key={element.uid}>
            {console.log(u.chats)}
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
                            chatUid:element.chatUid
                        })
                }} />}
            />
        </Card >
    )
    return (
        <View
            style={styles.conteiner}>
                {console.log(u.user.chats)}
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
        borderRadius: 45,
    }
})
export default ChatsComponent