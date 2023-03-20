import Map from "../../../Map";
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import ImageUploader from "./imageUploader";
import {useState, useEffect , useContext} from 'react'
import { StateContext } from "../../../../../context/index";
import ArrayImageUploader from "./ArrayImageUploader";
const PostBoxForm = (

{name, setName, setImage, image , setAlert , loading, setLoading , handleClick , actionType , cats=[] , fromSubAdd ,handleSelectCategory , collectionName , category , fromProduct   , price ,setPrice ,quantity ,setQuantity ,colors ,setColors ,    handleSeleSubctCategory ,subCats ,desc , handleDesc , showcats ,showsubcats ,images ,setImages  ,  fromUpdateProduct=false,imagesData  ,  arrayImagesUploader=false ,  subCategory }

) => {

  const animatedComponents = makeAnimated();


  const specialisms = [
    { value: "bg-red-500", label: "Red" },
    { value: "bg-blue-500", label: "Blue" },
    { value: "bg-black", label: "Black" },
    { value: "bg-green-400", label: "Green" },
    { value: "bg-white", label: "White" },
    { value: "bg-grey-400", label: "Grey" },
    // { value: "Digital", label: "Digital" },
    // { value: "Creative Art", label: "Creative Art" },
  ];

//   const { setAlert, user, pageLoading = true } = useContext(StateContext)
// const [image,setImage] =useState({name:'' , url:''})
// const [name,setName] = useState('')
// const [loading,setLoading] = useState(false)

  return (
    <form className="default-form">






      <div className="row">
        {/* <!-- Input --> */}

        <div className="form-group col-lg-12 col-md-12">
          {/* // for single image Uplaoder  */}
       { arrayImagesUploader  ?   <ArrayImageUploader images={images} setAlert={setAlert}  setImages={setImages} loading={loading} setLoading={setLoading}/> : fromUpdateProduct ? <div>


<div className=" flex  gap-3 flex-wrap">

{imagesData.map((image ,index)=>{

return (

<div key={index}>
<img className=" w-24 h-24  rounded-2xl" src={image?.url} alt="" />
</div>

)

})}


</div>




       </div>  :  <ImageUploader  image={image}   setImage={setImage}
          

  


          name={name}  setName={setName}
          loading={loading}  setLoading={setLoading}
          setAlert={setAlert}
          collectionName={collectionName}
          
          />
  }
        </div>




        <div className="form-group col-lg-12 col-md-12">
          <label>

{fromSubAdd ? "subCategory Name" :fromProduct ? "product Name" : "Category Name" }

          </label>
          <input
          
          value={name}

          onChange={e => setName(e.target.value)}
          type="text" name="category name" placeholder={fromSubAdd ? "subCategory Name" :fromProduct ? "product Name" : "Category Name"} />
        </div>

{/* -----SubCategory  Select Category---- */}
{ showcats   &&
<div className="form-group col-lg-6 col-md-12">
          <label>Select Category</label>
          <select
          
          onChange={handleSelectCategory }
          value={category}
          className="chosen-single form-select">
          


           {cats?.length > 0  ? 
           
           cats?.map((cat) =>{

return <option value={cat?.id} key={cat?.id}>{cat?.name}</option>


           })
           
           
           : <option value="" key="">No Data</option>}
          </select>
        </div> 
}














{/* ---   handleSeleSubctCategory */}


{ showsubcats    &&
<div className="form-group col-lg-6 col-md-12">
          <label>Select subCategory</label>
          <select
            selected={subCategory}
          onChange={handleSeleSubctCategory}
          
          className="chosen-single form-select">
            <option
          
           
            >Selected</option>
           {cats?.length > 0  ? 
           
           subCats?.map((cat) =>{

return <option value={cat?.id} key={cat?.id}>{cat?.name}</option>


           })
           
           
           : <option value="" key="">No Data</option>}
          </select>
        </div> 
}












        {/* <!-- Product Desc--> */}


        { fromProduct    &&

        <div className="form-group col-lg-12 col-md-12">
          <label>Product Description</label>
          <textarea
          value={desc}
          onChange={handleDesc}
          
          placeholder="Product Description"></textarea>
        </div>
}


{ fromProduct    &&

<div className="form-group col-lg-6 col-md-12">
          <label>Specialisms </label>
          <Select
           menuPlacement="bottom"
           value={colors}
           components={animatedComponents}
            defaultValue={[specialisms[2]]}
            isMulti
            name="colors"
            options={specialisms}
            className="basic-multi-select"
            classNamePrefix="select"

            onChange={(value) => {
             
              setColors(value)
              console.log('color ' + value)
           
            }}



          />
        </div>

}




{ fromProduct    &&

<div className="form-group col-lg-6 col-md-12">
          <label>Price </label>


<input
 onChange={e => setPrice(e.target.value)}


type="number"  value={price} />





          </div>

}



{ fromProduct    &&

<div className="form-group col-lg-6 col-md-12">
          <label>Quantity </label>


<input
value={quantity}
 onChange={e => setQuantity(e.target.value)}


type="number"  />





          </div>

}








    

        {/* <!-- Search Select --> */}


{/*         
        <div className="form-group col-lg-6 col-md-12">
          <label>Specialisms </label>
          <Select
            defaultValue={[specialisms[2]]}
            isMulti
            name="colors"
            options={specialisms}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Job Type</label>
          <select className="chosen-single form-select">
            <option>Select</option>
            <option>Banking</option>
            <option>Digital & Creative</option>
            <option>Retail</option>
            <option>Human Resources</option>
            <option>Management</option>
          </select>
        </div> */}

      
     
    
     

     
      


  

        <div className="form-group col-lg-12 col-md-12 text-right">
          <button
       onClick={handleClick}
          
          className="theme-btn btn-style-one">{actionType}</button>
        </div>
      </div>
    </form>
  );
};

export default PostBoxForm;
