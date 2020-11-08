import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/header';
import styles from '../styles/Home.module.css';
import hpArray from './../data';

export default function Home() {
  const [loremText, setLoremText] = useState('');
  const [paragraph, setParagraph] = useState(0);

  function handleParagraphChange(e) {
    setParagraph(e.target.value);
  }

  function getHpIpsumText() {
    const max = hpArray.length - paragraph;
    let randomNumber = Math.floor(Math.random() * max);
    let i = 0;
    let lorem = '';
    while (i < paragraph) {
      lorem += hpArray[randomNumber] + '\n';
      randomNumber++;
      i++;
    }
    setLoremText(lorem);
  }

  return (
    <>
      <Head>
        <title>Harry Potter Ipsum</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className="form-box">
          <label htmlFor="paragraphs">Enter the number of paragraphs:</label>
          <input
            type="number"
            name="paragraphs"
            id="paragraphs"
            className="paragraphs"
            value={paragraph}
            onChange={handleParagraphChange}
          />
          <button onClick={getHpIpsumText}>Revelio!</button>
        </div>
        <div className="lorem-text">{loremText}</div>
      </main>
      {/* <style jsx></style> */}
    </>
  );
}
