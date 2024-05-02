import { logout } from '@/lib/auth';

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    await logout();
    res.status(200).json({ status: 'Logged out' });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}