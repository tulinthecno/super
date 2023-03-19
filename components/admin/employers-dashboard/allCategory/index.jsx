

import React from 'react'
import AdminLayout from '../AdminLayout'
import CatsTable from './catsTable'

export default function AllCatsMain({cats}) {
  return (
    <AdminLayout title='All Categories'>

<CatsTable cats={cats}/>


    </AdminLayout>
  )
}
