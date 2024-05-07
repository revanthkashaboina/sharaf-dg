import { NextResponse ,NextRequest} from 'next/server';

export async function GET(request : NextRequest){

    const searchParams = request.nextUrl.searchParams
    const id = searchParams.get('orderId')
    console.log("searchParams================>",id)

    try{
        const response = await fetch(`https://api.sd-test.exceloid.in/OBPOSORDER/${id}`)
            
            if (response.status !== 200) {
                console.log('====>',response)
                const responseData = await response.json();
                console.log('Response from API:', responseData);
                return NextResponse.json(responseData,{
                    status: 404, 
                  });
                // throw new Error('Failed to get data: ' + response.statusText);
            }else{
                const responseData = await response.json();
                console.log('Response from API:', responseData,{
                    status: 200
                });
                return NextResponse.json(responseData);
              }
      
            
            
    }catch(error){
        console.log('error in making get request', error)
    }    
    
}