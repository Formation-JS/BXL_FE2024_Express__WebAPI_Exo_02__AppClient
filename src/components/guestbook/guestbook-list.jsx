
export default function GuestbookList({ data, onDetail }) {

  return (
    <ul>
      {data.map(element => (
        <li key={element.id}>
          <span>{element.author} : {element.message}</span>
          <button onClick={() => onDetail(element.id)}>Détail</button>
        </li>
      ))}
    </ul>
  );
}
