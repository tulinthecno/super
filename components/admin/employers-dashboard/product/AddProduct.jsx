import React from 'react'
import AdminLayout from '../AdminLayout'
import PostBoxForm from '../addCategory/components/PostBoxForm'
import {useState, useEffect , useContext} from 'react'
import { StateContext } from "../../../../context/index";
import getBlogCount from '../../../../firebase/getBlogCount'
import { db , storage } from "../../../../firebase/index";
import {
    getStorage,
    ref as storageRef,
    uploadBytes,
    getDownloadURL,
  } from "firebase/storage";
import Loader from "../../../common/Loader";

import { addDoc, collection , query, where ,getDocs } from "firebase/firestore";
import moment from "moment/moment";

export default function AddProductMain({cats}) {

  const { setAlert,Loading,setLoading, user, pageLoading = true } = useContext(StateContext)
const [image,setImage] =useState({name:'' , url:''})
const [images, setImages] = useState([])
const [name,setName] = useState('')
const [desc ,setDesc] = useState('')
const [category ,setCategory]  = useState('')
const[subCategory,setSubCategory] = useState('')
const [subCats,setSubCats] = useState([])
const [price,setPrice] = useState(0)
const [quantity,setQuantity] = useState(0)
const [colors,setColors] = useState([])
// const [loading,setLoading] = useState(false)
const actionType ='Create Product'

const handleClick = async (e) => {
  e.preventDefault();
  setLoading(true)
  try {
    


    console.log('images length: ' + images.length ,images)

    const firebaseImages = [];
    await Promise.all(
      images.map(async (image) => {
        const fbStorageRef = storageRef(storage, `product/${image.name}`);
        const uploadTask = await uploadBytes(fbStorageRef, image);
        const downloadURL = await getDownloadURL(uploadTask.ref);
        firebaseImages.push({url:downloadURL , name:image.name});
        setAlert({ isShow: true, duration: 3000, message: "Product Images added successfully.", type: "success" })
      })
    );






    const data = {
      name,
      images:firebaseImages,
      category,
      colors,
      quantity,
      price,
      desc ,

    
      index: await getBlogCount('product') + 1,
      date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss") ,
   
    }
    await addDoc(collection(db, 'product'), data)
    setName("")
    setImage({url:'' , name:''})
    
    setAlert({ isShow: true, duration: 3000, message: "Product added successfully.", type: "success" })
  } catch (error) {
    setAlert({ isShow: true, duration: 3000, message: error.message, type: "error" })

  }
  setLoading(false)
}


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
         query(subcatsCollection, where("category", "==", category))
        

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
        
<AdminLayout title='Add Product'>

{/* {category} */}

{Loading && <Loader/>}

{colors[1]?.value}


<div>
  <PostBoxForm  
  
  images={images}   setImages={setImages}
  actionType='Create Product'
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
          // category={category}
          // setCategory={setCategory}
  
  />
</div>






</AdminLayout>
  )
}
