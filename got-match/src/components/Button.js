function Button(props) {
  return (
    <button className='button--primary button--medium' onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default Button;
