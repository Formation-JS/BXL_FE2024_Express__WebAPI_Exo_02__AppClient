import { Link } from 'react-router';

export default function HomePage() {

  return (
    <>
      <h1>Home</h1>
      <Link to={'/guestbook'}>Voir le livre d'or</Link>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, deserunt quasi asperiores suscipit dolorem quidem cumque aut? Minima qui possimus ducimus quod in maxime quia repudiandae! Deserunt quo qui architecto!</p>

      <p>Atque, deserunt eveniet aut animi voluptatem eaque minus cupiditate perferendis ipsam aliquam perspiciatis hic tenetur, sed nesciunt eius sapiente odio sit dicta iste iure neque accusantium temporibus corporis! Adipisci, error!</p>
    </>
  );
}