import { storage } from './index'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

const uploadFile = (file, filePath , update= false) => {
  return new Promise( async (resolve, reject) => {
    const storageRef = ref(storage, `cats/${filePath}`)

if(update){
  
}



    try {
        await uploadBytes(storageRef, file)
        const url  =await getDownloadURL(storageRef)
        resolve(url)
    } catch (error) {
        reject(error)
    }
  } )
}

export default uploadFile