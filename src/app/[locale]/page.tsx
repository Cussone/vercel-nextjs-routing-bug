import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div>[locale]</div>
      <div>
        <Link href={'/en/collections/collection-name'} >Go to collection</Link>
      </div>
    </div>
  );
}
