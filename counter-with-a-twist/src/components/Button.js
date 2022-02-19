function Button(props) {
  return (
    <button
      className={`button--${props.type} button--medium ${
        props.steps === props.label ? "active" : ""
      }`}
    >
      {props.label}
    </button>
  );
}

export default Button;
