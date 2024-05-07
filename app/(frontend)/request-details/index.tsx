'use client'
import {Row,Col,Table,Card} from 'antd';
import type { TableProps } from 'antd';
import Link from 'next/link';
import './index.css'
// interface DataType {
//     key: string;
//     requestedTo: string;
//     material: string;
//     materialDesc: string;
//     brand: string;
//     brandName:string;
//     materialGroup: string;
//     materialGroupDesc: string;
//     discountType: string;
//     EWDGSValue: string;
//     qtyInvoice: string;
//     reasonForDiscount: string;
//     ESLWasPrice: string;
//     discountAmount: string;
//     remarks:string;
//     status: string
//     button:string;
//   }

//   const columns: TableProps<DataType>['columns'] = [
//         {
//             title: 'Requested To',
//             dataIndex: 'requestedTo',
//             key: 'requestedTo',
//         },
//         {
//             title: 'Material',
//             dataIndex: 'material',
//             key: 'material',
//         },
//         {
//             title: 'Material Description',
//             dataIndex: 'materialDesc',
//             key: 'materialDesc',
//         },
//         {
//             title: 'Brand',
//             dataIndex: 'brand',
//             key: 'brand',
//         },
//         {
//             title: 'Brand Name',
//             dataIndex: 'brandName',
//             key: 'brandName',
//         },
//         {
//             title:'Material Group',
//             dataIndex:'materialGroup',
//             key:'materialGroup'
//         },
//         {
//             title:'Material Group Description',
//             dataIndex:'materialGroupDesc',
//             key:'materialGroupDesc'
//         },
//         {
//             title:'Discount Type',
//             dataIndex:'discountType',
//             key:'discountType'
//         },
//         {
//             title:'EW+DGS Value',
//             dataIndex:'EWDGSValue',
//             key:'EWDGSValue'
//         },
//         {
//             title:'Qty Invoice',
//             dataIndex:'qtyInvoice',
//             key:'qtyInvoice'
//         },
//         {
//             title:'Reason For Discount',
//             dataIndex:'reasonForDiscount',
//             key:'reasonForDiscount'
//         },
//         {
//             title:'ESL Was Price',
//             dataIndex:'ESLWasPrice',
//             key:'ESLWasPrice'
//         },
//         {
//             title:'Discount Amount',
//             dataIndex:'discountAmount',
//             key:'discountAmount'
//         },
//         {
//             title:'Remarks',
//             dataIndex:'remarks',
//             key:'remarks'
//         },
//         {
//             title:'Status',
//             dataIndex:'status',
//             key:'status',
//             render: ()=>(
//                 <div style={{borderRadius:'0.5em',backgroundColor:'#C0780B',color:'#FFFFFF',fontWeight:'400',fontSize:'1em',paddingLeft:'0.3em',paddingRight:'0.3em'}}>Pending</div>
//             )
//         },
//         {
//             title:'',
//             dataIndex:'button',
//             key:'button',
//             render: ()=>(
//                 <img src='images/ion_attach.png'></img>
//             )
//         }
//     ]
//     const data: DataType[] = [
//         {
//             key: '1',
//             requestedTo: '10201894',
//             material: '1292749',
//             materialDesc: 'Titan 38078PP01 Fastrack Reflex Vybe BLK',
//             brand: 'T026',
//             brandName: 'Titan',
//             materialGroup: 'R12456',
//             materialGroupDesc: 'Smart watches',
//             discountType: 'EW',
//             EWDGSValue: '100',
//             qtyInvoice: '2',
//             reasonForDiscount: 'Price Match',
//             ESLWasPrice: '5200',
//             discountAmount: '5000',
//             remarks: 'SH Discount',
//             status: 'pending',
//             button:''
//           },
          
//         ]  
export function RequestDetails(){
    return(
        <>
            <div>
                <div style={{backgroundColor:'#F3F6F8',paddingLeft:'1.5em',paddingRight:'1.5em',minHeight:'37rem'}}>
                    {/*title */}
                    <Row style={{paddingTop:'1.2rem',paddingBottom:'1.2rem'}}>
                        <Col><Link href={'/request'}><img src='images/ep_back.png'></img></Link></Col>
                        <Col style={{fontWeight:'400',fontSize:'1.25rem',color:'#0A335B',marginRight:'1em'}}>
                            <span style={{marginLeft:'0.5em'}}>Request Number</span>
                            <span style={{marginLeft:'0.5em'}}>#12345</span>
                        </Col>
                        <Row >
                            <Col style={{color:'#4F575E',backgroundColor:'#DEE2E6',textAlign:'center',borderRadius:'1rem',fontSize:'0.8.1rem',fontWeight:'300',paddingTop:'0.3rem',paddingBottom:'0.3rem',paddingLeft:'1em',paddingRight:'1em',marginRight:'0.5em',marginBottom:'1rem'}}>No of items: 0</Col>
                            <Col style={{color:'#4F575E',backgroundColor:'#DEE2E6',textAlign:'center',borderRadius:'1rem',fontSize:'0.8.1rem',fontWeight:'300',paddingTop:'0.3rem',paddingBottom:'0.3rem',paddingLeft:'1em',paddingRight:'1em',marginBottom:'1rem',marginRight:'0.5em'}}>No of discount request items: 0</Col>
                            <Col style={{color:'#4F575E',backgroundColor:'#DEE2E6',textAlign:'center',borderRadius:'1rem',fontSize:'0.8.1rem',fontWeight:'300',paddingTop:'0.3rem',paddingBottom:'0.3rem',paddingLeft:'1em',paddingRight:'1em',marginBottom:'1rem'}}>Requested On: 10-02-2024 11:10:09</Col>
                        </Row>
                    </Row>
                    {/* details*/}
                    <Row gutter={[16,16]}  style={{backgroundColor:'#FFFFFF',borderRadius:'0.5em',margin:'0',padding:'1.5rem'}}>
                                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                    <span style={{fontWeight:'400',fontSize:'1em',color:'#718096'}}>Sales Order Number </span>
                                    <span style={{marginLeft:'0.5em',color:'#4F575E',fontWeight:'500',fontSize:'1em'}}>EBD/02021</span>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                    <span style={{fontWeight:'400',fontSize:'1em',color:'#718096'}}>Order Amount</span>
                                    <span style={{marginLeft:'0.5em',color:'#4F575E',fontWeight:'500',fontSize:'1em'}}>AED 2000</span>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                    <span style={{fontWeight:'400',fontSize:'1em',color:'#718096'}}>Total Discount Amount</span>
                                    <span style={{marginLeft:'0.5em',color:'#4F575E',fontWeight:'500',fontSize:'1em'}}>AED 100</span>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                    <span style={{fontWeight:'400',fontSize:'1em',color:'#718096'}}>Sales Order Date</span>
                                    <span style={{marginLeft:'0.5em',color:'#4F575E',fontWeight:'500',fontSize:'1em'}}>10/02/2024</span>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                    <span style={{fontWeight:'400',fontSize:'1em',color:'#718096'}}>Store</span>
                                    <span style={{marginLeft:'0.5em',color:'#4F575E',fontWeight:'500',fontSize:'1em'}}>DM01-Dubai mall</span>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                    <span style={{fontWeight:'400',fontSize:'1em',color:'#718096'}}>Customer Name</span>
                                    <span style={{marginLeft:'0.5em',color:'#4F575E',fontWeight:'500',fontSize:'1em'}}>Philip Jones</span>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                    <span style={{fontWeight:'400',fontSize:'1em',color:'#718096'}}>Customer Contact</span>
                                    <span style={{marginLeft:'0.5em',color:'#4F575E',fontWeight:'500',fontSize:'1em'}}>+971234567890</span>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                    <span style={{fontWeight:'400',fontSize:'1em',color:'#718096'}}>Loyalty Customer</span>
                                    <span style={{marginLeft:'0.5em',color:'#4F575E',fontWeight:'500',fontSize:'1em'}}>NA</span>
                                </Col>
                            </Row>
                    {/* table*/}
                    {/* <div style={{backgroundColor:'#FFFFFF'}}><Table pagination={false} columns={columns} style={{overflowY:'scroll'}}  dataSource={data} size='small' /></div> */}
                    <div style={{overflowY:'scroll',height:'20rem',marginTop:'1rem',marginRight:'0',marginLeft:'0'}}>                       
                            <Card style={{marginBottom:'0.7rem'}} styles={{ body: {padding:0} }} >
                                <Row>
                                    <Col xs={14} sm={16} md={19} lg={20} xl={21}>
                                    <Row gutter={[16,20]} style={{padding:'2em'}}>
                                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                        <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>Material Group</div>
                                        <div style={{color:'#4F575E',fontWeight:'600',fontSize:'0.8125rem',paddingTop:'0.6em'}}>Smart Watches</div>
                                    </Col>
                                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                    <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>Brand Name</div>
                                        <div style={{color:'#4F575E',fontWeight:'600',fontSize:'0.8125rem',paddingTop:'0.6em'}}>Titan</div>
                                    </Col>
                                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                    <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>Item Code</div>
                                        <div style={{color:'#4F575E',fontWeight:'600',fontSize:'0.8125rem',paddingTop:'0.6em'}}>0210292</div>
                                    </Col>
                                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                    <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>Item Description</div>
                                        <div style={{color:'#4F575E',fontWeight:'600',fontSize:'0.8125rem',paddingTop:'0.6em'}}>Titan Fastrack Reflex Vybe BLK</div>
                                    </Col>
                                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                    <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>Order Qty</div>
                                        <div style={{color:'#4F575E',fontWeight:'600',fontSize:'0.8125rem',paddingTop:'0.6em'}}>1</div>
                                    </Col>
                                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                        <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>Line Total</div>
                                        <div style={{color:'#4F575E',fontWeight:'600',fontSize:'0.8125rem',paddingTop:'0.6em'}}>AED 1000</div>
                                    </Col>
                                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                    <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>ESL Was Price</div>
                                        <div style={{color:'#4F575E',fontWeight:'600',fontSize:'0.8125rem',paddingTop:'0.6em'}}>AED 2000</div>
                                    </Col>
                                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                    <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>ESL Now Price</div>
                                        <div style={{color:'#4F575E',fontWeight:'600',fontSize:'0.8125rem',paddingTop:'0.6em'}}>AED 1000</div>
                                    </Col>
                                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                    <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>Discount Type</div>
                                        <div style={{color:'#4F575E',fontWeight:'600',fontSize:'0.8125rem',paddingTop:'0.6em'}}>Brand Discount</div>
                                    </Col>
                                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                    <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>Brand Discount Reason</div>
                                        <div style={{color:'#4F575E',fontWeight:'600',fontSize:'0.8125rem',paddingTop:'0.6em'}}>Price Mismatch</div>
                                    </Col>
                                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                        <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>Brand Discount Value</div>
                                        <div style={{color:'#4F575E',fontWeight:'600',fontSize:'0.8125rem',paddingTop:'0.6em'}}>AED 100</div>
                                    </Col>
                                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                    <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>Discount Request Value (%)</div>
                                        <div style={{color:'#4F575E',fontWeight:'600',fontSize:'0.8125rem',paddingTop:'0.6em'}}>10</div>
                                    </Col>
                                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                    <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>Approver</div>
                                        <div style={{color:'#4F575E',fontWeight:'600',fontSize:'0.8125rem',paddingTop:'0.6em'}}>Apoorva Shinde</div>
                                    </Col>
                                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                    <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>Remarks</div>
                                        <div style={{color:'#4F575E',fontWeight:'600',fontSize:'0.8125rem',paddingTop:'0.6em'}}>Known Customer</div>
                                    </Col>
                                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                    <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>Time</div>
                                        <div style={{color:'#4F575E',fontWeight:'600',fontSize:'0.8125rem',paddingTop:'0.6em'}}>05 Min: 24 Sec</div>
                                    </Col>
                                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                    <div style={{color:'#718096',fontWeight:'400',fontSize:'0.9775em'}}>Status</div>
                                        <div style={{backgroundColor:'#E08907',borderRadius:'1rem',fontWeight:'400',fontSize:'0.9em',color:'white',width:'4rem',marginTop:'0.6em',textAlign:'center'}}>Pending</div>
                                    </Col>
                                    
                                </Row>
                                    </Col>
                                    <Col xs={10} sm={8} md={5} lg={4} xl={3} style={{ display: 'flex', alignItems: 'flex-end' }}>
                                        <Row style={{paddingBottom:'2em'}}>
                                            <Col><img src='images/ion_attach.png'></img></Col>
                                            <Col style={{fontWeight:'400',color:'#005EA2',fontSize:'0.875em'}}>View Attachment</Col>
                                        </Row>
                                    </Col>
                                </Row>
                                
                                <div style={{padding:'2rem'}}>
                                    <div style={{fontSize:'0.9775em',fontWeight:'600',color:'#4F575E',borderBottom:'0.01em solid #DEE2E6'}}>Services</div>
                                    
                                    <Row style={{marginTop:'0.5em'}}>
                                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                            <span style={{color:'#718096',fontSize:'0.9775em',fontWeight:'400'}}>EW Type</span>
                                            <span style={{color:'#005EA2',fontSize:'0.9775em',fontWeight:'600',marginLeft:'1rem'}}>Extended Warranty 36 Months</span>
                                        </Col>
                                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                            <span style={{color:'#718096',fontSize:'0.9775em',fontWeight:'400'}}>EW Value</span>
                                            <span style={{color:'#005EA2',fontSize:'0.9775em',fontWeight:'600',marginLeft:'1rem'}}>AED 150</span>
                                        </Col>
                                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                            <span style={{color:'#718096',fontSize:'0.9775em',fontWeight:'400'}}>DG Shield</span>
                                            <span style={{color:'#005EA2',fontSize:'0.9775em',fontWeight:'600',marginLeft:'1rem'}}>12 Months</span>
                                        </Col>
                                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                                            <span style={{color:'#718096',fontSize:'0.9775em',fontWeight:'400'}}>DG Shield Value</span>
                                            <span style={{color:'#005EA2',fontSize:'0.9775em',fontWeight:'600',marginLeft:'1rem'}}>AED 200</span>
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                            
                            
                            
                        </div>
                </div>
            </div>
        </>
    )
}