import Link from 'next/link'

import numeral from 'numeral'

const ListItem = (props) => (
  <li>
    <article>
      <a href={`/items/${props.data.id}`}>
        <img src={props.data.picture} />
        <div className="item-info">
          <p>
            <span className="currency">{props.data.price.currency}</span>
            <span className="price">{numeral(props.data.price.amount).format('0,0')}</span>
          </p>
          <p>
            <span className="title">{props.data.title}</span>
          </p>
        </div>
        <div className="other-info">
          <p>Other info</p>
        </div>
      </a>
    </article>

    <style jsx>{`
      li {
        list-style-type: none;
        margin-top: 1px;
      }
      a, a:link, a:hover, a:visited {
        display: flex;
        flex-direction: row;
        text-decoration: none;
        color: #2f2f2f;
        font-family: Arial;
        padding: 10px;
        transition: box-shadow .2s ease-in-out;
      }
      a:hover {
        outline: #f5f5f5 1px solid;
        box-shadow: 0 0 5px rgba(117, 127, 16, .2);
      }
      img {
        padding-right: 10px;
      }
      .item-info {
        width: 70%;
        padding: 10px 10px 10px 10px;
      }
      .item-info .currency, .item-info .price {
        font-size: 1.2em;
        margin-bottom: 20px;
      }
      .title {
        display: block;
        margin-top: 10px;
      }
      .other-info {
        text-align: right;
        width: 30%;
        padding: 10px 10px 20px 10px;
      }
    `}</style>

  </li>
);

export default ListItem;
