'use client'
import React, { useRef } from 'react';
import {Row,Col,Button,Input,Form,Modal,Dropdown,Space,Card, Select,UploadProps,Upload,message,Drawer} from 'antd';
import { useEffect, useState } from 'react';
import type { MenuProps } from 'antd';
import Link from 'next/link';

const { Dragger } = Upload;

const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};
interface OrderLine {
    orderLineID: string;
    productCode: string;
    productName: string;
    brand: string;
    category: string;
    orderQty: number;
    unitPrice: number;
    listPrice: number;
    services: {
      extendedWarranty: string;
      installation: string;
    };
    FOC: string;
  }

  interface OrderData {
    store: string;
    orderID: string;
    orderDateTime: string;
    salesOrderNo: string;
    currency: string;
    orderAmount: number;
    netAmount: number;
    taxAmount: number;
    customerName: string;
    customerContact: string;
    customerEmail: string;
    lines: OrderLine[];
  }

const NewRequest: React.FC = () =>{
    const [form] = Form.useForm()
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const[dataInForm,setDataInForm] =useState()
    const [isModalConfirmOpen, setIsModalConfirmOpen] = useState(false);
    const[isModalSuccessOpen,setIsModalSuccessOpen] = useState(false)
    const [isModalThreeOpen, setIsModalThreeOpen] = useState(false);
    const[selectedValue,setSelectedValue] = useState('');
    const[salesOrderNumber,setSalesOrderNumber] = useState('')
    const[inputField,setInputField] = useState('')
    const[dropDownTitle,setDropDownTitle] = useState('Brand')
    const[hide,setHide]= useState(false)
    const[unHideColumns,setUnHideColumns] =useState(false)
    const[displayedDate,setDisplayedDate] = useState('')
    const[showError,setShowError] =useState(false)
    const[errorMessage,setErrorMessage] = useState('')
    const[discountRequestItemsCount,setDiscountRequestItemsCount] = useState(0)
    const[salesOrderData,setSalesOrderData] = useState <OrderData>({
        store: '',
        orderID:'',
        orderDateTime: '',
        salesOrderNo:'',
        currency:'',
        orderAmount:0,
        netAmount:0,
        taxAmount:0,
        customerName:'',
        customerContact:'',
        customerEmail:'',
        lines: []
    })
    const formatDate = (dateTimeString: any) => {
        const date = new Date(dateTimeString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${day}-${month}-${year}`;
      };

    async function showDrawer  () {
        if(salesOrderNumber !== ''){
            setErrorMessage('')
            try{
                const res = await fetch(`api/getSalesOrder?orderId=${salesOrderNumber}`,{

                })
                
                if(res.status === 200){
                    setInputField('')
                    const responseData = await res.json();
                    setSalesOrderData(responseData.data)
                    const formattedDate = formatDate(responseData.data.orderDateTime);
                    setDisplayedDate(formattedDate)
                    // const requestItemsCount = salesOrderData.lines.reduce((totalQty, line) => totalQty + line.orderQty, 0)
                    // setDiscountRequestItemsCount(requestItemsCount)
                    setSalesOrderNumber('')
                    setIsDrawerOpen(true);
                    
                }else if(res.status === 404){
                    setInputField('')
                    const responseData = await res.json();
                    setErrorMessage(responseData.msg)
                    setShowError(true)
                }else{
                    console.log('failed')
                }
            }catch(error){

            }
            
            
        }else{
            setErrorMessage('Please Enter Sales Order Number')
            setShowError(true)
        }
      


    };

    const handleNo = () => {
        setIsModalConfirmOpen(false)
    }
    const handleYes = () => {
        
        SendDataToDB(dataInForm)
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSalesOrderNumber(e.target.value)
        setInputField(e.target.value)
    }
    const handleOk = () => {
        setIsModalSuccessOpen(false);
    };
  
    const handleCancel = () => {
        setSelectedValue('')
        form.resetFields();
        setHide(false)
        setIsDrawerOpen(false);  
    };

    const handleSelectedOption = (value : string) => {
        setSelectedValue(value)
        if(value !== ''){
            setHide(true)
            if(value === 'Brand Discount'){
                setDropDownTitle('Brand')
                if(unHideColumns!){
                    setUnHideColumns(false)
                }
            }else if(value === 'SDG Discount'){
                setDropDownTitle('SDG')
                if(unHideColumns!){
                setUnHideColumns(false)
                }
            }else if(value === 'Brand+SDG Discount'){
                setDropDownTitle('Brand')
                setUnHideColumns(true)
            }else if(value === 'Internal Store Discount'){
                setDropDownTitle('Store')
                if(unHideColumns!){
                setUnHideColumns(false)
                }
            }
        }else{
            setHide(false)
        }
    }

    const items: MenuProps['items'] = [
        {
          key: '1',
          label: 'Item 1',
        },
        {
          key: '2',
          label: 'Item 2',
        },
        {
          key: '3',
          label: 'Item 3',
        },
      ];
    const optionForDiscountType = [
        {
            value:'Brand Discount',
            label:'Brand Discount'
        },
        {
            value:'SDG Discount',
            label:'SDG Discount'
        },
        {
            value:'Brand+SDG Discount',
            label:'Brand+SDG Discount'
        },
        {
            value:'Internal Store Discount',
            label:'Internal Store Discount'
        }
    ]
    const optionForDiscountReason = [
        {
            value:'Attract New Customers',
            label:'Attract New Customers'
        },
        {
            value:'Meet Sales Goals',
            label:'Meet Sales Goals'
        },
        {
            value:'Engage Existing Customers',
            label:'Engage Existing Customers'
        },
        {
            value:'Boost Brand Reputation',
            label:'Boost Brand Reputation'
        },
    ]
    const optionForLoyaltyCustomer = [
        {
            value:'ESSAD',
            label:'ESSAD'
        },
        {
            value:'Fazza',
            label:'Fazza'
        },
        {
            value:'DG Member',
            label:'DG Member'
        },
    ]
    const ReadFormData =(values: any )=> {
        console.log(values,'form values')
        setDataInForm(values)
        setIsModalConfirmOpen(true)

    }
    
    async function SendDataToDB (formData:any){
        const postOrderData = {
            request_number:'NEW',
            // store_id:'DM1',
            request_time: `${salesOrderData.orderDateTime}Z`,
            pos_order_no:'POS123421',
            customer_name: salesOrderData.customerName,
            customer_phone: salesOrderData.customerContact,
            customer_email: salesOrderData.customerEmail,
            loyalty_customer: formData.loyaltyCustomer,
            order_qty: salesOrderData.lines.reduce((totalQty, line) => totalQty + line.orderQty, 0),
            order_amount: salesOrderData.orderAmount,
            status:'pending',
            deadline: `${salesOrderData.orderDateTime}Z`,
            // created_by:'d4e5b618-83d1-4ab9-b9cd-8b8dc2b78a40',
            // updated_by:'d4e5b618-83d1-4ab9-b9cd-8b8dc2b78a40',
            is_active: true,
            lines : salesOrderData.lines.map((line,index) => (
                {
                    // brand_id:'2f94d4e5-b4b1-4a3e-a505-c4a4e6a42f30',
                    // department_id:'fc2f9b1b-f5e8-4b69-ae25-6d1f92f8b7e0',
                    // group_id:'0f1ff7a4-0a9c-4d64-99b5-9d88b6e3163a',
                    product_code: line.productCode,
                    product_name: line.productName,
                    order_qty: line.orderQty,
                    order_value: salesOrderData.orderAmount,
                    // discount_type_id: "e07126d8-fa45-4b7d-9de9-0123456789ab",
                    // bd_discount_reason_id: "1ecf491e-9ab8-4f55-af4b-89e15a6508ec",
                    bd_discount_value: parseFloat(formData[`discountValue[${index}]`]),
                    // sdg_discount_reason_id: "2b768c44-7c82-4e4f-8d1a-0123456789ab",
                    sdg_discount_value: parseFloat(formData[`SDGdiscountValue[${index}]`]),
                    // id_discount_reason_id: "7bf2b215-367e-4f0b-b42c-0123456789ab",
                    id_discount_value: 15,
                    total_discount_value: 400,
                    status: "requested",
                    // created_by: "d4e5b618-83d1-4ab9-b9cd-8b8dc2b78a40",
                    // updated_by: "d4e5b618-83d1-4ab9-b9cd-8b8dc2b78a40",
                    is_active: true
                }
            ))

        }
        console.log(postOrderData)
        try{
            const res = await fetch('api/postOrder',
            {
                method: 'POST',
                body: JSON.stringify(postOrderData),
              }
            )
            if(res.ok){
                console.log('response in frontend ',res)
                setIsDrawerOpen(false);
                form.resetFields();
                setIsModalConfirmOpen(false)
                setIsModalSuccessOpen(true)
            }else{
                console.log('failed')
            }
        }catch(error){
            console.log('catch error', error)
        }
    }
    function handleModalThree(){
        setIsModalThreeOpen(true)
    }
    function handleModalThreeClose(){
        setIsModalThreeOpen(false)
    }
     
    return(
        <>

            <div style={{overflow:'hidden'}}>
            
                <Row gutter={[{ xs: 0, sm: 0, md: 40, lg: 40 },{ xs: 0, sm: 0, md: 16, lg: 16 }]} style={{marginRight:'0',minHeight:'37.2rem'}}>
                    {/*web screen */}
                    <Col xl={12} lg={12} xs={0} sm={0} md={14} style={{backgroundColor:'#F3F6F8',paddingTop:'3rem',paddingBottom:'3rem',paddingLeft:'3rem',paddingRight:'1.5rem',margin:'0'}}>
                        <div>
                            <Row justify={'center'}><Col style={{color:'#3A4756',fontSize:'1.25em',fontWeight:'400'}}>Scan Barcode</Col></Row>
                            <Row justify={'center'}><Col xl={24} lg={24} sm={0} xs={0} md={24} style={{textAlign:'center'}}><img src='images/https___lottiefiles.com_animations_barcode-scanner-F4D2Vg6UhY.gif' width={'350rem'} height={'350rem'}></img></Col></Row>
                            <Row justify={'center'}><Col xs={0} sm={0} md={24} lg={24} xl={24} style={{color:'#3A4756',fontSize:'1.25em',fontWeight:'300',textAlign:'center'}}>Scan the barcode on the Sales Order Receipt to Populate Details</Col></Row>
                            <Row style={{marginTop:'2.5rem'}} justify="space-around">
                                <Col xl={12} lg={12} sm={0} xs={0} md={12} style={{paddingLeft:'2.5em',paddingRight:'1em'}}>
                                    <Link href={'/request'}><Button size='large' block style={{backgroundColor:'#F3F6F8',color:'#005EA2',fontSize:'1.25em',fontWeight:'300',textAlign:'center',borderColor:'#005EA2'}} >Cancel</Button></Link>
                                </Col>
                                <Col xl={12} lg={12} sm={0} xs={0} md={12} style={{paddingLeft:'1em',paddingRight:'2.5em'}}>
                                    <Button size='large' block style={{backgroundColor:'#005EA2',color:'#FFFFFF',fontSize:'1.25em',fontWeight:'300',textAlign:'center'}}>Scan</Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    {/*mobile screen */}
                    <Col xl={0} lg={0} xs={24} sm={24} md={0}  >
                        <div style={{backgroundImage:'url(\'images/Rectangle 13.png\')',width:'100%'}}>
                            <Row>
                                <Col span={20} style={{textAlign:'center',color:'white',paddingTop:'2rem',fontSize:'1.25em',fontWeight:'400',paddingLeft:'2rem'}}>Scan QR Code</Col>
                                <Col span={4} style={{marginTop:'1.2rem'}}>
                                    <div style={{backgroundColor:'#D9D9D9',borderRadius:'2rem',width:'2.5em',height:'2.5em',textAlign:'center',marginBottom:'1rem'}}>
                                        <img src='images/iconoir_cancel.png' style={{marginTop:'0.5rem'}} ></img>
                                    </div>
                                    <div style={{backgroundColor:'#D9D9D9',borderRadius:'2rem',width:'2.5em',height:'2.5em',textAlign:'center'}}><img src='images/carbon_light.png' style={{marginTop:'0.5rem'}}></img></div>
                                </Col>
                            </Row>
                            <div  style={{marginTop:'5rem',textAlign:'center',paddingBottom:'3rem'}}>
                                <img  src='images/scan-VvuIPnYlYK.png' width={'230rem'}></img>
                            </div>
                        </div>
                    </Col>
                    {/*web screen */}
                    <Col xl={12} lg={12} xs={0} sm={0} md={10} style={{backgroundColor:'#F3F6F8',paddingTop:'3rem',paddingBottom:'3rem',paddingLeft:'1.5rem',paddingRight:'3rem',margin:'0'}}>
                        <div style={{backgroundColor:'#FFFFFF',borderRadius:'0.5em'}}>
                            <div style={{color:'#3A4756',fontSize:'1.25em',fontWeight:'400',textAlign:'center',padding:'2.5rem',marginBottom:'5rem'}}>Or enter the number manually</div>
                            <div style={{paddingLeft:'2rem',paddingRight:'2rem'}}>
                            <div style={{fontWeight:'300',color:'#3A4756',marginTop:'0.5em',marginBottom:'0.5em',fontSize:'1em'}}>Enter Sales Order Number</div>
                            <Input type='text' onChange={handleInputChange} value={inputField}  style={{padding:'0.8rem'}} size='large' placeholder='Type the order number here'></Input>
                            {
                                showError ? (<div style={{color:'red',fontSize:'0.9rem'}}>
                                    {errorMessage}
                                </div>) : (<></>)
                            }
                            <Button size='large' block onClick={showDrawer} style={{backgroundColor:'#005EA2',color:'#FFFFFF',fontSize:'1.25em',fontWeight:'300',textAlign:'center',marginTop:'2rem',marginBottom:'5rem'}}>Continue</Button>
                            </div>
                        </div>
                    </Col>
                    {/*mobile screen */}
                    <Col xl={0} lg={0} xs={24} sm={24} md={0} style={{backgroundImage:'url(\'images/Rectangle 13.png\')',width:'100%'}}>
                        <div style={{backgroundColor:'#FFFFFF',borderTopLeftRadius:'2em',borderTopRightRadius:'2em'}}>
                            <div style={{color:'#3A4756',fontSize:'1.25em',fontWeight:'400',textAlign:'center',padding:'2.5rem'}}>Or enter the number manually</div>
                            <div style={{paddingLeft:'2rem',paddingRight:'2rem'}}>
                            <div style={{fontWeight:'300',color:'#3A4756',marginTop:'0.5em',marginBottom:'0.5em',fontSize:'1em'}}>Enter Sales Order Number</div>
                            <Input type='text' onChange={handleInputChange} value={inputField} style={{padding:'0.8rem'}} size='large' placeholder='Type the order number here'></Input>
                            {
                                showError ? (<div style={{color:'red',fontSize:'0.9rem'}}>
                                    {errorMessage}
                                </div>) : (<></>)
                            }
                            <Button size='large' onClick={showDrawer} block style={{backgroundColor:'#005EA2',color:'#FFFFFF',fontSize:'1.25em',fontWeight:'300',textAlign:'center',marginTop:'2rem',marginBottom:'5rem'}}>Continue</Button>
                            </div>
                        </div>
                    </Col>
                    
                </Row>
                
                <Drawer height="95vh" title={
                    <Row>
                        <Col  style={{fontSize:'1.25rem',fontWeight:'400',color:'#0A335B',marginRight:'1em',paddingBottom:'1rem'}}>New Discount Request</Col>
                        <Col>
                            <Row >
                                <Col style={{color:'#4F575E',backgroundColor:'#DEE2E6',textAlign:'center',borderRadius:'1rem',fontSize:'0.8.1rem',fontWeight:'300',paddingTop:'0.3rem',paddingBottom:'0.3rem',paddingLeft:'1em',paddingRight:'1em',marginRight:'1em',marginBottom:'1rem'}}>No of items: {salesOrderData.lines.length}</Col>
                                <Col style={{color:'#4F575E',backgroundColor:'#DEE2E6',textAlign:'center',borderRadius:'1rem',fontSize:'0.8.1rem',fontWeight:'300',paddingTop:'0.3rem',paddingBottom:'0.3rem',paddingLeft:'1em',paddingRight:'1em',marginBottom:'1rem'}}>No of discount request items: {discountRequestItemsCount}</Col>
                            </Row>
                        </Col>
                        <Col style={{textAlign:'right',marginLeft:'auto'}}><img style={{paddingTop:'0.5em',cursor:'pointer'}} onClick={handleCancel} src='images/iconoir_cancel.png'></img></Col>
                    </Row>} 
                         
                        styles={{content:{backgroundColor:'#F3F6F8',minHeight:'39rem',borderTopRightRadius:'1rem',borderTopLeftRadius:'1rem'},header:{backgroundColor:'#F3F6F8',paddingBottom:'0'},body:{paddingBottom:'0',paddingTop:'0'}}}
                        open={isDrawerOpen} 
                        placement={'bottom'}
                        closable={false}

                    >
                    <Form
                        onFinish={ReadFormData}
                        form={form}  
                        >
                        <Row gutter={[0, 16]} style={{backgroundColor:'#FFFFFF',padding:'1.5em',borderRadius:'0.5rem',marginBottom:'0.7rem',borderColor:'#DEE2E6'}}>

                            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                
                                <span style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>Sales Order Number</span>
                                <span style={{color:'#4F575E',fontWeight:'600',fontSize:'0.9775em',marginLeft:'0.5em'}}>{salesOrderData.salesOrderNo}</span>
                                
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                <span style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>Order Amount</span>
                                <span style={{color:'#4F575E',fontWeight:'600',fontSize:'0.9775em',marginLeft:'0.5em'}}>{salesOrderData.orderAmount}</span>
                                
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                <span style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>Total Discount Amount</span>
                                <span style={{color:'#4F575E',fontWeight:'600',fontSize:'0.9775em',marginLeft:'0.5em'}}></span>
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                <span style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>Store</span>
                                <span style={{color:'#4F575E',fontWeight:'600',fontSize:'0.9775em',marginLeft:'0.5em'}}>{salesOrderData.store}</span>
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                <span style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>Sales Order Date</span>
                                <span style={{color:'#4F575E',fontWeight:'600',fontSize:'0.9775em',marginLeft:'0.5em'}}>{displayedDate}</span>
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                <span style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>Customer Name</span>
                                <span style={{color:'#4F575E',fontWeight:'600',fontSize:'0.9775em',marginLeft:'0.5em'}}>{salesOrderData.customerName}</span>
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                <span style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>Customer Contact</span>
                                <span style={{color:'#4F575E',fontWeight:'600',fontSize:'0.9775em',marginLeft:'0.5em'}}>{salesOrderData.customerContact}</span>
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={6} xl={6} style={{maxHeight:'2rem'}}>
                                <div style={{display:'flex'}}>
                                <span style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>Loyalty Customer</span>
                                <Form.Item name='loyaltyCustomer'><Select style={{width:'8rem',fontSize:'0.785em',fontWeight:'600',color:'#4F575E',marginLeft:'0.5em'}} options={optionForLoyaltyCustomer}></Select></Form.Item>
                                </div>
                            </Col>
                        </Row>
                        <div style={{overflowY:'scroll',height:'22rem'}}> 
                        {
                            salesOrderData.lines?.map((product,index) =>{
                                return(
                                   <Card style={{marginBottom:'0.7rem'}} styles={{ body: {padding:0} }} >
                                    <Row gutter={[0,16]} style={{margin:'0',padding:'1.5em'}}>
                                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                            <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>Material Group</div>
                                            <div style={{color:'#4F575E',fontWeight:'600',fontSize:'0.8125rem',paddingTop:'0.6em'}}></div>
                                        </Col>
                                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                        <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>Brand Name</div>
                                            <div style={{color:'#4F575E',fontWeight:'600',fontSize:'0.8125rem',paddingTop:'0.6em'}}>{product.brand}</div>
                                        </Col>
                                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                        <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>Item Code</div>
                                            <div style={{color:'#4F575E',fontWeight:'600',fontSize:'0.8125rem',paddingTop:'0.6em'}}>{product.productCode}</div>
                                        </Col>
                                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                        <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>Item Description</div>
                                            <div style={{color:'#4F575E',fontWeight:'600',fontSize:'0.8125rem',paddingTop:'0.6em'}}></div>
                                        </Col>
                                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                        <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>Order Qty</div>
                                            <div style={{color:'#4F575E',fontWeight:'600',fontSize:'0.8125rem',paddingTop:'0.6em'}}>{product.orderQty}</div>
                                        </Col>
                                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                            <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>Line Total</div>
                                            <div style={{color:'#4F575E',fontWeight:'600',fontSize:'0.8125rem',paddingTop:'0.6em'}}></div>
                                        </Col>
                                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                        <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>ESL Was Price</div>
                                            <div style={{color:'#4F575E',fontWeight:'600',fontSize:'0.8125rem',paddingTop:'0.6em'}}></div>
                                        </Col>
                                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                        <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>ESL Now Price</div>
                                            <div style={{color:'#4F575E',fontWeight:'600',fontSize:'0.8125rem',paddingTop:'0.6em'}}></div>
                                        </Col>
                                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                            <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em',paddingBottom:'0.6em'}}>Discount Type</div>
                                            <Form.Item name={`discountType[${index}]`}>
                                            <Select value={selectedValue}  style={{width:'8rem',fontSize:'0.785em',fontWeight:'600',color:'#4F575E'}} onChange={handleSelectedOption} options={optionForDiscountType}></Select>
                                            </Form.Item>
                                        </Col>

                                        {
                                            hide ? (
                                            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                                <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em',paddingBottom:'0.6em'}}>{dropDownTitle} Discount Reason</div>
                                                <Form.Item name={`discountReason[${index}]`}>
                                                    <Select  style={{width:'8rem',fontSize:'0.785em',fontWeight:'600',color:'#4F575E'}} options={optionForDiscountReason}></Select>
                                                </Form.Item>
                                            </Col>)
                                            :(<></>)
                                        }
                                        {
                                            hide ? (<Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                                <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em',paddingBottom:'0.6em'}}>{dropDownTitle} Value</div>
                                                    <Form.Item name={`discountValue[${index}]`}>
                                                        <Input addonBefore="AED" style={{width:'8rem'}}/>   
                                                    </Form.Item>
                                                </Col>)
                                            :(<></>)
                                        }
                                        {
                                            hide ? (
                                            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                                <Row>
                                                    <Col>
                                                <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em',paddingBottom:'0.6em'}}>Remarks</div>
                                                <Form.Item name={`remarks[${index}]`}>
                                                    <Input style={{width:'8rem'}} placeholder='Enter Remarks'/>
                                                </Form.Item>
                                                </Col>
                                                <Col  style={{marginLeft:'auto',marginTop:'2rem'}}>
                                                    <div style={{display:'flex',cursor:'pointer'}} onClick={handleModalThree}>
                                                        <img src='images/ion_attach.png'></img>
                                                        <div  style={{textDecoration:'underline',fontSize:'0.7775rem',cursor:'pointer'}}>Attach File</div>
                                                    </div>
                                                </Col>
                                                </Row>
                                            </Col>)
                                            :(<></>)
                                        }
                                        {
                                            unHideColumns ? (
                                                <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                                </Col>
                                            ): (<></>)
                                        }
                                        {
                                            unHideColumns ? (
                                                <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                                    <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em',paddingBottom:'0.6em'}}>SDG Discount Reason</div>
                                                    <Form.Item name={`SDGdiscountReason[${index}]`}>
                                                    <Select  style={{width:'8rem',fontSize:'0.785em',fontWeight:'600',color:'#4F575E'}} options={optionForDiscountReason}></Select>
                                                    </Form.Item>
                                                </Col>
                                            ) : (<></>)
                                        }
                                        {
                                            unHideColumns ? (
                                                <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                                    <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em',paddingBottom:'0.6em'}}>SDG Discount Value</div>
                                                    <Form.Item name={`SDGdiscountValue[${index}]`}>
                                                    <Input addonBefore="AED" style={{width:'8rem'}}/>
                                                    </Form.Item>
                                                </Col>
                                            ) :(<></>)
                                        }
                                        {
                                            unHideColumns ? (
                                                <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                                    <Row>
                                                        <Col>
                                                    <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em',paddingBottom:'0.6em'}}>Remarks</div>
                                                    <Form.Item name={`SDGremarks${index}`}>
                                                        <Input style={{width:'8rem'}} placeholder='Enter Remarks'/>
                                                    </Form.Item>
                                                    </Col>
                                                    <Col  style={{marginLeft:'auto',marginTop:'2rem'}}>
                                                        <div style={{display:'flex',cursor:'pointer'}} onClick={handleModalThree}>
                                                            <img src='images/ion_attach.png'></img>
                                                            <div style={{textDecoration:'underline',fontSize:'0.7775rem'}} >Attach File</div>
                                                        </div>
                                                    </Col>
                                                    </Row>
                                                </Col>
                                            ) : (<></>)
                                        }
                                        
                                    </Row>
                                    <div style={{paddingLeft:'1.5rem',paddingRight:'1.5rem',paddingBottom:'1.5rem',paddingTop:'0'}}>
                                    <div style={{fontSize:'0.9775em',fontWeight:'600',color:'#4F575E',borderBottom:'0.01em solid #DEE2E6'}}>Services</div>
                                    <Row style={{marginTop:'0.5em'}}>
                                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                            <span style={{color:'#718096',fontSize:'0.9775em',fontWeight:'400'}}>EW Type</span>
                                            <span style={{color:'#005EA2',fontSize:'0.9775em',fontWeight:'600',marginLeft:'1rem'}}>{product.services.extendedWarranty}</span>
                                        </Col>
                                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                            <span style={{color:'#718096',fontSize:'0.9775em',fontWeight:'400'}}>EW Value</span>
                                            <span style={{color:'#005EA2',fontSize:'0.9775em',fontWeight:'600',marginLeft:'1rem'}}></span>
                                        </Col>
                                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                            <span style={{color:'#718096',fontSize:'0.9775em',fontWeight:'400'}}>DG Shield</span>
                                            <span style={{color:'#005EA2',fontSize:'0.9775em',fontWeight:'600',marginLeft:'1rem'}}></span>
                                        </Col>
                                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                            <span style={{color:'#718096',fontSize:'0.9775em',fontWeight:'400'}}>DG Shield Value</span>
                                             <span style={{color:'#005EA2',fontSize:'0.9775em',fontWeight:'600',marginLeft:'1rem'}}></span>
                                         </Col>
                                     </Row>
                                     </div>
                                 </Card>
                                )
                                
                            })
                        }                      
                            
                            
                        </div>
                        <Row justify={'end'} gutter={[10,0]} style={{maxHeight:'1rem',marginTop:'1.5rem'}}>
                            <Col>
                                <Button key="back" onClick={handleCancel} style={{borderColor:'#005EA2',color:'#005EA2'}}>
                                    Cancel
                                </Button>
                            </Col>
                            <Col>
                        <Form.Item>        
                        <Button type="primary" htmlType="submit" style={{backgroundColor:'#005EA2'}}>
                            Submit
                        </Button>
                        </Form.Item></Col>
                        </Row>
                    </Form>               
                </Drawer>
                <Modal open={isModalSuccessOpen} footer={[<Button onClick={handleOk}>Ok</Button>]}>
                    <h3>Request Created Successfully</h3>
                </Modal>
                <Modal open={isModalConfirmOpen} title='Confirm Discount Request' onCancel={handleNo} footer={[<Button onClick={handleNo}>No</Button>,<Button onClick={handleYes}>Yes</Button>]}>
                        Would you like to submit your discount request?
                </Modal>
                <Modal open={isModalThreeOpen} onCancel={handleModalThreeClose} title='Upload Files' footer=''>
                    <Dragger {...props}>
                        <img src='images/simple-line-icons_cloud-upload.png'></img>
                        <p>Drag & Drop Your Files Here </p>
                        <p>Or</p>
                        <Button  className="ant-upload-text" style={{backgroundColor:'#005EA2',color:'#FFFFFF'}}>Browse</Button>

                    </Dragger>
                </Modal>       
            </div>
        </>
    )
}
export default NewRequest
