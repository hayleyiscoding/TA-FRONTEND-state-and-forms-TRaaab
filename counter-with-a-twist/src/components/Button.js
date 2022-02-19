function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`button--${props.type} button--medium ${
        props.steps === props.label || props.max === props.label ? "active" : ""
      }`}
    >
      {props.label}
    </button>
  );
}

export default Button;
