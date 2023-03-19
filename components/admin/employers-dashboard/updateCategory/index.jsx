import React from 'react'

import PostBoxForm from '../addCategory/components/PostBoxForm'
import { useRouter } from 'next/router';


import AdminLayout from "../AdminLayout";
import { useState, useEffect, useContext } from 'react'
import { StateContext } from "../../../../context/index";
import getBlogCount from '../../../../firebase/getBlogCount'
import { db } from "../../../../firebase/index";

import { deleteField, doc, getDoc, updateDoc } from "firebase/firestore";

import { addDoc, collection } from "firebase/firestore";
import moment from "moment/moment";
import Loader from '../../../common/Loader';

export default function UpdateCategoryMain() {

    const { setAlert, user, pageLoading = true } = useContext(StateContext)
    const [image,setImage] =useState({name:'' , url:''})
    const [name,setName] = useState('')
    const [index, setIndex] = useState()
    const [loading,setLoading] = useState(false)
    const   actionType='Update'
    const collectionName ='category'
    const { replace, query } = useRouter();

    const {id}  = query


    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            try {
                const docRef = doc(db, "category", id);
                const docSnap = await getDoc(docRef);
                const data = {
                    ...docSnap.data(),
                };

                console.log('data loaded------->>>>' , data);
                setName(data.name);
              
                setImage(data.image);
               
                if (data.index) {
                    setIndex(data.index)
                    
                }
            } catch (error) {
                console.log(error);
                setAlert({
                    isShow: true,
                    duration: 3000,
                    message: error.response?.data?.message || error.message,
                    type: "error",
                });
            }
            setLoading(false);
        };
        if (id) getData();
    }, [id]);






    const handleClick = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            let data
           
             
                data = {
                    name,
                    
                    image: image,
                  
                  
                
                
            }
            await updateDoc(doc(db, "category", id), data);
            setAlert({
                isShow: true,
                duration: 3000,
                message: "Blog updated successfully.",
                type: "success",
            });
        } catch (error) {
            setAlert({
                isShow: true,
                duration: 3000,
                message: error.message,
                type: "error",
            });
        }
        setLoading(false);
    };







    return (




        <AdminLayout title='Updaet Category'>

{loading && <Loader/>}

{name}


            <PostBoxForm
           {...{
            name,
            setName,
            handleClick,
            setImage,
            setAlert,
            setLoading,
            image,
         
            collectionName,
            actionType,        
            id,
          
        }}
            
            
            
            />



        </AdminLayout>



    )
}
