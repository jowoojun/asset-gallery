import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { BodyColor } from '../components/styles/Color';

// 스타일드 컴포넌트를 SSR하기 위해서는 Document를 직접 조작하는 방법 밖에 없다.
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } catch (error) {
      console.error(error);
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body style={{ width: '100%', textAlign: 'center', margin: 0, padding: 0, backgroundColor: BodyColor }}>
          <script src="https://polyfill.io/v3/polyfill.min.js?features=es2015%2Ces2016%2Ces2017%2Cdefault%2Ces2018%2Ces2019" />
          <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
