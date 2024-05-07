import { Metadata } from 'next'
import React from 'react';
import NewRequest from '.'

export const metadata: Metadata = {
  title: 'New Request',
}

export default async function NewRequestPage() {
  return (
            <>
                <NewRequest/>
            </>
         )
}