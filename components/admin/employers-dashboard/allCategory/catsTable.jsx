
import Link from 'next/link'
import { StateContext } from '../../../../context/index'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import Loader from '../../../common/Loader'



export default function CatsTable({ data , link }) {

    const {handleDelete , Loading} = useContext(StateContext)


    return (
        <div>

            {Loading && <Loader/>}


            <div className="widget-content">
                <div className="table-outer">
                    <div className="table-outer">


                    {data?.length > 0 ?

                        <table className="default-table manage-job-table">
                            <thead>
                                <tr>
                                    <th>Category Name</th>
                                    <th>Category Image</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                           
                            <tbody>
                                {data?.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            {/* <!-- Job Block --> */}
                                            <div className="job-block">
                                                <div className="inner-box">
                                                    <div className="content">
                                                        {/* <span className="company-logo">
                              <img src={item.logo} alt="logo" />
                            </span> */}
                                                        <h4>
                                                            <Link href={`/admin/${link}/${item.id}`}>
                                                                {item?.name}
                                                            </Link>
                                                        </h4>
                                                        {/* <ul className="job-info">
                              <li>
                                <span className="icon flaticon-briefcase"></span>
                                Segment
                              </li>
                              <li>
                                <span className="icon flaticon-map-locator"></span>
                                London, UK
                              </li>
                            </ul> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        {/* <td>Dec 5, 2020</td> */}

                                        <td className=' '>


                                            <div>
                                                <img className=' w-[66px]  h-[66px]  object-cover  rounded-full ' src={item?.image?.url} alt="" />


                                            </div>

                                        </td>


                                        <td className="status">Active  </td>
                                        <td>
                                            <div className="option-box">
                                                <ul className="option-list">
                                                    <li>
                                                        <button data-text="View Aplication">
                                                            <Link href={`/admin/${link}/${item?.id}`}>

                                                                <span className="la la-eye"></span>
                                                            </Link>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                         onClick={() => handleDelete(link , item)}
                                                        
                                                        data-text="Delete Aplication">
                                                            <span className="la la-trash"></span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>

                            
 
                        </table>

:

<div className='  text-center   bg-red-500  p-3  text-white  rounded-3xl '> NO DATA FOUNDED</div>
}


                    </div>
                </div>
            </div>






        </div>
    )
}
