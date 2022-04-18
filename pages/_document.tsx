import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class PageDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Major+Mono+Display&family=Open+Sans:wght@300&family=Roboto&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default PageDocument;
