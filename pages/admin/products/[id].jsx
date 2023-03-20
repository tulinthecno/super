import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore"; 


import UpdateProductMain from "../../../components/admin/employers-dashboard/product/UpdateProduct";

const UpdateProductScreen = ({cats}) => {
  return (
    <>
      <Seo pageTitle="Update Product" />
      <UpdateProductMain  cats={cats}  />
    </>
  );
};




export default  UpdateProductScreen;


UpdateProductScreen.getInitialProps = async (context  ) => {
  
    
  const data = [];


  try {
    const querySnapshot = await getDocs(collection(db, 'category'));

    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
      
        ...doc.data()
      
      });
    });
  } catch (error) {
    console.error(error);
  }

 


console.log('All Categories' + data)


  return {
    cats:data,
    
  };
};





