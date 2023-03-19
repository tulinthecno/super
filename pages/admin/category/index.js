import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore"; 

import AllCategoriesMain from "../../../components/admin/employers-dashboard/allCategory/index";

const CATSPAGE = ({data}) => {
  return (
    <>
      <Seo pageTitle="All Categories" />
      <AllCategoriesMain cats={data}/>
    </>
  );
};




export default  CATSPAGE;




CATSPAGE.getInitialProps = async (context  ) => {
  
    
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
    data:data,
  };
};





//dynamic(() => Promise.resolve(index), { ssr: false });
