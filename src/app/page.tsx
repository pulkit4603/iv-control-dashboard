import { redirect } from 'next/navigation';
import { getSession, login, logout } from '@/lib/auth';

export default async function Page() {
  const session = await getSession();
  return (
    <section>
      <form
        action={async (formData) => {
          'use server';
          await login(formData);
          redirect('/dashboard');
        }}
      >
        <input type='string' placeholder='User ID' />
        <br />
        <button type='submit'>Login</button>
      </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  );
}
