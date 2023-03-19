import { db } from './index'
import { collection, getCountFromServer, orderBy, query } from 'firebase/firestore'

async function getBlogCount() {
  const q = query(collection(db, 'category'), orderBy('index'))
  const snapshot = await getCountFromServer(q)
  return snapshot.data().count
}

export default getBlogCount