import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore"; 

import AllSubCategoriesMain from "../../../components/admin/employers-dashboard/subCategory/index";

const SUBCATSPAGE = ({data}) => {
  return (
    <>
      <Seo pageTitle="All Categories" />
      <AllSubCategoriesMain data={data}/>
    </>
  );
};




export default  SUBCATSPAGE;




SUBCATSPAGE.getInitialProps = async (context  ) => {
  
    
  const data = [];


  try {
    const querySnapshot = await getDocs(collection(db, 'subcategory'));

    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
      
        ...doc.data()
      
      });
    });
  } catch (error) {
    console.error(error);
  }

 


console.log('All SubCategories' + data)


  return {
    data:data,
    
  };
};



