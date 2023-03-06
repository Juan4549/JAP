import React, { useContext, useState } from "react";
import { ActivityIndicator, Avatar, Button, Chip, Text } from "react-native-paper";
import { Image, StyleSheet, View, } from 'react-native';
import { getAuth, signOut } from "firebase/auth";
import { AuthContext } from "../context/auth";
import firebase from "../database/firebase";

const Perfil = ({ route }) => {
    const [u, setU] = useContext(AuthContext)
    return (
        <View
            style={styles.conteiner}>
            <Image
                style={styles.avatar}
                source={{
                    uri: u.user.foto,
                }}
            />
            <Text>Hola {u.user?.nombres + ' ' + u.user?.apellidos}</Text>
            <Text>Tus intereses:</Text>
            <View
                style={styles.containerChip}>
                {
                    Object.keys(u.user?.intereses).map(e => {
                        if (u.user.intereses[e] === true) {
                            return <Chip key={e} style={styles.chip}>{e}</Chip>
                        }
                    }
                    )
                }
            </View>
            <Button
                icon="door-closed"
                onPress={() => {
                    try {
                        console.log(u);
                        signOut(getAuth(firebase.app));
                        setU({
                            user: null,
                            auth: null,
                            matchs: [],
                        })
                    } catch (error) {
                        console.error(error);
                    }
                }}
            >Cerrar sessión</Button>
        </View>



    )
};

export const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerChip: {
        flexDirection: 'row',
        marginBottom: 15,
        flexWrap: "wrap",
    },
    text:{

    },
    chip: {
        margin: 3,
        marginTop: 5,
    },
    avatar: {
        width: 250,
        height: 250,
        borderRadius:45,
        marginBottom:50
    }
})
export default Perfil