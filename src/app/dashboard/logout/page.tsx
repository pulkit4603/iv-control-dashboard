'use client';
import { useRouter } from 'next/navigation';

export default function Logout() {
  const router = useRouter();

  const handleLogout = async (event: any) => {
    event.preventDefault();

    const response = await fetch('/api/logout', {
      method: 'POST',
    });

    if (response.ok) {
      router.push('/');
    } else {
      // Handle error
      console.error('Logout failed');
    }
  };

  return (
    <div>
      <form onSubmit={handleLogout}>
        <button type='submit'>Logout</button>
      </form>
    </div>
  );
}
