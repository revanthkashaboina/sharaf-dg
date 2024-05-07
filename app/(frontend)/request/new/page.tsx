import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Request',
}

export default async function newRequest() {
  return (
            <div>New Request Component</div>
         )
}