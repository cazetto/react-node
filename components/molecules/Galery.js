const Galery = (props) => (
  <section>
    <img className="image-large" src={props.pictures[0].url} />
    <style jsx>{`
      section {
        display: block;
        width: 100%;
        background-color: #fff;
      }
      .image-large {
        width: 100%;
      }
    `}</style>
  </section>
);

export default Galery;
