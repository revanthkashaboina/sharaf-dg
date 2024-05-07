'use client'
import Image from "next/image";
import {Row,Col} from 'antd'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter()
  useEffect(()=>{
    router.push('/login')
  },[])
  return (
    <>
      <div style={{backgroundColor:'#F3F6F8',minHeight:'35.99rem'}}>
        {/* <div >
            <Row>
              <Col xl={24} lg={24} md={24} sm={0} xs={0} style={{height:'5rem'}}></Col>
              <Col xl={0} lg={0} md={0} sm={24} xs={24} style={{height:'1.5rem'}}></Col>
            </Row>
            <Row gutter={[35,20]} style={{margin:'0'}} justify={'center'}>
            <Col xl={4} lg={4} md={4} sm={0} xs={0}></Col>
                <Col xl={4} lg={4} md={4} sm={24} xs={24}><div style={{height:'10rem',borderRadius:'0.5em',border:'0.1em solid #E5E0E0',backgroundColor:'#FFFFFF',textAlign:'center',alignContent:'center',fontSize:'1.0125rem',fontWeight:'400'}}>Requester</div></Col>
                <Col xl={4} lg={4} md={4} sm={24} xs={24}><div style={{height:'10rem',borderRadius:'0.5em',border:'0.1em solid #E5E0E0',backgroundColor:'#FFFFFF',textAlign:'center',alignContent:'center',fontSize:'1.0125rem',fontWeight:'400'}}>Requester Mobile</div></Col>
                <Col xl={4} lg={4} md={4} sm={24} xs={24}><div style={{height:'10rem',borderRadius:'0.5em',border:'0.1em solid #E5E0E0',backgroundColor:'#FFFFFF',textAlign:'center',alignContent:'center',fontSize:'1.0125rem',fontWeight:'400'}}>Approver</div></Col>
                <Col xl={4} lg={4} md={4} sm={24} xs={24}><div style={{height:'10rem',borderRadius:'0.5em',border:'0.1em solid #E5E0E0',backgroundColor:'#FFFFFF',textAlign:'center',alignContent:'center',fontSize:'1.0125rem',fontWeight:'400'}}>Approver Mobile</div></Col>
                <Col xl={4} lg={4} md={4} sm={0} xs={0}></Col>
            </Row>
            <Row justify={'center'} style={{marginLeft:'0',marginRight:'0',marginTop:'2rem'}} gutter={[35,20]}>
                <Col xl={4} lg={4} md={4} sm={0} xs={0}></Col>
                <Col xl={4} lg={4} md={4} sm={24} xs={24}><div style={{borderRadius:'0.5em',height:'10rem',border:'0.1em solid #E5E0E0',backgroundColor:'#FFFFFF',textAlign:'center',alignContent:'center',fontSize:'1.0125rem',fontWeight:'400'}}>Reporting</div></Col>
                <Col xl={4} lg={4} md={4} sm={24} xs={24}><div style={{borderRadius:'0.5em',height:'10rem',border:'0.1em solid #E5E0E0',backgroundColor:'#FFFFFF',textAlign:'center',alignContent:'center',fontSize:'1.0125rem',fontWeight:'400'}}>Admin</div></Col>
                <Col xl={4} lg={4} md={4} sm={0} xs={0}></Col>
            </Row>
          </div> */}
      </div>
    </>
  );
}
