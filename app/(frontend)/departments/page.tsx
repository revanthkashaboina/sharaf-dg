import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Departments',
}

export default async function departments() {
  return (
            <div>Departments Component</div>
         )
}