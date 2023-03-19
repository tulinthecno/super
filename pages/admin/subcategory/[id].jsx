import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore"; 


import UpdateSubCatMain from "../../../components/admin/employers-dashboard/subCategory/UpdateSubCat";

const UpdateSubCat = ({cats}) => {
  return (
    <>
      <Seo pageTitle="Update subCategory" />
      <UpdateSubCatMain cats={cats}  />
    </>
  );
};




export default  UpdateSubCat;


UpdateSubCat.getInitialProps = async (context  ) => {
  
    
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





