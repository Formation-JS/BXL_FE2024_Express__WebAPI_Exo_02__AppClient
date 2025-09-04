import { useActionState, useId } from 'react';
import { useNavigate } from 'react-router';

const initialState = {
  errorMessage: null
};

export default function LoginForm() {

  const inputId = useId();
  const navigate = useNavigate();

  async function loginAction(state, formData) {
    const data = Object.fromEntries(formData);

    // TODO Call API for login
    if (data.email !== 'della@test.be') {
      return {
        errorMessage: 'Invalide crédentials !'
      };
    }

    // TODO Save JWT in React App

    // Si crédential valide, on redirigre la page "accueil"
    navigate('/');
    return state;
  }

  const [state, handleLogin, isPending] = useActionState(loginAction, initialState);

  return (
    <form action={handleLogin}>
      <div>
        <label htmlFor={inputId + 'email'}>Email : </label>
        <input id={inputId + 'email'} type='email' name='email' />
      </div>
      <div>
        <label htmlFor={inputId + 'pwd'}>Mot de passe : </label>
        <input id={inputId + 'pwd'} type='password' name='password' />
      </div>
      <div>
        <button type='submit' disabled={isPending}>Connexion</button>
        {state.errorMessage && (
          <span>{state.errorMessage}</span>
        )}
      </div>
    </form>
  );
}