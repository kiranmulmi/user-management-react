const ViPasswordInput = (props) => {
  return (
    <div className="form-group">
        <label>{props.title}</label>
        <input 
          type="password"
          onChange={props.handleInputChange}
          name={props.name}
          value={props.value} 
          {...props}
          />
          { props.errMessage !== '' && <span className="label-danger">{props.errMessage}</span>}
      </div>
  );
}

export default ViPasswordInput;