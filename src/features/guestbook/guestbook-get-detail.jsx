import { useParams } from 'react-router';
import GuestbookDetail from '../../components/guestbook/guestbook-detail';
import useSWR from 'swr';
import { useAtomValue } from 'jotai';
import { tokenAtom } from '../../atoms/token.atom.js';

export default function GuestbookGetDetail() {

  const { id } = useParams();
  const token = useAtomValue(tokenAtom);

  // Requete vers le Web API
  const { data, error, isLoading } = useSWR(`GuestBookDetail/${id}`, () => {
    return fetch(`http://localhost:8080/api/guestbook/${id}`, {
      headers: {
        'authorization': `Bearer ${token}`
      }
    }).then(res => res.json());
  });
  console.log(data);

  return (
    <>
      <h2>Detail pour l'id : {id}</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : data ? (
        <GuestbookDetail data={data} />
      ) : (
        <p>Erreur lors du chargement des données</p>
      )}
    </>
  );
}