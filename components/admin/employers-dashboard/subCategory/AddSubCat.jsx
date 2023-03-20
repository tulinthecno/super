import React from 'react'
import AdminLayout from '../AdminLayout'
import PostBoxForm from '../addCategory/components/PostBoxForm'
import {useState, useEffect , useContext} from 'react'
import { StateContext } from "../../../../context/index";
import getBlogCount from '../../../../firebase/getBlogCount'
import { db } from "../../../../firebase/index";
import Loader from "../../../common/Loader";

import { addDoc, collection } from "firebase/firestore";
import moment from "moment/moment";

export default function AddSubCat({cats}) {

  const { setAlert,Loading,setLoading, user, pageLoading = true } = useContext(StateContext)
const [image,setImage] =useState({name:'' , url:''})
const [name,setName] = useState('')
const [category ,setCategory]  = useState('')
// const [loading,setLoading] = useState(false)
const actionType ='Create SubCategory'

const handleClick = async (e) => {
  e.preventDefault();
  setLoading(true)
  try {
    // if (visibleHome) const count = 
    const data = {
      name,
      image,
      category,
    
      index: await getBlogCount('subcategory') + 1,
      date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss") ,
   
    }
    await addDoc(collection(db, 'subcategory'), data)
    setName("")
    setImage({url:'' , name:''})
    
    setAlert({ isShow: true, duration: 3000, message: "Blog added successfully.", type: "success" })
  } catch (error) {
    setAlert({ isShow: true, duration: 3000, message: error.message, type: "error" })

  }
  setLoading(false)
}


const handleSelectCategory=(e)=>{
  setCategory(e.target.value)
}





  return (
        
<AdminLayout title='Add SubCategory'>

{category}

{Loading && <Loader/>}
<div>
  <PostBoxForm  
  
  image={image}   setImage={setImage}
  actionType='Create SubCategory'
          name={name}  setName={setName}
          loading={Loading}  setLoading={setLoading}
          setAlert={setAlert}
          handleClick ={handleClick }
          collectionName ='subcategory'
          cats={cats}
          fromSubAdd ={true}
          handleSelectCategory={handleSelectCategory}
          showcats={true}
          showsubcats={false}
          // category={category}
          // setCategory={setCategory}
  
  />
</div>






</AdminLayout>
  )
}
