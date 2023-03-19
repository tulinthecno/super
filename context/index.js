import { auth, db, storage } from "../firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { deleteDoc, getDocs, doc , serverTimestamp , setDoc , query , collection , where , onSnapshot } from "@firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import { toast } from "react-toastify";
import slugify from 'slugify'
export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [alert, setAlert] = useState({
    isShow: false,
    duration: 3000,
    message: "",
    type: "",
  });
  const [pageLoading, setPageLoading] = useState(true);
  const [Loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const [userInfo,     setUserInfo] = useState([])

  const signInUser = async (email, password, name) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      const profile = {
        displayName: name,
        admin: false,
     
      };
      console.log("profile------>>>", profile);

      await updateProfile(auth.currentUser, profile)
        .then(() => {})
        .then((error) => console.error("ERROR_____-----___", error));


    


      setAlert({
        isShow: true,
        duration: 3000,
        message: "Successfully logged in",
        type: "success",
      });
    } catch (error) {
      console.log(error);
      setAlert({
        isShow: true,
        duration: 3000,
        message: error.response?.data?.message || error.message,
        type: "error",
      });
    }
  };


  // ---------Register------

  const signUpUser = async (email, password, name) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      // if (!auth.currentUser) return;

console.log('email: ' + email)


      const profile = {
        displayName: name,
        admin: false,
        photoURL:
        'https://images.unsplash.com/photo-1614281325348-7423b62aeb7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1biUyMGZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
      };
      console.log("profile------>>>", profile);

      await updateProfile(auth.currentUser, profile)
        .then(() => {})
        .then((error) => console.error("ERROR_____-----___", error));


        await setDoc(doc(db, 'users', auth.currentUser.uid), {
          name: name,
          email: email,
          password: password,
          username: slugify(name, { lower: true }),
          avatar:
            'https://images.unsplash.com/photo-1614281325348-7423b62aeb7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1biUyMGZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          status: 'active',
          role: 'admin',
          createdAt: serverTimestamp(),
        })







      setAlert({
        isShow: true,
        duration: 3000,
        message: "Successfully logged in",
        type: "success",
      });
    } catch (error) {
      console.log(error);
      setAlert({
        isShow: true,
        duration: 3000,
        message: error.response?.data?.message || error.message,
        type: "error",
      });
    }
  };

  const logout = () => {
    return signOut(auth);
  };



// -----------USER DATA-----

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);

      if (user) {
        const docRef = query(collection(db, 'users'), where('email', '==', user.email))
        onSnapshot(docRef, (snapshot) => {
          snapshot.forEach((doc) => {
            setUserInfo({
              ...user,
              ...doc.data(),
            })
            console.log('userINFO ---->' + userInfo)
          })
        })
      }



      console.log("user is unsubscribed", user);
      setPageLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleDelete = async (collectionName,docData) => {
    try {
      setLoading(true);

      console.log("blog object CLICKEDDDDD", docData);

      await deleteDoc(doc(db, collectionName, docData.id));


if (collectionName === 'products'){

      docData.image.forEach(async (img) => {
        console.log("image is Name:🔷️🔶️🔷️🔶️ " + img);

        const desertRef = ref(storage, `images/${img?.name}`);
        await deleteObject(desertRef);
        toast.success(`${collectionName} images Deleted  successfully`);
      });
    }
    else {

      const desertRef = ref(storage, `${collectionName}/${docData?.image?.name}`);
      await deleteObject(desertRef);
      toast.success(`${collectionName} image Deleted  successfully`);


    }



      console.log("Document successfully deleted!");
      toast.success(`${collectionName} deleted successfully`);
      window.location.reload();
    } catch (error) {
      console.error("Error removing document: ", error);
      toast.error({ message: error });

      setLoading(false);
    }
  };

  //   const UseDeleteImg = async (photos) => {

  //     try {
  //         await deleteDoc(doc(projectFirestore, "images", photo.id));

  //         const desertRef = ref(storage, `images/${photo.name}`);
  //         await deleteObject(desertRef);

  //         setLoading(true)
  //         console.log("deleted")
  //     } catch (error) {
  //         console.log(error);
  //         setsuccess(false)
  //     }

  // }

  return (
    <StateContext.Provider
      value={{
        alert,
        setAlert,
        user,
        pageLoading,
        signInUser,
        logout,
        handleDelete,
        signUpUser,
        userInfo ,
        Loading,
        setLoading,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
