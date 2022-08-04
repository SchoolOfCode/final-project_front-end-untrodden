import { useState } from 'react';
import Head from 'next/head';

// css
import styles from '../../styles/cloudinaryTest.module.css';

export default function Cloudinary({ setValue }) {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  // post image to backend
  async function handleOnSubmit(event) {
    event.preventDefault();

    const response = await fetch(
      'https://api.cloudinary.com/v1_1/dnshrtqmv/image/upload',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          file: imageSrc,
          upload_preset: 'untrodden-pics',
        }),
      }
    );

    const data = await response.json();

    setImageSrc(data.secure_url);
    setUploadData(data);
    setValue('image_url', data.secure_url);
    console.log(data);
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Upload Location Image:</h1>

        <p className={styles.description}>
          (Remember to click on the upload image button below once selected!)
        </p>

        <div className={styles.form} method="post">
          <p>
            <input onChange={handleOnChange} type="file" name="file" />
          </p>

          <img className={styles.img} src={imageSrc} />

          {imageSrc && !uploadData && (
            <p>
              <button onClick={handleOnSubmit}>Upload Image</button>
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
