// 'use client'
// import {Button, Input,Row,Col} from 'antd';
// import { useState } from 'react';
// import { ConfigProvider } from 'antd';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';


// const Login = () => {
//     const[hideLogin,setHideLogin] = useState(true)
//     function handleOTP (){
//         setHideLogin(false)
//     }
//     function handleOTPChange(value: any){
//         console.log('user otp ',value)
//     }
//     return(
//         <>

//             <div style={{backgroundImage:'url(\'images/login pic.png\')',minHeight:'40.9rem',backgroundColor:'#F3F6F8'}}>
//             <Row>
//               <Col xl={24} lg={24} md={24} sm={0} xs={0} style={{height:'7rem'}}></Col>
//               <Col xl={0} lg={0} md={0} sm={24} xs={24} style={{height:'1.5rem'}}></Col>
//             </Row>
//             <Row>
//                 <Col xl={8} lg={8} md={4} sm={0} xs={0}></Col>
//                 <Col xl={8} lg={8} md={16} sm={24} xs={24}>
//                 {hideLogin ? (<div style={{backgroundColor:'#FFFFFF',border:'0.1em solid #E5E0E0',paddingLeft:'3.2rem',paddingRight:'3.2rem',paddingTop:'1.7rem'}}>
//                         <div style={{textAlign:'center',width:'auto'}} ><img src='images/Rectangle 36@2x 1.png'></img></div>
//                         <div style={{textAlign:'center',paddingTop:'1rem',color:'#005EA2',fontWeight:'600',fontSize:'1.2rem'}}>Login</div>

//                         <div style={{paddingTop:'2rem',paddingBottom:'0.8rem',fontWeight:'400',fontSize:'0.9rem',color:'#3A4756'}}>Enter Your Phone Number</div>
//                         <PhoneInput 
//                             country={'ae'}
//                             inputStyle={{width:'100%'}}

//                         />
//                         <Button style={{marginTop:'2rem',width:'100%',backgroundColor:'#005EA2',color:'#FFFFFF',fontWeight:'400',fontSize:'0.9rem'}} onClick={handleOTP} size='large'>Sent OTP</Button>
//                         <div style={{display:'flex',marginTop:'2rem',alignItems:'center'}}>
//                             <div style={{height:'0.1em',width:'10.8rem',backgroundColor:'#cccc'}}></div>
//                             <div style={{marginLeft:'0.5rem',marginRight:'0.5rem',color:'#3A4756',fontSize:'0.7rem',fontWeight:'400'}}>Or</div>
//                             <div style={{height:'0.1em',width:'10.8rem',backgroundColor:'#cccc'}}></div>
//                         </div>
//                         <Button style={{width:'100%',marginBottom:'1.5rem',marginTop:'1.5rem',color:'#3A4756'}} size='large'>
//                             <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
//                             <img style={{marginTop:'0.2rem'}} src='images/image 8.png'></img>
//                             <span style={{fontWeight:'400',fontSize:'0.7rem',paddingLeft:'1rem'}}>Login With Microsoft</span>
//                             </div>
//                         </Button>
//                     </div>) : (
//                     <div style={{backgroundColor:'#FFFFFF',border:'0.1em solid #E5E0E0',paddingLeft:'3.2rem',paddingRight:'3.2rem',paddingTop:'1.7rem'}}>
//                         <div style={{textAlign:'center',width:'auto'}} ><img src='images/Rectangle 36@2x 1.png'></img></div>
//                         <div style={{textAlign:'center',paddingTop:'1rem',color:'#005EA2',fontWeight:'600',fontSize:'1.2rem'}}>Verification</div>
//                         <div style={{paddingTop:'2rem',paddingBottom:'0.8rem',fontWeight:'400',fontSize:'0.9rem',color:'#3A4756'}}>Enter OTP</div>

//                             <Input.OTP size='large' length={6} onChange={handleOTPChange}></Input.OTP>
//                             <div style={{textAlign:'center',marginBottom:'2rem'}}>
//                             <Button style={{marginTop:'2rem',width:'100%',backgroundColor:'#005EA2',color:'#FFFFFF',fontWeight:'400',fontSize:'0.9rem'}} size='large'>Verify OTP</Button>
//                             <div style={{marginTop:'2rem',color:'#005EA2',fontWeight:'400',fontSize:'0.9rem',cursor:'pointer'}}>Resend OTP</div>
//                         </div>
//                     </div>)}
//                 </Col>
//                 <Col xl={8} lg={8} md={4} sm={0} xs={0}></Col>
//             </Row>
//             </div>
//         </>
//     )
// }
// export default Login








//app/(frontend)/login/index.tsx

'use client'
import { Button, Input, Row, Col } from 'antd';
import { useState, useEffect } from 'react';
import { ConfigProvider } from 'antd';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import ErrorMessage from '../../../components/ErrorMessage';

const Login = () => {
    const [hideLogin, setHideLogin] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [otpError, setOtpError] = useState('');
    const { data: session, status } = useSession();
    const router = useRouter();

    // console.log("session==============================", session);
    // console.log("status===============================", status);

    useEffect(() => {
        console.log("status in route==========================", status);
        if (status === 'authenticated') {
            router.push('/request');
        }
    }, [session, status, router]);

    const handlePhoneNumberChange = (value: string) => {
        setPhoneNumber(value);
        // console.log("phonenumber=====================", phoneNumber)
    };

    const handleSendOTP = async () => {
        // Generate and send OTP to the user's phone number
        // (You'll need to implement this using an SMS provider)

        setHideLogin(false);
    };

    const handleVerifyOTP = async () => {
        // Reset the error message
        setOtpError('');

        // Call the next-auth signIn method with the phone number and OTP
        const result = await signIn('credentials', {
            phoneNumber,
            otp,
            redirect: false,
            callbackUrl: '/request',
        });


        if (result?.error) {
            // Authentication failed, set the error message
            setOtpError("Invalid OTP");
        } else {
            // Authentication succeeded
            console.log(result);
            router.push('/request');
        }
    };

    const handleAADSignIn = async () => {
        try {
            await signIn('azure-ad', { callbackUrl: '/request', redirect: false });
          } catch (error) {
            // Handle the error here
            console.error('Azure AD sign-in error:', error);
            setErrorMessage('Azure AD authentication failed. Please try again later.');
          }
    };

    function handleOTP() {
        if (!phoneNumber) {
            setPhoneNumberError('Enter a Mobile Number');
        } else {
            setPhoneNumberError('');
            handleSendOTP();
        }
        // handleSendOTP();
    }

    return (
        <>
            {/* <ErrorMessage error={errorMessage} /> */}

            <div style={{ backgroundImage: 'url(\'images/login pic.png\')', minHeight: '40.9rem', backgroundColor: '#F3F6F8' }}>
                <Row>
                    <Col xl={24} lg={24} md={24} sm={0} xs={0} style={{ height: '7rem' }}></Col>
                    <Col xl={0} lg={0} md={0} sm={24} xs={24} style={{ height: '1.5rem' }}></Col>
                </Row>
                <Row>
                    <Col xl={8} lg={8} md={4} sm={0} xs={0}></Col>
                    <Col xl={8} lg={8} md={16} sm={24} xs={24}>
                        {hideLogin ? (
                            <div style={{ backgroundColor: '#FFFFFF', border: '0.1em solid #E5E0E0', paddingLeft: '3.2rem', paddingRight: '3.2rem', paddingTop: '1.7rem' }}>
                                <div style={{ textAlign: 'center', width: 'auto' }}><img src='images/Rectangle 36@2x 1.png'></img></div>
                                <div style={{ textAlign: 'center', paddingTop: '1rem', color: '#005EA2', fontWeight: '600', fontSize: '1.2rem' }}>Login</div>

                                <div style={{ paddingTop: '2rem', paddingBottom: '0.8rem', fontWeight: '400', fontSize: '0.9rem', color: '#3A4756' }}>Enter Your Phone Number</div>
                                <PhoneInput
                                    country={'ae'}
                                    inputStyle={{ width: '100%' }}
                                    value={phoneNumber}
                                    onChange={(value) => handlePhoneNumberChange(value)}
                                />
                                {phoneNumberError && <p style={{ color: 'red' }}>{phoneNumberError}</p>}
                                <Button style={{ marginTop: '2rem', width: '100%', backgroundColor: '#005EA2', color: '#FFFFFF', fontWeight: '400', fontSize: '0.9rem' }} onClick={handleOTP} size='large'>Sent OTP</Button>
                                <div style={{ display: 'flex', marginTop: '2rem', alignItems: 'center' }}>
                                    <div style={{ height: '0.1em', width: '10.8rem', backgroundColor: '#cccc' }}></div>
                                    <div style={{ marginLeft: '0.5rem', marginRight: '0.5rem', color: '#3A4756', fontSize: '0.7rem', fontWeight: '400' }}>Or</div>
                                    <div style={{ height: '0.1em', width: '10.8rem', backgroundColor: '#cccc' }}></div>
                                </div>
                                <Button style={{ width: '100%', marginBottom: '1.5rem', marginTop: '1.5rem', color: '#3A4756' }} size='large' onClick={handleAADSignIn}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img style={{ marginTop: '0.2rem' }} src='images/image 8.png'></img>
                                        <span style={{ fontWeight: '400', fontSize: '0.7rem', paddingLeft: '1rem' }}>Login With Microsoft</span>
                                    </div>
                                </Button>
                                <ErrorMessage error={errorMessage} />
                            </div>
                        ) : (
                            <div style={{ backgroundColor: '#FFFFFF', border: '0.1em solid #E5E0E0', paddingLeft: '3.2rem', paddingRight: '3.2rem', paddingTop: '1.7rem' }}>
                                <div style={{ textAlign: 'center', width: 'auto' }}><img src='images/Rectangle 36@2x 1.png'></img></div>
                                <div style={{ textAlign: 'center', paddingTop: '1rem', color: '#005EA2', fontWeight: '600', fontSize: '1.2rem' }}>Verification</div>
                                <div style={{ paddingTop: '2rem', paddingBottom: '0.8rem', fontWeight: '400', fontSize: '0.9rem', color: '#3A4756' }}>Enter OTP</div>

                                <Input.OTP size="large" length={6} value={otp} onChange={(value) => setOtp(value)}></Input.OTP>
                                {otpError && <p style={{ color: 'red' }}>{otpError}</p>}
                                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                    <Button
                                        style={{
                                            marginTop: '2rem',
                                            width: '100%',
                                            backgroundColor: '#005EA2',
                                            color: '#FFFFFF',
                                            fontWeight: '400',
                                            fontSize: '0.9rem',
                                        }}
                                        size="large"
                                        onClick={handleVerifyOTP}
                                    >
                                        Verify OTP
                                    </Button>
                                    
                                    <div style={{ marginTop: '2rem', color: '#005EA2', fontWeight: '400', fontSize: '0.9rem', cursor: 'pointer' }}>Resend OTP</div>
                                </div>
                            </div>
                        )}
                    </Col>
                    <Col xl={8} lg={8} md={4} sm={0} xs={0}></Col>
                </Row>
            </div>
        </>
    )
}

export default Login