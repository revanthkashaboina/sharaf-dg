import { Metadata } from 'next'
import React from 'react';
import { RequestDetails } from '.';


export const metadata: Metadata = {
  title: 'Request Page',
}

export default async function RequestDetailsPage() {
  return (
            <>
                <RequestDetails/>
            </>
         )
}