import { useContext } from "react";
import firebase from "../database/firebase";
import { arrayUnion, collection, doc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { AuthContext } from "../context/auth";

export const useMatch = () => {
    const [u, setU] = useContext(AuthContext)

    const getMatch = async (g, dataUser) => {
        console.log("getMatch")
        const genero = g === 'Hombre' ? 'Mujer' : 'Hombre'
        console.log(genero)
        var list = []
        try {
            const q = query(collection(firebase.db, "Perfiles"), where("genero", "==", genero));
            const querySnapshot = await getDocs(q);

            if (dataUser.notLike.length !== 0 || dataUser.chats.length !== 0) {
                querySnapshot.forEach((doc) => {
                    console.log(dataUser.notLike)
                    console.log(dataUser.likes)
                    if (!dataUser.notLike.includes(doc.data().uid)) {
                        if (!dataUser.likes.includes(doc.data().uid)) {
                            console.log("Like escluidos ")
                            console.log(doc.data())
                            list.push(doc.data())
                            return
                        }
                    }
                })
                return list
            }

            querySnapshot.forEach((doc) => {
                console.log("guardo todo los matchs posibles")
                list.push(doc.data())
            })
        } catch (error) {
            alert(error)
        }
        return list
    }
    const getNotMatch = async (userMacht) => {
        console.log("no me gusta" + userMacht.names)
        try {
            await updateDoc(doc(firebase.db, "Perfiles", u.user.uid), {
                notLike: arrayUnion(userMacht.uid)
            })
            await updateDoc(doc(firebase.db, "Perfiles", userMacht.uid), {
                notLike: arrayUnion(u.user.uid)
            })

        } catch (error) {
            console.log(error)
        }
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
                chats: arrayUnion(user1),
                likes: arrayUnion(userMacht.uid)
            })
            await updateDoc(doc(firebase.db, "Perfiles", userMacht.uid), {
                chats: arrayUnion(user2),
                likes: arrayUnion(u.user.uid)
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
    const updateMatch = async (data) => {
        console.log("updateMatch")
        const genero = data.genero === 'Hombre' ? 'Mujer' : 'Hombre'
        var list = []
        try {
            const q = query(collection(firebase.db, "Perfiles"), where("genero", "==", genero));
            const querySnapshot = await getDocs(q);

            if (data.notLike.length !== 0 || data.chats.length !== 0) {
                querySnapshot.forEach((doc) => {
                    console.log(data.notLike)
                    console.log(data.likes)
                    if (!data.notLike.includes(doc.data().uid)) {
                        if (!data.likes.includes(doc.data().uid)) {
                            console.log("Like escluidos ")
                            console.log(doc.data())
                            list.push(doc.data())
                            return
                        }
                    }
                })
                setU({...u,matchs:list})
                return
            }

            querySnapshot.forEach((doc) => {
                console.log("guardo todo los matchs posibles")
                list.push(doc.data())
            })
            setU({...u,matchs:list})
        } catch (error) {
            alert(error)
        }
    }
    return {
        getMatch,
        setMatch,
        getChats,
        getNotMatch,
        updateMatch
    }
}