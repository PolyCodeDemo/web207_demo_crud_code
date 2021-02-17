function ListProduct() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <table className="table col-8 table-striped">
        <thead className="table-dark">
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Samsung</td>
            <td>12,999,999.00 VND</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Oppo</td>
            <td>5,999,999.00 VND</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ListProduct;
