const Container = (props) => (
  <div className="row around-xs">
    <div className="col-xs-12 col-sm-9">
      <div className="wrapper">
        {props.children}
      </div>
    </div>

    <style jsx>{`
      .wrapper {
        display: flex;
      }

      @media(max-width: 770px) {
        .wrapper {
          display: none;
          padding-left: 20px;
          padding-right: 20px;
        }
      }

    `}</style>
  </div>
)

export default Container
