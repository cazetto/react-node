const LogoBrand = props => (
  <nav>
    <a className="logo"></a>
    <style jsx>{`
      .logo {
        display: block;
        background-image: url(/static/png/logo-pt-large.png);
        background-repeat: no-repeat;
        width: 60px;
        height: 40px;
        margin-right: 20px;
      }
    `}</style>
  </nav>
)

export default LogoBrand
