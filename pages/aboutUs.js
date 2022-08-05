import styles from '../styles/aboutUs.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Logo from '../public/Logo with 2colour (1).png';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About us | Untrodden</title>
        <meta name="description" content="About us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        className={styles.logo_image}
        src={Logo}
        alt="Untrodden"
        height={500}
        width={450}
      />

      <div className={styles.main}>
        <div className={styles.page_width}>
          <main className={styles.about_us_main_grid_container}>
            <section className={styles.about_us_description_container}>
              <h1 className={styles.h1}>About Us </h1>
              <p className={styles.about_us_description_paragraph}>
                The last few years have been full of uncertainty, with
                restrictions, travel bans, isolation periods. This has been
                followed by a sharp rise in inflation with soaring livings costs
                and a surge in fuel prices, and finally by airline issues and
                travel chaos across airports and borders.{' '}
              </p>
              <p className={styles.about_us_description_paragraph}>
                For this reason, we have decided to come together and present
                you with a fully comprehensive application to help you explore
                the beautiful locations you may not have known the UK has to
                offer.
              </p>
              <p className={styles.about_us_description_paragraph}>
                Why not join our community, discovering and sharing secretd
                places areoun the UK.
              </p>
            </section>

            <section className={styles.about_us_images_container}>
              <div className={styles.images_grid_container}>
                <img
                  className={styles.images}
                  src="https://res.cloudinary.com/dkethqypm/image/upload/v1659616979/untrodden-pics/opxkct7wnt3czx00mzj5.jpg"
                />
                <img
                  className={styles.images}
                  src="https://res.cloudinary.com/dkethqypm/image/upload/v1659616979/untrodden-pics/opxkct7wnt3czx00mzj5.jpg"
                />
                <img
                  className={styles.images}
                  src="https://res.cloudinary.com/dkethqypm/image/upload/v1659616979/untrodden-pics/opxkct7wnt3czx00mzj5.jpg"
                />
                <img
                  className={styles.images}
                  src="https://res.cloudinary.com/dkethqypm/image/upload/v1659616979/untrodden-pics/opxkct7wnt3czx00mzj5.jpg"
                />
              </div>
            </section>
          </main>

          <main className={styles.review_section}>
            <section className={styles.reviews}>
              <h1>'Love it!'</h1>
              <h2>Karim Mallah</h2>
              <p>
                "Absolutely love this app! The best way to find out about the
                beautiful locations in the UK that you may not have heard
                about!"
              </p>
            </section>

            <section className={styles.reviews}>
              <h1>'So pleased'</h1>
              <h2>Tom Booth</h2>
              <p>
                'So happy to disover Untrodden! As an explorer I use this app
                regularly to find places to visit across the country.''
              </p>
            </section>

            <section className={styles.reviews}>
              <h1>'Really useful'</h1>
              <h2>Glyn Knight</h2>
              <p>
                'Great community of users sharing locations. Very useful as we
                have requirements when going on trips with the kids.
              </p>
            </section>

            <section className={styles.reviews}>
              <h1>'Changed my life'</h1>
              <h2> Dan Hawkesford</h2>
              <p>
                'Enjoying life in the UK so much more since coming across this
                app'
              </p>
            </section>

            <section className={styles.reviews}>
              <h1>'Game changer'</h1>
              <h2>Kieran Gill</h2>
              <p>
                'This website just makes trips in the UK so much more
                accessible'
              </p>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
