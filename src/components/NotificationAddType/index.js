import React from 'react'
import NormalSelect from '../NormalSelect'

function NotificationForm() {

const selectType=[{
        label:"Email Noptification",value:"Email Noptification"
      },
      {
        label:"Email Noptification",value:"Email Noptification"
      },
      {
        label:"Email Noptification",value:"Email Noptification"
      },
      {
        label:"Email Noptification",value:"Email Noptification"
      },]
      const beforeDue=[{
        label:"2 days",value:"2 days"
      },
      {
        label:"2 days",value:"2 days"
      },
      {
        label:"2 days",value:"2 days"
      }
     ]
      const AfterDue=[{
        label:"none",value:"none"
      },
      {
        label:"Email Noptification",value:"Email Noptification"
      },
      {
        label:"Email Noptification",value:"Email Noptification"
      },
      {
        label:"Email Noptification",value:"Email Noptification"
      },]
  return (
    <div className="notification-form">
    <div className="row ">
    <div class=" mt-2 col-xs-12 col-sm-12 col-md-6 col-lg-4 ">
           <label>1.Select Type</label>
         <div className="mt-2 mb-3"> <NormalSelect options={selectType}/></div>
           </div> </div>
      <div className="row">    
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
           <label>Trigger Notification Before</label>
           <div className="mt-2 mb-3"> <NormalSelect options={AfterDue}/></div>
           </div>
           <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
           <label>Trigger Notification After</label>
           <div className="mt-2 mb-3"> <NormalSelect options={beforeDue}/></div>
           </div></div>
           </div>
  )
}

export default NotificationForm