import React from 'react'
import Link from 'next/link'

export default function CatsTable({cats}) {
  return (
    <div>


<div className="widget-content">
        <div className="table-outer">
          <div className="table-outer">
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
                {cats.map((item) => (
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
                              <Link href={`/job-single-v3/${item.id}`}>
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
                                <Link href={`/admin/category/${item?.id}`}>
                              
                              <span className="la la-eye"></span>
                              </Link>
                            </button>
                          </li>
                          <li>
                            <button data-text="Delete Aplication">
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
          </div>
        </div>
      </div>






    </div>
  )
}
