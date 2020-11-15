import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/header';
import hpArray from './../data';
import CopyToClipboard from 'react-copy-to-clipboard';

export default function Home() {
  const [loremText, setLoremText] = useState('');
  const [paragraph, setParagraph] = useState(1);

  function handleParagraphChange(e) {
    setParagraph(e.target.value);
  }

  function formSubmit(e) {
    e.preventDefault();
    getHpIpsumText();
  }

  function getHpIpsumText() {
    const max = hpArray.length - paragraph;
    let randomNumber = Math.floor(Math.random() * max);
    let lorem = '';
    for (let i = 0; i < paragraph; i++) {
      lorem += hpArray[randomNumber] + '\n';
      randomNumber++;
    }
    setLoremText(lorem);
  }

  return (
    <>
      <Head>
        <title>Harry Potter Ipsum</title>
      </Head>
      <Header />
      <main className="main">
        <form className="form-box" onSubmit={formSubmit}>
          <label htmlFor="paragraphs">Enter the number of paragraphs:</label>
          <input
            type="text"
            name="paragraphs"
            id="paragraphs"
            className="paragraphs"
            value={paragraph}
            onChange={handleParagraphChange}
          />
          <button type="submit">Alohomora!</button>
        </form>
        <CopyToClipboard text={loremText}>
          <button className="copy-text" disabled={!loremText}>Geminio!</button>
        </CopyToClipboard>
        <div className="lorem-text">{loremText}</div>
      </main>
      <style jsx>
        {`
          .main {
            max-width: 700px;
            margin: 0 auto;
          }

          .form-box {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .form-box label {
            flex: 6;
          }

          .form-box input {
            flex: 4;
          }

          .form-box button {
            flex: 3;
            background: salmon;
            box-shadow: none;
            border: 1px solid brown;
            align-self: stretch;
            cursor: pointer;
            color: #fff;
            font-weight: 500;
            border-radius: 4px;
          }

          .copy-text {
            background: pink;
            box-shadow: none;
            border: 1px solid brown;
            padding: 8px 20px;
            cursor: pointer;
            font-weight: 500;
            margin: 20px 0 0;
          }

          .lorem-text {
            padding: 20px 0;
            white-space: pre-line;
            line-height: 1.5;
          }
        `}
      </style>
    </>
  );
}
