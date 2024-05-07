'use client';

import { Row, Col } from 'antd'
import Link from 'next/link'
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut({ redirect: false });
      router.push('/login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

    return (
        <>
            <Row style={{ backgroundColor: '#FCAF17', padding: '0.5rem' }}>
                <Col xs={0} sm={12} md={12} lg={12} xl={12}><Link href={'/'}><img src='images/Rectangle 36@2x 3.png'></img></Link></Col>
                <Col xs={10} sm={0} md={0} lg={0} xl={0}><Link href={'/'}><img width={140} height={50} src='images/Rectangle 36@2x 3.png'></img></Link></Col>
                <Col xs={14} sm={12} md={12} lg={12} xl={12}>
                    <Row style={{ paddingTop: '0.3em', float: 'right' }}>
                        <Col style={{ marginRight: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '2.5em', width: '2.5em', backgroundColor: '#FFFFFF', borderRadius: '1.5rem' }}><img src='images/carbon_notification-new.png'></img></Col>
                        <Col style={{ marginRight: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img style={{ height: '2rem' }} src='images/Line 7.png'></img></Col>
                        <Col style={{ marginRight: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img src='images/Ellipse 205.png'></img></Col>
                        <Col style={{ marginRight: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={handleLogout} ><img src='images/material-symbols_logout.png'></img></Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}