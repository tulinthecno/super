import Map from "../../../Map";
import Select from "react-select";
import ImageUploader from "./imageUploader";
import {useState, useEffect , useContext} from 'react'
import { StateContext } from "../../../../../context/index";
const PostBoxForm = (

{name, setName, setImage, image , setAlert , loading, setLoading , handleClick , actionType , cats=[] , fromSubAdd ,handleSelectCategory , collectionName , category , fromProduct }

) => {
  const specialisms = [
    { value: "Banking", label: "Banking" },
    { value: "Digital & Creative", label: "Digital & Creative" },
    { value: "Retail", label: "Retail" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Managemnet", label: "Managemnet" },
    { value: "Accounting & Finance", label: "Accounting & Finance" },
    { value: "Digital", label: "Digital" },
    { value: "Creative Art", label: "Creative Art" },
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
          <ImageUploader  image={image}   setImage={setImage}
          
          name={name}  setName={setName}
          loading={loading}  setLoading={setLoading}
          setAlert={setAlert}
          collectionName={collectionName}
          
          />
        </div>




        <div className="form-group col-lg-12 col-md-12">
          <label>

{fromSubAdd ? "subCategory Name" :fromProduct ? "product Name" : "Category Name" }

          </label>
          <input
          
          value={name}

          onChange={e => setName(e.target.value)}
          type="text" name="category name" placeholder="cat_name" />
        </div>

{/* -----SubCategory  Select Category---- */}
{ fromSubAdd &&
<div className="form-group col-lg-6 col-md-12">
          <label>Select Category</label>
          <select
          
          onChange={handleSelectCategory }
          
          className="chosen-single form-select">
            <option
            selected={category}
            value={category}
            >Selected</option>
           {cats?.length > 0  ? 
           
           cats?.map((cat) =>{

return <option value={cat?.id} key={cat?.id}>{cat?.name}</option>


           })
           
           
           : <option value="" key="">No Data</option>}
          </select>
        </div> 
}









        {/* <!-- About Company --> */}
        {/* <div className="form-group col-lg-12 col-md-12">
          <label>Job Description</label>
          <textarea placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
        </div> */}

    

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
