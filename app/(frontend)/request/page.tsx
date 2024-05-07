import { Metadata } from 'next'
import React from 'react';
import Request from '.'

export const metadata: Metadata = {
  title: 'Request Page',
}

export default async function RequestPage() {
  return (
            <>
                <Request/>
            </>
         )
}