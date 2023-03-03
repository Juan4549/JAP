import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Chip, Divider, Text } from "react-native-paper";
import { ScrollView } from "react-native-web";
import { AuthContext } from "../context/auth";
import { useMatch } from "../hooks/useMatch";

const MatchComponent = () => {
    const [u, setU] = useContext(AuthContext)
    const { getMatch, setMatch, getChats } = useMatch();
    const List = u.matchs.map(element =>
        <View
            style={styles.conteinerCardStyle}
            key={element.uid}>
            < Card>
                <Card.Title
                    titleStyle={styles.textTitulo}
                    subtitleStyle={styles.textSubTitulo}
                    title={element.names + ' ' + element.surnames}
                    subtitle={'Edad: ' + element.age} />
                <Card.Cover
                    source={{ uri: element.urlFoto }} />
                <Card.Content>
                    <Text
                        style={styles.textDescip}
                    >{element.description}</Text>
                    <Divider
                        style={styles.divider}
                    />
                    <Text
                        style={styles.text}
                    >Le gusta: </Text>
                    <View
                        style={styles.conteinerChip}>
                        {
                            Object.keys(element.preferences).map(e => {
                                if (element.preferences[e] === true) {
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
                    <Button>No, Gracias</Button>
                    <Button
                        onPress={() => {
                            setMatch(element)
                            getChats()
                        }}
                    >Me Gusta</Button>
                </Card.Actions>
            </Card >
        </View>
    )
    return (
        <View
            style={styles.conteiner}>
            <ScrollView>

                {List}
            </ScrollView>
        </View>
    )
};
export const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        margin: 15,
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
    chip: {
        marginHorizontal: 5
    }
})
export default MatchComponent