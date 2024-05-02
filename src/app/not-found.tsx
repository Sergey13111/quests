import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h2 className='text-xl font-bold'>Not Found</h2>
      <p className='mb-4'>Could not find requested resource</p>
      <Link
        href='/'
        className='text-blue-600 hover:text-blue-800'
        scroll={false}>
        Return Home
      </Link>
    </div>
  );
}
