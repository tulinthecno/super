import React from 'react'
import AdminLayout from '../AdminLayout'
import CatsTable from '../allCategory/catsTable'


export default function AllProductsMain({data}) {
  return (
    <AdminLayout title= ' All Products'>

<CatsTable data={data} isproduct={true} link='products' />



    </AdminLayout>
  )
}
