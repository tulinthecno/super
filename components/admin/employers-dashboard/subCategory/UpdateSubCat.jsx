import React from 'react'
import AdminLayout from '../AdminLayout'
import PostBoxForm from '../addCategory/components/PostBoxForm'
import {useState, useEffect , useContext} from 'react'
import { StateContext } from "../../../../context/index";
import getBlogCount from '../../../../firebase/getBlogCount'
import { db } from "../../../../firebase/index";
import { collection , doc , updateDoc , getDoc } from "firebase/firestore";
import moment from "moment/moment";
import { useRouter } from 'next/router';
import Loader from "../../../common/Loader";

export default function UpdateSubCat({cats}) {


  const { setAlert, user, pageLoading = true , Loading ,setLoading } = useContext(StateContext)
  const [image,setImage] =useState({name:'' , url:''})
  const [name,setName] = useState('')
  const [index, setIndex] = useState()
  const [category ,setCategory]  = useState('')
  // const [loading,setLoading] = useState(false)
  const   actionType='Update'
  const collectionName ='category'
  const { replace, query } = useRouter();

  const {id}  = query
  console.log('QUERy IDDD' , id)


  useEffect(() => {
      setLoading(true)
      const getData = async () => {
          try {
              const docRef = doc(db, "subcategory", id);
              const docSnap = await getDoc(docRef);
              const data = {
                  ...docSnap.data(),
              };

              console.log('data loaded------->>>>' , data);
              setName(data.name);
            
              setImage(data.image);
              setCategory(data?.category)
             
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



  const handleSelectCategory=(e)=>{
    setCategory(e.target.value)
  }
  





  const handleClick = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
          let data
         
           
              data = {
                  name,
                  
                  image: image,
                  category:category
                
                
              
              
          }
          await updateDoc(doc(db, "subcategory", id), data);
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
    
<AdminLayout title='Update SubCategory'>

{Loading && <Loader/>}
{category }

<PostBoxForm
         
         image={image}   setImage={setImage}
         actionType='Update SubCategory'
                 name={name}  setName={setName}
                 loading={Loading}  setLoading={setLoading}
                 setAlert={setAlert}
                 handleClick ={handleClick }
                 collectionName ='subcategory'
                 category
                 cats={cats}
                 fromSubAdd ={true}
                 handleSelectCategory={handleSelectCategory}
        />
            
            
            





</AdminLayout>

  )
}
