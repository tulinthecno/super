

import PostBoxForm from "./components/PostBoxForm";

import AdminLayout from "../AdminLayout";
import {useState, useEffect , useContext} from 'react'
import { StateContext } from "../../../../context/index";
import getBlogCount from '../../../../firebase/getBlogCount'
import { db } from "../../../../firebase/index";
import Loader from "../../../common/Loader";

import { addDoc, collection } from "firebase/firestore";
import moment from "moment/moment";


//      <PostBoxForm />







export default function AddCategoryMain() {


  const { setAlert, user, pageLoading = true } = useContext(StateContext)
const [image,setImage] =useState({name:'' , url:''})
const [name,setName] = useState('')
const [loading,setLoading] = useState(false)


const handleClick = async (e) => {
  e.preventDefault();
  setLoading(true)
  try {
    // if (visibleHome) const count = 
    const data = {
      name,
      image,
    
      index: await getBlogCount() + 1,
      date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss") ,
   
    }
    await addDoc(collection(db, 'category'), data)
    setName("")
    setImage({url:'' , name:''})
    
    setAlert({ isShow: true, duration: 3000, message: "Blog added successfully.", type: "success" })
  } catch (error) {
    setAlert({ isShow: true, duration: 3000, message: error.message, type: "error" })

  }
  setLoading(false)
}






  return (
    <AdminLayout title='Add new Category'>

{loading && <Loader/>}
<div>
  <PostBoxForm  
  
  image={image}   setImage={setImage}
  actionType='Create'
          name={name}  setName={setName}
          loading={loading}  setLoading={setLoading}
          setAlert={setAlert}
          handleClick ={handleClick }
  
  />
</div>


    </AdminLayout>
  )
}


