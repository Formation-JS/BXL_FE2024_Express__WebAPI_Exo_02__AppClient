import { useSetAtom } from 'jotai';
import { useActionState, useId } from 'react';
import { useNavigate } from 'react-router';
import { tokenAtom } from '../../atoms/token.atom.js';

const initialState = {
  errorMessage: null
};

export default function LoginForm() {

  const inputId = useId();
  const navigate = useNavigate();
  const setToken = useSetAtom(tokenAtom);

  async function loginAction(state, formData) {
    const data = Object.fromEntries(formData);

    // Call API for login
    const response = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      }
    });

    // Extraction des données de la réponse
    const { token } = await response.json();
    console.log(token);

    if(token) {
      // Save JWT in React App
      setToken(token);
  
      // Si crédential valide, on redirigre la page "accueil"
      navigate('/');
      return state;
    }

    return {
      errorMessage: 'Erreur lors de la connexion !'
    }
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