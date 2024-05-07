'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ErrorMessage({ error }: any) {
  const router = useRouter();

  useEffect(() => {
    if (error === 'Access denied') {
      // Handle the case when the user cancels the Azure AD consent prompt
      router.push('/'); // Redirect the user to the home page or any other desired page
    }
  }, [error, router]);

  return (
    <div>
      <p>{error}</p>
    </div>
  );
}   