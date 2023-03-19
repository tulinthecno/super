

import React from 'react'
import AdminLayout from '../AdminLayout'
import CatsTable from './catsTable'

export default function AllCatsMain({data}) {
  return (
    <AdminLayout title='All Categories'>

<CatsTable link ='category' data={data}/>


    </AdminLayout>
  )
}
