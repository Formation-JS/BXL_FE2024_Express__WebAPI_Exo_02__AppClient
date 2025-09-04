import { useParams } from 'react-router';
import GuestbookDetail from '../../components/guestbook/guestbook-detail';

// TODO Replace mockup of data !
const bookDetailData = {
  id: 42,
  author: 'Della',
  message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, quidem. Debitis et laboriosam excepturi beatae fuga, voluptatum nulla quaerat reiciendis doloremque facilis, tempore vero. Quos maiores voluptate aspernatur harum odit?',
  hasSpoiler: true,
  sendDate: new Date(2025, 10, 2, 10, 9, 11)
};


export default function GuestbookGetDetail() {

  const { id } = useParams();

  return (
    <>
      <h2>Detail pour l'id : {id}</h2>
      <GuestbookDetail data={bookDetailData} />
    </>
  );
}