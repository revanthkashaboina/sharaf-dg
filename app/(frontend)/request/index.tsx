'use client'
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link'
import {Col, Row,Card,Button,Input, ConfigProvider} from 'antd';
import { Collapse } from 'antd';
import type { CollapseProps } from 'antd';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const Request = () => {
    const[hide,setHide] = useState(true)
    const[imageUrl,setImageUrl] = useState('Group.png')
    const UserChange = (key: string | string[]) => {
        console.log(key);
        if(hide!){
            setHide(false)
            setImageUrl('GroupReverse.png')
        }else{
            setHide(true)
            setImageUrl('Group.png')
        }
      };
      const onChange = (key: string) => {
        console.log(key);
      };
      const items: CollapseProps['items'] = [
        {
          key: '1',
          label: <div>
                    <Row>
                        {/* <Col xs={22} sm={22} md={22} lg={23} xl={23}> */}
                            <Row gutter={[8,12]} style={{padding:'0.4em'}}>
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
                                    <span style={{fontWeight:'400',fontSize:'1em',color:'#718096'}}>Store</span>
                                    <span style={{marginLeft:'0.5em',color:'#4F575E',fontWeight:'500',fontSize:'1em'}}>DM01-Dubai mall</span>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                    <span style={{fontWeight:'400',fontSize:'1em',color:'#718096'}}>Sales Order Date</span>
                                    <span style={{marginLeft:'0.5em',color:'#4F575E',fontWeight:'500',fontSize:'1em'}}>10/02/2024</span>
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
                        {/* </Col>
                        <Col xs={2} sm={2} md={2} lg={1} xl={1} style={{textAlign:'right'}}><img src={`images/${imageUrl}`}></img></Col> */}
                    </Row>
                    

                    {hide?  <Row style={{marginTop:'0.6rem'}}>
                                <Row style={{marginLeft:'0.4em'}}>
                                    <Col  style={{marginRight:'0.5em'}}><img src='images/VectorGreen.png'></img></Col>
                                    <Col style={{fontWeight:'400',fontSize:'0.9em',color:'#3A4756'}}>In-Progress(1)</Col>                
                                </Row>
                                <Row style={{marginLeft:'1em'}}>
                                    <Col  style={{marginRight:'0.5em'}}><img src='images/lets-icons_done-ring-round.png'></img></Col>
                                    <Col style={{fontWeight:'400',fontSize:'0.9em',color:'#3A4756'}}>Approved(1)</Col>                
                                </Row>
                                <Row style={{marginLeft:'auto'}}><Link href={'/request-details'}><Button size='small' style={{color:'#005EA2',borderColor:'#005EA2',fontWeight:'400',fontSize:'1em',marginRight:'0.4em'}}>View Details</Button></Link></Row>
                                
                            </Row> : <div></div>}   
                         
          </div>,
          
          children: <div style={{backgroundColor:'#FFFFFF',padding:'0.4em'}}>
                        <Row style={{marginBottom:'0.5em'}}>
                            <Col span={12}>
                            <span style={{color:'#005EA2',fontWeight:'400',fontSize:'1em'}}>#12345 </span> 
                            </Col>
                            
                        </Row>
                        <div>
                        <Row gutter={[8,8]} >
                        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                            <span style={{fontWeight:'400',fontSize:'0.9em',color:'#718096'}}>Material Group </span>
                            <span style={{marginLeft:'0.5em',color:'#4F575E',fontWeight:'600',fontSize:'0.9em'}}>Smart Watch</span>
                        </Col>
                        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                            <span style={{fontWeight:'400',fontSize:'0.9em',color:'#718096'}}>Brand Name </span>
                            <span style={{marginLeft:'0.5em',color:'#4F575E',fontWeight:'600',fontSize:'0.9em'}}>Titan</span>
                        </Col>
                        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                            <span style={{fontWeight:'400',fontSize:'0.9em',color:'#718096'}}>Item Code</span>
                            <span style={{marginLeft:'0.5em',color:'#4F575E',fontWeight:'600',fontSize:'0.9em'}}>0210292</span>
                        </Col>
                        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                            <span style={{fontWeight:'400',fontSize:'0.9em',color:'#718096'}}>Item Description</span>
                            <span style={{marginLeft:'0.5em',color:'#4F575E',fontWeight:'600',fontSize:'0.9em'}}>Titan Fastrack Reflex Vybe BLK</span>
                        </Col>
                        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                            <span style={{fontWeight:'400',fontSize:'0.9em',color:'#718096'}}>Order Qty</span>
                            <span style={{marginLeft:'0.5em',color:'#4F575E',fontWeight:'600',fontSize:'0.9em'}}>1</span>
                        </Col>
                        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                            <span style={{fontWeight:'400',fontSize:'0.9em',color:'#718096'}}>Line Total</span>
                            <span style={{marginLeft:'0.5em',color:'#4F575E',fontWeight:'600',fontSize:'0.9em'}}>AED 1000</span>
                        </Col>

                        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                            <span style={{fontWeight:'400',fontSize:'0.9em',color:'#718096'}}>ESL Was Price</span>
                            <span style={{marginLeft:'0.5em',color:'#4F575E',fontWeight:'600',fontSize:'0.9em'}}>AED 2000</span>
                        </Col>

                        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                            <span style={{fontWeight:'400',fontSize:'0.9em',color:'#718096'}}>ESL Now Price</span>
                            <span style={{marginLeft:'0.5em',color:'#4F575E',fontWeight:'600',fontSize:'0.9em'}}>AED 1000</span>
                        </Col>
                        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                            <span style={{fontWeight:'400',fontSize:'0.9em',color:'#718096'}}>Discount Type</span>
                            <span style={{marginLeft:'0.5em',color:'#4F575E',fontWeight:'600',fontSize:'0.9em'}}>Brand Discount</span>
                        </Col>
                        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                            <span style={{fontWeight:'400',fontSize:'0.9em',color:'#718096'}}>Brand Discount Reason</span>
                            <span style={{marginLeft:'0.5em',color:'#4F575E',fontWeight:'600',fontSize:'0.9em'}}>Brand Discount</span>   
                        </Col>
                        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                            <span style={{fontWeight:'400',fontSize:'0.9em',color:'#718096'}}>Brand Discount Value</span>
                            <span style={{marginLeft:'0.5em',color:'#4F575E',fontWeight:'600',fontSize:'0.9em'}}>AED 100</span>
                        </Col>
                        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                            <span style={{fontWeight:'400',fontSize:'0.9em',color:'#718096'}}>Discount Request Value (%)</span>
                            <span style={{marginLeft:'0.5em',color:'#4F575E',fontWeight:'600',fontSize:'0.9em'}}>10</span>
                        </Col>
                        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                            <span style={{fontWeight:'400',fontSize:'0.9em',color:'#718096'}}>Approver</span>
                            <span style={{marginLeft:'0.5em',color:'#4F575E',fontWeight:'600',fontSize:'0.9em'}}>Apoorva Shinde</span>
                        </Col>
                        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                            <span style={{fontWeight:'400',fontSize:'0.9em',color:'#718096'}}>Remarks</span>
                            <span style={{marginLeft:'0.5em',color:'#4F575E',fontWeight:'600',fontSize:'0.9em'}}>Known Customer</span>
                        </Col>
                        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                            <span style={{fontWeight:'400',fontSize:'0.9em',color:'#718096'}}>Time</span>
                            <span style={{marginLeft:'0.5em',color:'#4F575E',fontWeight:'600',fontSize:'0.9em'}}>05 Min: 24 Sec</span>
                        </Col>
                        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                            <span style={{fontWeight:'400',fontSize:'0.9em',color:'#718096'}}>Status</span>
                            <span style={{backgroundColor:'#E08907',borderRadius:'1rem',padding:'0.5em',marginLeft:'0.5em',fontWeight:'600',fontSize:'0.9em',color:'white'}}>Pending</span>
                        </Col>

                        </Row>
                        </div>

                        <Row style={{marginTop:'2rem'}}>
                                <Row >
                                    <Col  style={{marginRight:'0.5em'}}><img src='images/VectorGreen.png'></img></Col>
                                    <Col style={{fontWeight:'400',fontSize:'0.9em',color:'#3A4756'}}>In-Progress(1)</Col>                
                                </Row>
                                <Row style={{marginLeft:'1em'}}>
                                    <Col  style={{marginRight:'0.5em'}}><img src='images/lets-icons_done-ring-round.png'></img></Col>
                                    <Col style={{fontWeight:'400',fontSize:'0.9em',color:'#3A4756'}}>Approved(1)</Col>                
                                </Row>
                                <Row style={{marginLeft:'auto'}}>
                                    <Link href={'/request-details'}><Button size='small' style={{color:'#005EA2',borderColor:'#005EA2',fontWeight:'400',fontSize:'1em'}}>View Details</Button>
                                    </Link>
                                </Row>
                                
                            </Row>
          </div>,
        }
        ]
      const item: TabsProps['items'] = [
        {
          key: '1',
          label: <span style={{color:'#005EA2'}} >In-Progress</span>,
          children: <div style={{backgroundColor:'#F3F6F8',minHeight:'34.81rem'}}>
          {/*Cards */}
          <div>
              <Row  gutter={[16,16]} style={{ padding: '1rem',margin:'0'}}>
                <Col xs={0} sm={0} md={0} lg={0} xl={2}></Col>
                <Col xs={24} sm={12} md={6} lg={6} xl={4}>
                    <Card styles={{
                        body: {padding:10,paddingLeft:18,paddingTop:18}
                    }}>
                        <div>
                            <div  style={{color:'#3A4756',fontWeight:'400',fontSize:'0.9em'}}>Today’s Requests</div>
                            <div  style={{fontWeight:'600',fontSize:'1.80em',color:'#2F2F2F',}}>2</div>  
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} xl={4}>
                    <Card styles={{
                        body: {padding:10,paddingLeft:18,paddingTop:18}
                    }}>
                        <div>
                            <div  style={{color:'#3A4756',fontWeight:'400',fontSize:'0.9em'}}>Waiting For Approval</div>
                            <div  style={{fontWeight:'600',fontSize:'1.80em',color:'#2F2F2F',}}>1</div>  
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} xl={4}>
                    <Card styles={{
                        body: {padding:10,paddingLeft:18,paddingTop:18}
                    }}>
                        <div>
                            <div  style={{color:'#3A4756',fontWeight:'400',fontSize:'0.9em'}}>Today’s Approval</div>
                            <div  style={{fontWeight:'600',fontSize:'1.80em',color:'#2F2F2F',}}>1</div>  
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} xl={4}>
                    <Card styles={{
                        body: {padding:10,paddingLeft:18,paddingTop:18}
                    }}>
                        <div>
                            <div  style={{color:'#3A4756',fontWeight:'400',fontSize:'0.9em'}}>Today’s Rejections</div>
                            <div  style={{fontWeight:'600',fontSize:'1.80em',color:'#2F2F2F',}}>0</div>  
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} xl={4}>
                    <Card styles={{
                        body: {padding:10,paddingLeft:18,paddingTop:18}
                    }}>
                        <div>
                            <div  style={{color:'#3A4756',fontWeight:'400',fontSize:'0.9em'}}>Total Requests</div>
                            <div  style={{fontWeight:'600',fontSize:'1.80em',color:'#2F2F2F',}}>12</div>  
                        </div>
                    </Card>
                </Col>
                <Col xs={0} sm={0} md={0} lg={0} xl={2}></Col>
              </Row>
          </div>
          {/*collapse */}
          <div style={{borderWidth:'0.1em', border:'0.1em solid #DEE2E6',margin:'1em',borderRadius:'1rem',padding:'0.6rem'}}>
              <div >
                  <Row>
                      <Col xl={12} lg={12} sm={24} xs={24} md={12}>
                          <Button style={{backgroundColor:'#005EA2',color:'white',width:'7rem',borderRadius:'1rem',marginRight:'0.5em',fontWeight:'400',fontSize:'1.2em',padding:'0',margin:'0.5rem'}}>Store</Button>
                          <Button style={{backgroundColor:'#DEE2E6',color:'#005EA2',width:'7rem',borderRadius:'1rem',marginRight:'0.5em',fontWeight:'400',fontSize:'1.2em',textAlign:'center',padding:'0',margin:'0.5rem'}}>Category</Button>
                          <Button style={{backgroundColor:'#DEE2E6',color:'#005EA2',width:'7rem',borderRadius:'1rem',marginRight:'0.5em',fontWeight:'400',fontSize:'1.2em',textAlign:'center',padding:'0',margin:'0.5rem'}}>Approver</Button>
                          <Button style={{backgroundColor:'#DEE2E6',color:'#005EA2',width:'7rem',borderRadius:'1rem',marginRight:'0.5em',fontWeight:'400',fontSize:'1.2em',textAlign:'center',padding:'0',margin:'0.5rem'}}>Status</Button>
                      </Col>
                      <Col xl={12} lg={12} sm={0} xs={0} md={0}>
                          <Row style={{float:'right'}}>
                              <Col style={{margin:'0.5em'}}>
                                  <Input
                                    style={{marginRight:'0.5em'}}
                                      placeholder='Search'
                                      prefix={<img src='images/mingcute_search-line.png'></img>}
                                  />    
                              </Col>
                              <Col style={{margin:'0.5em'}}>
                                  <Link href={'/new-request'}><Button style={{color:'white',backgroundColor:'#005EA2',fontWeight:'400',fontSize:'1em',paddingTop:'0',paddingBottom:'0'}}><span style={{marginRight:'0.5em'}}>+</span>New Request</Button></Link>
                              </Col>
                          </Row>
                      </Col>
                      <Col xl={0} lg={0} sm={24} xs={24} md={12}>
                          <Row >
                              <Col style={{margin:'0.5em'}}>
                                  <Input
                                    style={{marginRight:'0.5em'}}
                                      placeholder='Search' 
                                      prefix={<img src='images/mingcute_search-line.png'></img>}
                                  />    
                              </Col>
                              <Col style={{margin:'0.5em'}}>
                                  <Link href={'/new-request'}><Button style={{color:'white',backgroundColor:'#005EA2',fontWeight:'400',fontSize:'1.2em',paddingTop:'0',paddingBottom:'0'}}><span style={{marginRight:'0.5em'}}>+</span>New Request</Button></Link>
                              </Col>
                          </Row>
                      </Col>
                  </Row>    
              </div>
              <Collapse expandIconPosition={'end'} collapsible={'icon'} expandIcon={(panelProps) => <div {...panelProps}><img src={`images/${imageUrl}`}  /></div>} style={{backgroundColor:'#FFFFFF',marginTop:'0.6rem'}}  onChange={UserChange} items={items} />
              
          </div>
      </div>,
        },
        {
          key: '2',
          label: 'Closed',
          children: 'Content of Tab Pane 2',
        }];

    return(
            <div >
                {/*Tabs */}
                <Tabs tabBarStyle={{paddingLeft:'1.5rem',marginBottom:'0'}} items={item} style={{margin:'0',padding:'0',overflow: 'auto',width:'100%'}} size={'small'}  onChange={onChange} />
            </div>
        
    )
}
export default Request