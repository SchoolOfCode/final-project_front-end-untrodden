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
                travel chaos across airports and borders.
              </p>
              <p className={styles.about_us_description_paragraph}>
                For this reason, we have decided to come together and present
                you with a fully comprehensive application to help you explore
                the beautiful locations you may not have known the UK has to
                offer.
              </p>
              <p className={styles.about_us_description_paragraph}>
                Why not join our community, discovering and sharing secret
                places around the UK!
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
                  src="https://scontent-man2-1.xx.fbcdn.net/v/t1.6435-9/73105395_2717435854973353_8149464770714533888_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=NTZ0JSz7WT8AX-riFB8&_nc_ht=scontent-man2-1.xx&oh=00_AT-aYexpWL6bR9fp4fY-wGwWIGMZoR_KaGB9gosb5ejkgg&oe=6313B84A"
                />
                <img
                  className={styles.images}
                  src="https://scontent-man2-1.xx.fbcdn.net/v/t1.6435-9/46792292_2120745774652691_102852990586585088_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9267fe&_nc_ohc=0x8sdNOz3iQAX_VFmhF&_nc_oc=AQlIJkEPP871_DiFCUFsAjidrIVpMSoFsVsH_RLoXDPGRzTR0KcBbZRhf1GlCGDQ5NM&_nc_ht=scontent-man2-1.xx&oh=00_AT8wP_HK-5WH33FL5ggt8KFgVZsjZ5c-nCiHuOWZiIzwWQ&oe=631307C9"
                />
              </div>
            </section>
          </main>

          <h2 className={styles.h2}>Testimonials</h2>
          <main className={styles.review_section}>
            <section className={styles.reviews}>
              <h1>'Love it!'</h1>
              <h2>Joe Bloggs</h2>
              <p>
                "Absolutely love this app! The best way to find out about the
                beautiful locations in the UK that you may not have heard
                about!"
              </p>
            </section>

            <section className={styles.reviews}>
              <h1>'So pleased'</h1>
              <h2>Sally Smith</h2>
              <p>
                'So happy to disover Untrodden! As an explorer I use this app
                regularly to find places to visit across the country.''
              </p>
            </section>

            <section className={styles.reviews}>
              <h1>'Really useful'</h1>
              <h2>Jim Bob</h2>
              <p>
                'Great community of users sharing locations. Very useful as we
                have requirements when going on trips with the kids.
              </p>
            </section>

            <section className={styles.reviews}>
              <h1>'Changed my life'</h1>
              <h2>Michael Baker</h2>
              <p>
                'Enjoying life in the UK so much more since coming across this
                app'
              </p>
            </section>

            <section className={styles.reviews}>
              <h1>'Game changer'</h1>
              <h2>Rebecca Suanders</h2>
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
