function ListProduct({
  listSanPham,
  btnUpdateOnClick,
  btnDeleteOnClick,
}) {
  return (
    <div className="mt-5 d-flex justify-content-center">
      <table className="table table-striped col-8">
        <thead className="table-dark">
          <tr>
            <td>Id</td>
            <td>Tên SP</td>
            <td>Giá SP</td>
            <td>Thao tác</td>
          </tr>
        </thead>
        <tbody>
          {
            listSanPham.map(function (value, index) {
              return (
                <tr key={ index }>
                  <td>{ value.id }</td>
                  <td>{ value.ten_san_pham }</td>
                  <td>{ value.gia_san_pham }</td>
                  <td>
                    <button
                      onClick={
                        function (event) {
                          btnUpdateOnClick(event, value, index);
                        }
                      }
                      className="btn btn-primary">
                      Update
                    </button>
                    <button
                      onClick={ function (event) {
                        btnDeleteOnClick(event, value, index);
                      } }
                      className="btn btn-danger ml-4">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default ListProduct;
