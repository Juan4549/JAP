import React, { useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Card, Chip, Divider, Text } from "react-native-paper";
import { AuthContext } from "../context/auth";
import firebase from "../database/firebase";
import { useMatch } from "../hooks/useMatch";

const MatchComponent = ({ route }) => {
    const [u, setU] = useContext(AuthContext)
    const { getMatch, setMatch, getChats, getNotMatch, updateMatch } = useMatch();
    const List = u.matchs?.map(element =>
        <View
            style={styles.conteinerCardStyle}
            key={element.uid}>
            < Card>
                <Card.Title
                    titleStyle={styles.textTitulo}
                    subtitleStyle={styles.textSubTitulo}
                    title={element.nombres + ' ' + element.apellidos}
                    subtitle={'Edad: ' + element.edad} />
                <Card.Cover
                    source={{ uri: element.foto }} />
                <Card.Content>
                    <Text
                        style={styles.textDescip}
                    >{element.descripcion}</Text>
                    <Divider
                        style={styles.divider}
                    />
                    <Text
                        style={styles.textTitulo}
                    >Le gusta: </Text>
                    <View
                        style={styles.conteinerChip}>
                        {
                            Object.keys(element.intereses).map(e => {
                                if (element.intereses[e] === true) {
                                    return <Chip key={Math.random().toString() + 'C1H1p'} style={styles.chip}>{e}</Chip>
                                }
                            }
                            )
                        }
                    </View>
                    <Divider
                        style={styles.divider}
                    />
                </Card.Content>
                <Card.Actions>
                    <Button
                        onPress={() => {
                            getNotMatch(element)
                            updateMatch(u.user)
                            route.props.navigation.navigate('Conoce a tu alma gemela 😉')
                            alert("Le diste me no gusta a "+ element.names)
                        }}>No, Gracias 👎</Button>
                    <Button
                        onPress={() => {
                            setMatch(element)
                            getChats()
                            alert("Le diste me gusta a "+ element.names)
                            //route.props.navigation.navigate('Chats')
                        }}
                    >Me Gusta ❤</Button>
                </Card.Actions>
            </Card >
        </View>
    )
    return (
        <View
            style={styles.conteiner}>
            {console.log(u.matchs)}
            <ScrollView>
                {console.log(List.length)}
                {List.length === 0 ?
                    <View
                        style={styles.conteiner}>
                        <Text
                            style={styles.textTitulo}>Eso es todo por hoy 😈</Text>
                    </View>
                    :
                    List}
            </ScrollView>
        </View>
    )
};
export const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        margin: 15,
        alignItems: 'center',
    },
    conteinerCard: {
        marginBottom: 15,
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
        color: '#746AA9',
        fontFamily: 'fantasy',
        fontSize: 20,
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
    chip: {
        marginHorizontal: 5
    }
})
export default MatchComponent