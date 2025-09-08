import { useNavigate } from 'react-router';
import GuestbookList from '../../components/guestbook/guestbook-list';
import { useCallback } from 'react';
import useSWR from 'swr';


export default function GuestbookGetAll() {

  const navigate = useNavigate();

  const handleDetail = useCallback((id) => {
    navigate(id.toString());
  }, []);

  // Requete vers le Web API
  const { data, error, isLoading } = useSWR('GuestBook', () => {
    return fetch('http://localhost:8080/api/guestbook').then(res => res.json());
  });
  console.log(data);

  return (
    <>
      <h2>Exemple liste</h2>
      {isLoading ? (
        <p>Chargement en cours...</p>
      ) : data ? (
        <GuestbookList data={data} onDetail={handleDetail} />
      ): (
        <p>Aucune donnée</p>
      )}
    </>
  );
}