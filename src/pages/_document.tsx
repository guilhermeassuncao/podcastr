import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Podcastr | Podcastr de tecnologia!" />
                    <meta property="og:description" content="Podcastr para aproximar você ainda mais dos melhores podcasts de tecnologia" />
                    <meta property="og:url" content="https://podcastr-guilhermeassuncao.vercel.app/" />
                    <meta name="image" property="og:image" content="og-image.jpg" />

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet" />
                    <link rel="shortcut icon" href="/favicon.png" type="image/png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
