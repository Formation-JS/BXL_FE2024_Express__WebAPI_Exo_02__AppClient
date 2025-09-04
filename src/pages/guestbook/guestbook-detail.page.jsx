import { Link } from 'react-router';
import GuestbookGetDetail from '../../features/guestbook/guestbook-get-detail';

export default function GuestBookDetailPage() {

  return (
    <>
      <h1>GuestBookDetail</h1>
      <Link to={'/guestbook'}>Retour à la liste des messages</Link>
      
      <GuestbookGetDetail />
    </>
  )
}