import { storage } from './index'
import { getDownloadURL, ref, uploadBytes, deleteObject } from 'firebase/storage'
import { toast } from 'react-toastify'

export const handleDelete = async (image , collectionName) => {
  try {








    console.log('image is Name:🔷️🔶️🔷️🔶️ ' + image)

    const desertRef = ref(storage, `${collectionName}/${image?.name}`);
    await deleteObject(desertRef);
    toast.success(`${collectionName} images Deleted  successfully`)




    console.log("Document successfully deleted!");
    //   toast.success('Blog deleted successfully')
    //   window.location.reload()

  } catch (error) {
    console.error("Error removing document: ", error);
    toast.error({ message: error })

    //   setLoading(false)
  }

};