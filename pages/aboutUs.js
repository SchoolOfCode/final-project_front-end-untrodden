
import styles from '../styles/aboutUs.module.css';
import Head from 'next/head';

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About us | Untrodden</title>
        <meta name="description" content="About us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className={styles.h1}>About Us Page</h1>
        <p>
          The last few years have been full of uncertainty, with restrictions,
          travel bans, isolation periods and more inconveniences. This has been
          followed by a sharp rise in inflation with soaring livings costs and a
          surge in fuel prices, and finally by airline issues and travel chaos
          across airports and borders.{' '}
        </p>
        <p>
          For this reason, we have decided to come together and present you with
          a fully comprehensive application to help you explore the beautiful
          locations which come in many forms and shapes within the UK.
        </p>
      </div>
    </>

  );
}
