import Document, {Html, Head, Main, NextScript} from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet"/> 
          <meta name="description" content="com o Move.it você se mantem saudável realizando exercícios entre sua rotina de programação"/>
          <meta name="keywords" content="Move.it moveit saúde programção "/>
          <meta name="author" content="Leonardo Vita"/>  

          <meta property="og:description" content="com o Move.it você se mantem saudável realizando exercícios entre sua rotina de programação"/>
          <meta property="og:image" content="favicon.png"/>
        </Head> 
        <body>
          <Main />
          <NextScript />
        </body>       
      </Html>
    )
  }
}
