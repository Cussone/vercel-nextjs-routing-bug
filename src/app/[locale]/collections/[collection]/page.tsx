import Link from 'next/link';

export default async function Page() {
  return (
    <div>
      <div>[locale]/collections/[collection]</div>
      <div>
        <Link href={'/en/collections/collection-name/item-name'} >Go to item</Link>
      </div>
    </div>
  );
}
