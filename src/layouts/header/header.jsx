import { Link } from 'react-router';
import style from './header.module.css';
import { useAtom } from 'jotai';
import { tokenAtom } from '../../atoms/token.atom.js';

export default function Header() {

  const [token, setToken] = useAtom(tokenAtom);

  const handleDisconnect = (e) => {
    e.preventDefault();
    setToken(null);
  };

  return (
    <header className={style['header']}>
      <p className={style['title']}>Exo - Web API & React</p>
      <ul>
        {!token ? (
          <>
            <li>
              <Link to='login'>Se connecter</Link>
            </li>
            <li>
              <Link to='register'>S'enregistrer</Link>
            </li>
          </>
        ) : (
          <li>
            <a onClick={handleDisconnect}>Se déconnecter</a>
          </li>
        )}
      </ul>
    </header>
  );
}