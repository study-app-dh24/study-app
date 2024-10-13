import { useRouter } from 'next/router';

export default function ItemPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Item Details</h1>
      <p>You selected item {id}</p>
      {/* Add more details here as needed */}
    </div>
  );
}