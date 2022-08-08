import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Logo from '../public/Logo-with-2colour.png';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>Home | Untrodden</title>
        <meta name="description" content="About us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <div className={styles.page_width}>
          <div className={styles.logo_container}>
            <Image
              className={styles.logo_image}
              src={Logo}
              alt="Untrodden"
              height={350}
              width={325}
            />
          </div>
          <main className={styles.about_us_main_grid_container}>
            <section className={styles.about_us_description_container}>
              <h1 className={styles.h1}>Welcome! </h1>
              <p className={styles.about_us_description_paragraph}>
                Since 2020 the world has been full of uncertainty with
                restrictions, travel bans, isolation periods, soaring livings
                costs and fuel prices, topped off by airline issues and travel
                chaos across borders.
              </p>
              <p className={styles.about_us_description_paragraph}>
                During these times of huge uncertainty, the team at untrodden
                have found one thing that has been consistent and reliable, The
                Beautiful United Kingdom. All of us have over the past couple of
                years taken solace in our home nations astonishing countryside
                and towns. So much so we have made it our mission to share our
                unique not so well know places with everyone. The end goal being
                to create a platform where anyone can share somewhere special to
                them, allowing people from any walk of life to find comfort and
                beauty on their very doorstep.
              </p>
              <p className={styles.about_us_description_paragraph}>
                And so Untrodden was born.
              </p>

              <p className={styles.about_us_description_paragraph}>
                With UnTrodden we aim to bring a safe and easy to use
                environment for anyone to find either a quick day out or plan a
                weekend or longer trip away to explore the beauty the UK has to
                offer. As well as being able to seamlessly upload your own place
                of solitude for others to explore and enjoy.
              </p>
            </section>

            <section className={styles.about_us_images_container}>
              <div className={styles.images_grid_container}>
                <img
                  className={styles.images}
                  src="https://www.hebrideanhopscotch.com/outer-hebrides/wp-content/uploads/2014/05/H0039-768x514.jpg"
                />
                <img
                  className={styles.images}
                  src="https://www.historichouses.org/app/uploads/2021/01/dunnottar-castle-730x385.jpg"
                />
                <img
                  className={styles.images}
                  src="https://res.cloudinary.com/dnshrtqmv/image/upload/v1659706615/untrodden-pics/1_bhdgo3.jpg"
                />
                <img
                  className={styles.images}
                  src="https://res.cloudinary.com/dnshrtqmv/image/upload/v1659706623/untrodden-pics/2_e02g7w.jpg"
                />
              </div>
            </section>
          </main>

          <h2 className={styles.h2}>Testimonials</h2>
          <main className={styles.review_section}>
            <section className={styles.reviews}>
              <h2>'Love it!'</h2>
              <h3>Joe Bloggs</h3>
              <p>
                "Absolutely love this app! The best way to find out about the
                beautiful locations in the UK that you may not have heard
                about!"
              </p>
            </section>

            <section className={styles.reviews}>
              <h2>'So pleased'</h2>
              <h3>Sally Smith</h3>
              <p>
                'So happy to disover Untrodden! As an explorer I use this app
                regularly to find places to visit across the country.''
              </p>
            </section>

            <section className={styles.reviews}>
              <h2>'Really useful'</h2>
              <h3>Jim Bob</h3>
              <p>
                'Great community of users sharing locations. Very useful as we
                have requirements when going on trips with the kids.
              </p>
            </section>

            <section className={styles.reviews}>
              <h2>'Changed my life'</h2>
              <h3>Michael Baker</h3>
              <p>
                'Enjoying life in the UK so much more since coming across this
                app'
              </p>
            </section>

            <section className={styles.reviews}>
              <h2>'Game changer'</h2>
              <h3>Rebecca Suanders</h3>
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
