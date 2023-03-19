import React from 'react'
import AdminLayout from '../AdminLayout'
import CatsTable from '../allCategory/catsTable'

export default function SubMain({data}) {
  return (
        
<AdminLayout title='AllSubCategories'>


<CatsTable link='subcategory' data={data}/>



</AdminLayout>
  )
}
