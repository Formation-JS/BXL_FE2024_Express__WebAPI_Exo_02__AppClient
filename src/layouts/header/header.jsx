import { Link } from 'react-router';
import style from './header.module.css'

export default function Header() {

  return (
    <header className={style['header']}>
      <p className={style['title']}>Exo - Web API & React</p>
      <ul>
        <li>
          <Link to='login'>Se connecter</Link>
        </li>
        <li>
          <Link to='register'>S'enregistrer</Link>
        </li>
      </ul>
    </header>
  )
}