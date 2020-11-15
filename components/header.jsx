const Header = () => {
  return (
    <>
      <header>
        <h1> ⚡👓 Harry Potter Ipsum</h1>
        <div>Tired of boring Lorem Ipsum? Try this!</div>
      </header>
      <style jsx>
        {`
          header {
            max-width: 700px;
            margin: 0 auto 30px;
            text-align:center;
          }
          header h1 {
            margin: 10px 0;
            font-weight:500;
            font-size: 36px;
            letter-spacing: 2px;
          }
        `}
      </style>
    </>
  );
};

export default Header;
