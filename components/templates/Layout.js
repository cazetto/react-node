import Head from 'next/head'
import Header from '../organisms/Header'
import Container from '../atoms/Container'

const Layout = (props) => (
  <div>
    <Head>
      <title>Isomorphic React</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="//cdn.rawgit.com/filipelinhares/ress/master/dist/ress.min.css" type="text/css" />
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" />
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" type="text/css" />
    </Head>
    <Header />
    <Container>
      {props.children}
    </Container>

    <style jsx global>{`
      body {
        background: #EFEFEF;
        font: 16px Arial;
        color: #2f2f2f;
        padding-top: 54px;
      }
    `}</style>

  </div>
)

export default Layout
