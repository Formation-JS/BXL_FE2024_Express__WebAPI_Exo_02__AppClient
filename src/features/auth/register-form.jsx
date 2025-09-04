import { useActionState, useId } from 'react';
import { useNavigate } from 'react-router';

const initialState = {
  errorMessage: null
};

export default function RegisterForm() {

  const inputId = useId();
  const navigate = useNavigate();

  async function registerAction(state, formData) {
    const data = Object.fromEntries(formData);

    // TODO Call API for register
    if (!data.email || !data.password) {
      return {
        errorMessage: 'Invalide data !'
      };
    }

    // TODO Save JWT in React App

    // Si crédential valide, on redirigre la page "accueil"
    navigate('/');
    return state;
  }

  const [state, handleRegister, isPending] = useActionState(registerAction, initialState);

  return (
    <form action={handleRegister}>
      <div>
        <label htmlFor={inputId + 'email'}>Email : </label>
        <input id={inputId + 'email'} type='email' name='email' />
      </div>
      <div>
        <label htmlFor={inputId + 'username'}>Pseudo : </label>
        <input id={inputId + 'username'} type='text' name='username' />
      </div>
      <div>
        <label htmlFor={inputId + 'pwd'}>Mot de passe : </label>
        <input id={inputId + 'pwd'} type='password' name='password' />
      </div>
      <div>
        <button type='submit' disabled={isPending}>Créer</button>
        {state.errorMessage && (
          <span>{state.errorMessage}</span>
        )}
      </div>
    </form>
  );
}