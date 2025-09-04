import { Route, Routes } from 'react-router';
import './App.css';
import Header from './layouts/header/header';
import HomePage from './pages/home/home.page';
import LoginPage from './pages/auth/login.page';
import RegisterPage from './pages/auth/register.page';
import GuestBookPage from './pages/guestbook/guestbook.page';
import GuestBookDetailPage from './pages/guestbook/guestbook-detail.page';

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="guestbook">
            <Route index element={<GuestBookPage />} />
            <Route path=":id" element={<GuestBookDetailPage />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
