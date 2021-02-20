function FormProduct({
  onSubmitHandler,
  formInputOnChange,
  formData,
  btnXoaFormOnClick,
}) {
  return (
    <div className="mt-5 d-flex justify-content-center">
      <form
        onSubmit={ onSubmitHandler }
        className="col-6">
        <div className="form-group row">
          <label className="col-2 col-form-label">Id</label>
          <div className="col-10">
            <input
              onChange={ formInputOnChange }
              value={ formData.id }
              type="text"
              name="id"
              disabled
              className="form-control" />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-2 col-form-label">Tên SP</label>
          <div className="col-10">
            <input
              onChange={ formInputOnChange }
              value={ formData.ten_san_pham }
              type="text"
              name="ten_san_pham"
              className="form-control" />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-2 col-form-label">Giá SP</label>
          <div className="col-10">
            <input
              onChange={ formInputOnChange }
              value={ formData.gia_san_pham }
              type="number"
              name="gia_san_pham"
              className="form-control" />
          </div>
        </div>

        <div>
          <button
            className="btn btn-primary">
            Lưu
          </button>
          <button
            type="reset"
            onClick={ btnXoaFormOnClick }
            className="btn btn-danger ml-4">
            Xóa form
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormProduct;
