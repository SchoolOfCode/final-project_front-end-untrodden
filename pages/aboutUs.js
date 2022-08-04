import styles from "../styles/aboutUs.module.css";
import Head from "next/head";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About us | Untrodden</title>
        <meta name="description" content="About us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.about_us_mid}>
        <section className={styles.about_us_description_container}>
          <h1 className={styles.h1}>About Us </h1>
          <p className={styles.about_us_main_description}>
            The last few years have been full of uncertainty, with restrictions,
            travel bans, isolation periods and more inconveniences. This has
            been followed by a sharp rise in inflation with soaring livings
            costs and a surge in fuel prices, and finally by airline issues and
            travel chaos across airports and borders.{" "}
          </p>
          <p className={styles.about_us_main_description}>
            For this reason, we have decided to come together and present you
            with a fully comprehensive application to help you explore the
            beautiful locations which come in many forms and shapes within the
            UK.
          </p>
        </section>

        <section className={styles.about_us_images_container}>
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
        </section>
      </section>

      <section className={styles.review_section}>
        <section className={styles.reviews}>
          <h1>Amazing</h1>
          <h2>Susan Smith</h2>
          <p>
            Absolutely love this app! The best way to find out about the
            beautiful locations in the UK that you may not have heard about!
          </p>
        </section>

        <section className={styles.reviews}>
          <h1>Banging</h1>
          <h2>Joe Blogs</h2>
          <p>
            So happy to disover Untrodden! As an explorer I use this app
            regularly to find places to visit across the country.
          </p>
        </section>

        <section className={styles.reviews}>
          <h1>Great!</h1>
          <h2>Jane Murphy</h2>
          <p>
            Great community of users sharing places to visit and providing
            information about the amenities. As a mother I find this app very
            useful as it we have certain requirements when goin on trips with the children.
          </p>
        </section>

        <section className={styles.reviews}>
          <h1>Sick</h1>
          <h2>Tom Field</h2>
          <p>
            Enjoying life in the UK so much more since coming across this app.
          </p>
        </section>
      </section>
    </>
  );
}
