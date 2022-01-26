function HorizontalInput(props) {
  return (
    <div>
      <div className="form-group row py-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          {props.fieldName}
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputEmail3"
            placeholder="Email"
            name={props.name}
            onChange={props.onChange}
            defaultValue={props.name == "country" ? "India" : ""}
          />
        </div>
      </div>
    </div>
  );
}

export default HorizontalInput;
