function FormProduct() {
  return (
    <div className="d-flex justify-content-center">
      <form className="col-6">
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Id</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" disabled/>
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Price</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormProduct;
