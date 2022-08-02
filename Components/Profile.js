import { useUser } from '@auth0/nextjs-auth0';
import styles from '../styles/Navbar.module.css';

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <>
        <img
          className={styles.profile_image}
          src={user.picture}
          alt={user.name}
          height={50}
          width={50}
        />
        {/* <h2>{user.name}</h2>
        <p>{user.email}</p> */}
      </>
    )
  );
}
