import { useNavigate } from 'react-router';
import GuestbookList from '../../components/guestbook/guestbook-list';
import { useCallback } from 'react';

// TODO Replace mockup of data !
const bookData = [
  {
    id: 13,
    author: 'Della',
    message: 'Salut...'
  },
  {
    id: 14,
    author: 'Gontran',
    message: 'Mystere...'
  },
  {
    id: 42,
    author: 'Della',
    message: 'Mystere...'
  }
];


export default function GuestbookGetAll() {

  const navigate = useNavigate();

  const handleDetail = useCallback((id) => {
    navigate(id.toString());
  }, []);

  return (
    <>
      <h2>Exemple liste</h2>
      <GuestbookList data={bookData} onDetail={handleDetail} />
    </>
  );
}