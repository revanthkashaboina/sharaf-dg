import { NextRequest,NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse){
    const userData = await req.json();
     console.log('data',userData)
    try{
        const res = await fetch('https://api.sd-test.exceloid.in/api/request', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        console.log('=========>',res)
        if (!res.ok) {
          throw new Error('Failed to submit data: ' + res.statusText);
        }else{
            console.log('success in server side')
            const responseData = await res.json();
            console.log('Response from API:', responseData);
            return NextResponse.json(responseData);
        }
    }catch(error){
        console.log('catch error', error)
    }
}