import { useContext } from "react";
import firebase from "../database/firebase";
import { arrayUnion, collection, doc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { AuthContext } from "../context/auth";

export const useMatch = () => {
    const [u, setU] = useContext(AuthContext)

    const getMatch = async (g) => {
        console.log("getMatch")
        const genero = g === 'Hombre' ? 'Mujer' : 'Hombre'
        console.log(genero)
        var list = []
        try {
            const q = query(collection(firebase.db, "Perfiles"), where("genero", "==", genero));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                console.log("Datos obtenidos")
                //console.log(doc.data());
                list.push(doc.data())
                //setU({ ...u, matchs: doc.data() });
            });
        } catch (error) {
            alert(error)
        }
        return list
    }
    const setMatch = async (userMacht) => {
        try {
            const user1 = {
                uid: userMacht.uid,
                chatUid: userMacht.uid + u.user.uid,
                names: userMacht.names,
                surnames: userMacht.surnames,
                urlFoto: userMacht.urlFoto
            }
            const user2 = {
                uid: u.user.uid,
                chatUid: userMacht.uid + u.user.uid,
                names: u.user.names,
                surnames: u.user.surnames,
                urlFoto: u.user.urlFoto
            }
            console.log(user1)
            console.log(user2)
            await updateDoc(doc(firebase.db, "Perfiles", u.user.uid), {
                chats: arrayUnion(user1)
            })
            await updateDoc(doc(firebase.db, "Perfiles", userMacht.uid), {
                chats: arrayUnion(user2)
            })
        } catch (error) {
            alert(error)
        }
    }
    const getChats = async () => {
        try {
            const q = query(collection(firebase.db, "Perfiles"), where("uid", "==", u.user.uid));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                console.log("Datos obtenidos")
                //console.log(doc.data());
                //list.push(doc.data())
                setU({ ...u, user: doc.data() });
            });
        } catch (error) {
            alert(error)
        }
    }
    return {
        getMatch,
        setMatch,
        getChats
    }
}