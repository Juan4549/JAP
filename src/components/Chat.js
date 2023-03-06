import React, {
    useState,
    useLayoutEffect,
    useCallback,
    useContext
} from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import {
    collection,
    addDoc,
    orderBy,
    query,
    onSnapshot
} from 'firebase/firestore';
import firebase from '../database/firebase';
import { AuthContext } from '../context/auth';
const ChatComponent = ({ route }) => {
    const [messages, setMessages] = useState([]);
    const [u, setU] = useContext(AuthContext);
    const { chatUid } = route.params;
    useLayoutEffect(() => {

        const collectionRef = collection(firebase.db, 'chat'+chatUid);
        const q = query(collectionRef, orderBy('createdAt', 'desc'));

        const unsubscribe = onSnapshot(q, querySnapshot => {
            console.log('querySnapshot unsusbscribe');
            setMessages(
                querySnapshot.docs.map(doc => ({
                    _id: doc.data()._id,
                    createdAt: doc.data().createdAt.toDate(),
                    text: doc.data().text,
                    user: doc.data().user
                }))
            );
        });
        return unsubscribe;
    }, []);
    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages)
        );
        // setMessages([...messages, ...messages]);
        const { _id, createdAt, text, user } = messages[0];
        addDoc(collection(firebase.db, 'chat'+chatUid), {
            _id,
            createdAt,
            text,
            user
        });
    }, []);
    return (
        <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={false}
            showUserAvatar={false}
            onSend={messages => onSend(messages)}
            messagesContainerStyle={{
                backgroundColor: '#fff'
            }}
            textInputStyle={{
                backgroundColor: '#fff',
                borderRadius: 20,
            }}
            user={{
                _id: u.user.uid,
                avatar: u.user.foto
            }}
        />
    )
};

export default ChatComponent