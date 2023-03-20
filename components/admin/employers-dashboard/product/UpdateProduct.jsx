import React from 'react'
import AdminLayout from '../AdminLayout'
import PostBoxForm from '../addCategory/components/PostBoxForm'
import {useState, useEffect , useContext} from 'react'
import { StateContext } from "../../../../context/index";
import getBlogCount from '../../../../firebase/getBlogCount'
import { db } from "../../../../firebase/index";
import { collection , doc , updateDoc , getDoc , where  , getDocs} from "firebase/firestore";
import { addDoc, query as queryFirebase} from "firebase/firestore";
import moment from "moment/moment";
import { useRouter } from 'next/router';
import Loader from "../../../common/Loader";

export default function UpdateProductMain({cats}) {


  const { setAlert, user, pageLoading = true , Loading ,setLoading } = useContext(StateContext)
  const [image,setImage] =useState({name:'' , url:''})
const [images, setImages] = useState([])
const [imagesData, setImagesData] = useState([])
const [name,setName] = useState('')
const [index ,setIndex] = useState('')
const [desc ,setDesc] = useState('')
const [category ,setCategory]  = useState('')
const[subCategory,setSubCategory] = useState('')
const [subCats,setSubCats] = useState([])
const [price,setPrice] = useState(0)
const [quantity,setQuantity] = useState(0)
const [colors,setColors] = useState([])
  const { replace, query } = useRouter();

  const {id}  = query
  console.log('QUERy IDDD' , id)


  useEffect(() => {
      setLoading(true)
      const getData = async () => {
          try {
              const docRef = doc(db, "product", id);
              const docSnap = await getDoc(docRef);
              const data = {
                  ...docSnap.data(),
              };

              console.log('data loaded------->>>>' , data);
              setName(data.name);
            
              setImage(data.image);
              setCategory(data?.category)
              setSubCategory(data?.subcategory)
              setColors(data?.colors)
              setPrice(data?.price)
              setDesc(data?.desc)
              setImagesData(data?.images)
              setQuantity(data?.quantity)

              
             
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
                  
                  category,
                  colors,
                  quantity,
                  price,
                  desc ,
                  subCategory,
                
                
              
              
          }
          await updateDoc(doc(db, "product", id), data);
          setAlert({
              isShow: true,
              duration: 3000,
              message: "Product updated successfully.",
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



  const handleSelectCategory=(e)=>{
    setCategory(e.target.value)
  }
  
  const handleSeleSubctCategory=(e)=>{
      setSubCategory(e.target.value)
    }
    
    const handleDesc=(e)=>{
      setDesc(e.target.value)
    }
    
  
  
  
  useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        const subcatsCollection = collection(db, "subcategory");
        const q = 
        queryFirebase(subcatsCollection, where("category", "==", category))
          
  
        getDocs(q).then((data) => {
          const list = data.docs.map((product) => {
            return {
              ...product.data(),
              id: product.id,
            };
          });
          setSubCats(list);
        });
        setLoading(false);
      }, 1000);
  
    
    }, [category]);
  












  return (
    
<AdminLayout title='Update SubCategory'>

{Loading && <Loader/>}
{category }

<PostBoxForm
         fromUpdateProduct ={true}
         imagesData={imagesData}
         images={images}   setImages={setImages}
         actionType='Update Product'
                 name={name}  setName={setName}
                 handleDesc={handleDesc} desc={desc}
                 loading={Loading}  setLoading={setLoading}
                 setAlert={setAlert}
                 handleClick ={handleClick}
                 collectionName ='product'
                 cats={cats}
                 subCats={subCats}
                 fromProduct ={true}
                 quantity ={quantity}
                 setQuantity={setQuantity}
                 price ={price}
                 setPrice={setPrice}
                 colors={colors}
                 setColors={setColors}
                 handleSelectCategory={handleSelectCategory}
                 handleSeleSubctCategory={handleSeleSubctCategory}
                 showcats={true}
                 showsubcats={true}
        />
            
            
            





</AdminLayout>

  )
}
