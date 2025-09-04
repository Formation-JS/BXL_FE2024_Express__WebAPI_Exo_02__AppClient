import { Link } from 'react-router';
import GuestbookGetAll from '../../features/guestbook/guestbook-get-all';

export default function GuestBookPage() {

  return (
    <>
      <h1>GuestBook</h1>
      <Link to={'/'}>Retour à l'accueil</Link>

      <GuestbookGetAll />
    </>
  )
}