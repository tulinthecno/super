
import { auth, db, storage } from "../firebase";
import { deleteDoc, getDocs, doc , serverTimestamp , setDoc , query , collection , where , onSnapshot } from "@firebase/firestore";
import { ref, deleteObject } from "firebase/storage";

export const CollectionData=async({collectionName})=>{
    console.log('Collection Name', collectionName)
    const data =[]
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
    
        querySnapshot.forEach((doc) => {
          data.push({
            id: doc.id,
          
            ...doc.data()
          
          });
        });
      } catch (error) {
        console.error(error);
      }
    
     return data
    
    
    }
    