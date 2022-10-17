import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="kr">
      <Head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="true"
          href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.5/static/pretendard.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx) => {
  const materialSheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        materialSheets.collect(<App {...props} emotionCache={cache} />),
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
    styles: <>{initialProps.styles}</>,
  };
};
