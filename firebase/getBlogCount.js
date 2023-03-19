import { db } from './index'
import { collection, getCountFromServer, orderBy, query } from 'firebase/firestore'

async function getBlogCount(collectionName) {
  console.log('collectionName: ' + collectionName)
  const q = query(collection(db, collectionName), orderBy('index'))
  const snapshot = await getCountFromServer(q)
  console.log('count' + snapshot.data().count)
  return snapshot.data().count
}

export default getBlogCount