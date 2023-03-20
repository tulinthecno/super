import { useState } from "react";
import uploadFile from "../../../../../firebase/addImage";
import { handleDelete } from '../../../../../firebase/deleteImage'
import Loader from "../../../../common/Loader"


const ArrayImageUploader = ({images, setImages , setLoading , loading ,setAlert , collectionName ='product' }) => {
    const [logoImg, setLogoImg] = useState("");
    const [converImg, setCoverImg] = useState("");

    // logo image
    const logoHandler = async(file) => {
        setLogoImg(file);


// 1- Then Uplpoad Image to Fire Storage

setLoading(true)
if (!file) {
    return setAlert({ isShow: true, duration: 3000, message: "Select image file to upload.", type: "error" })
}
//   const filePath = crypto.randomUUID() + "-" + file.name
const filePath = file.name
try {



    const url = await uploadFile(file, filePath , collectionName)
    setImage({ url, name: filePath })
    // setImage(url)
} catch (error) {
    return setAlert({ isShow: true, duration: 3000, message: error.message, type: "error" })
}
setLoading(false)






    };

    // cover image
    const coverHandler = async(file) => {
        setCoverImg(file);

    };


    // const deleteImage = async() => {
    //     setLoading(true)

    //   await  handleDelete(image , collectionName)

       
    //     setLogoImg('')

    //     setLoading(false)

    // };





    const handleImageChange = (e) => {
        console.log('images changed' + images)
        setImages(Array.from(e.target.files));
      };
      
      
      const handleRemoveImage = async(image) => {
        console.log( "REMOVE HANDLE",image)
        setImages(images.filter((i) => i !== image));
        // await  handleDelete(image , collectionName)
      };
      
      
      







    return (
        <>
        {loading && Loader }
            
           

          








                   
<div className="uploading-outer  gap-12">


{/* ---------UPLAOD  */}

                <div className="uploadButton">

                    <input
                        className="uploadButton-input"
                        type="file"
                        multiple
                        name="attachments[]"
                        accept="image/*"
                        id="upload"
                        required
                        onChange={handleImageChange}
                        // onChange={(e) => logoHandler(e.target.files[0])}
                    />
                    <label
                        className="uploadButton-button ripple-effect"
                        htmlFor="upload"
                    >
                        Upload Imagess
                    </label>
                    <span className="uploadButton-file-name"></span>
                </div>

                

                <div className=" flex gap-4">
    


    {images.map((item ,index) =>{

return (



    
    images?.length > 0 
                &&
                  <div key={index} className="uploadButton">
    
    
        <img className=" w-[110px] h-[110px]  ml-12  object-cover rounded-xl " 
        
        src={URL.createObjectURL(item)}
        
        alt="" />
        
        
        <span 
        
        onClick={() =>
            handleRemoveImage(item)
             
               }
        className='   bg-red-500 left-[-46px]  cursor-pointer  top-[-39px]  text-sm rounded-3xl p-1 text-white relative '>Delete</span>
        
        </div>
      


)


    
      
    
        //  : <div>no Images Selected</div>
    
    
    
    })} 
    
               
    </div>







                {/* {image?.name &&
                <div
                
                onClick={deleteImage}
                
                className="text  bg-red-500  text-white  font-bold p-3 cursor-pointer  hover:bg-red-400 duration-150  transition-all rounded-xl">




Delete Image


                   
                </div>

                } */}


            </div>

            {/* <div className="uploading-outer">
                <div className="uploadButton">
                    <input
                        className="uploadButton-input"
                        type="file"
                        name="attachments[]"
                        accept="image/*, application/pdf"
                        id="upload_cover"
                        onChange={(e) => coverHandler(e.target.files[0])}
                    />
                    <label
                        className="uploadButton-button ripple-effect"
                        htmlFor="upload_cover"
                    >
                        {converImg !== "" ? converImg?.name : "Browse Cover"}
                    </label>
                    <span className="uploadButton-file-name"></span>
                </div>
                <div className="text">
                    Max file size is 1MB, Minimum dimension: 330x300 And
                    Suitable files are .jpg & .png
                </div>
            </div> */}
        </>
    );
};

export default ArrayImageUploader;
