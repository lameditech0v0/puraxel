import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@mui/styles";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "lib/createEmotionCache";

// export default function Document() {
//   return (
//     <Html lang="kr">
//       <body>
//         <Head>
//           <link
//             rel="stylesheet"
//             as="style"
//             crossOrigin="true"
//             href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.5/static/pretendard.css"
//           />
//           <meta
//             name="viewport"
//             content="width=device-width, initial-scale=1.0"
//           />
//         </Head>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="kr">
        <body>
          <Head>
            <link
              rel="stylesheet"
              as="style"
              crossOrigin="true"
              href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.5/static/pretendard.css"
            />
          </Head>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
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
