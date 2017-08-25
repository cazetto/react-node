const Button = props => (
  <div>
    <button>{props.children}</button>
    <style jsx>{`
      button {
        padding-left: 13px;
        padding-right: 13px;
        border: 1px solid #ccc;
        border-top-right-radius: 4px;
        border-left: none;
        border-bottom-right-radius: 4px;
        height: 40px;
        color: #666;
        font-size: 17px;
        outline: 0;
        background: #f1f1f1;
        background: -webkit-linear-gradient(#fff, #f1f1f1);
        background: -o-linear-gradient(#fff, #f1f1f1);
        background: -moz-linear-gradient(#fff, #f1f1f1);
        background: linear-gradient(#fff, #f1f1f1);
      }
    `}</style>
  </div>
)

export default Button
