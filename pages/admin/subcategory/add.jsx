import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore"; 


import AddSubCatMain from "../../../components/admin/employers-dashboard/subCategory/AddSubCat";

const AddSubCatNew = ({cats}) => {
  return (
    <>
      <Seo pageTitle="Add New subCategory" />
      <AddSubCatMain cats={cats}  />
    </>
  );
};




export default  AddSubCatNew;



AddSubCatNew.getInitialProps = async (context  ) => {
  
    
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




