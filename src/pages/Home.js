import React, { useEffect } from "react";
import { BottomNavigation } from "react-native-paper";
import { View } from "react-native";
import ChatsComponent from "../components/Chats";
import MatchComponent from "../components/Matchs";
import Perfil from "../components/Perfil";
import { useMatch } from "../hooks/useMatch";

const HomePage = (props) => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'matchs', title: 'Intereses', focusedIcon: 'heart', unfocusedIcon: 'heart-outline',props: props },
        { key: 'chats', title: 'Conversaciones', focusedIcon: 'chat', props: props },
        { key: 'perfil', title: 'Perfil', focusedIcon: 'account', props: props },
    ]);
    const renderScene = BottomNavigation.SceneMap({
        matchs: MatchComponent,
        chats: ChatsComponent,
        perfil: Perfil,
    });
    return (
        < BottomNavigation
            navigationState={{ index, routes }
            }
            onIndexChange={setIndex}
            renderScene={renderScene}
        />


    )
};

export default HomePage