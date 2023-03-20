import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore"; 

import AllProductsMain from "../../../components/admin/employers-dashboard/product/AllProducts";

const ProductsScreen = ({data}) => {
  return (
    <>
      <Seo pageTitle="All Categories" />
      < AllProductsMain data={data}/>
    </>
  );
};




export default   ProductsScreen;




ProductsScreen.getInitialProps = async (context  ) => {
  
    
  const data = [];


  try {
    const querySnapshot = await getDocs(collection(db, 'product'));

    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
      
        ...doc.data()
      
      });
    });
  } catch (error) {
    console.error(error);
  }

 


console.log('All PRoducts' + data)


  return {
    data:data,
    
  };
};



