import { Link } from 'react-router';
import RegisterForm from '../../features/auth/register-form';

export default function RegisterPage() {

  return (
    <>      
      <h1>Connexion</h1>
      <Link to={'/'}>Retour à l'accueil</Link>

      <h2>S'enregister</h2>
      <RegisterForm />
    </>
  )
}