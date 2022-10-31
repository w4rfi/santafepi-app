import { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where } from "firebase/firestore";




const db = () => getFirestore();

    export const FilterId = (id) =>{
    const data = doc(db, "zonas", id);
    getDoc(data)
} 

    export const FilterSex = (zona='', sexo='') => {
        const data = query(collection(db, "zonas"), where("categoryId", "==", sexo));
        getDocs(data)
    }

    export const AddOrder = (order) => {
        
        const ordersCollections = collection(db(), "orders");
        addDoc(ordersCollections, order);
        
    }