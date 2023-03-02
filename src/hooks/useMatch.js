import { useContext } from "react";
import firebase from "../database/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { AuthContext } from "../context/auth";

export const useMatch = () => {
    const [u, setU] = useContext(AuthContext)

    const getMatch = async (g) => {
        console.log("getMatch")
        const genero = g === 'Hombre' ? 'Mujer' : 'Hombre'
        console.log(genero)
        var list=[]
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
    return {
        getMatch
    }
}