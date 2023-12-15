import React from 'react'
import "./styles.scss"
import NormalInput from '../../components/inputField'
import NormalButton from '../../components/NormalButton'
import DatePicker from '../../components/DatePicker'
import NormalSelect from '../../components/NormalSelect'
function CreateInvoice() {


  const options=
  [{
    label:"select",value:"select"
  },{
    label:"select",value:"select"
  },{
    label:"select",value:"select"
  }]
  return (
<>
<div className='create-invoice-container p-5'>
    <div className=' create-invoice-title pb-4 '>
     Create Invoice

    </div>
    <div className='col create-invoice-form'>
<form>
    <div className='invoice-form'>
        <div className='row '>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
         <label>Issue Date</label>
           <DatePicker value/>
         </div>
         <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
          <label>Due Date</label>
          <DatePicker/>
          </div>
          
        </div>
        <div className='row col-12'>
        <div className='pt-3 pb-2  vendordetails'>Vendor Details:</div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
             
         <label>Vendor Name</label>
         <div className='row  align-items-center'>
         <div className='col-8'>    
         <NormalSelect options={options}/>
         </div>
<div className='col-4 create-invoice-add-btn'><NormalButton label={"ADD"} notifyBtn/></div>
         </div>
         </div>
         <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
          <label>CIN Number</label>
            <NormalInput value="12345678" type="text" freeze/>
          
          </div>
         
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
          <label>VAT Number</label>
            <NormalInput value="1245678" type="text" freeze/>
          </div>
          
        </div>
        <div className='row col-12 pt-4'>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
         <label>Reason</label>
        <NormalSelect options={options}/>
         </div>
         <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
          <label>Type</label>
          <NormalSelect options={options}/>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
          <label>Total Amount</label>
          <NormalInput type="text" placeholder="Enter Here"/>
          </div>
          
        </div>
       
        

    </div>
    <div className='create-invoice-or-para'>OR</div>
    <div className='upload-invoice'>
<div className='row'>
    <label>Upload Invoice PDF</label>
    <input type="file" id="upload" hidden/>
<label className='create-invoice-upload-btn' for="upload">Upload</label> 
    <p className='create-invoice-file-note'>*Upload file size of max 2mb</p> 
</div>
</div>
<div className='create-invoice-save-cancel-btns'>
  

  <div > <NormalButton label="Cancel" cancelBtn /></div> 
   <div className='create-invoice-save-button'><NormalButton label="Save" approveBtn/></div> 
</div>

    
</form>
    </div>
</div>
</>




  )
  
}

export default CreateInvoice