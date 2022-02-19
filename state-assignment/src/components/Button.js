function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`button--primary button-medium ${
        props.image === props.label.toLowerCase() ? "active" : ""
      }`}
    >
      {props.label}
    </button>
  );
}

export default Button;
