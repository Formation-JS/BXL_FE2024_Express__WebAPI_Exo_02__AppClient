import { Link } from 'react-router';
import LoginForm from '../../features/auth/login-form';

export default function LoginPage() {

  return (
    <>
      <h1>Connexion</h1>
      <Link to={'/'}>Retour à l'accueil</Link>

      <h2>Se connecter</h2>
      <LoginForm />
    </>
  )
}