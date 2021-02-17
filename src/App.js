import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [listSanPham, setListSanPham] = useState([]);

  useEffect(function () {
    const url = 'https://5f2d045b8085690016922b50.mockapi.io/todo-list/my-products';
    axios.get(url)
      .then(function (response) {
        const { data } = response;
        setListSanPham(data);
      })
      .catch(error => {
        console.log(error)
      });
  }, []);


  return (
    <div className="App">

      {/* Form Sản phẩm */}
      <div className="d-flex justify-content-center">
        <form className="col-6">
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Id</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" disabled/>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Tên</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Giá</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" />
            </div>
          </div>
        </form>
      </div>

      {/* List Sản phẩm */}
      <div className="d-flex justify-content-center mt-5">
        <table className="table col-8 table-striped">
          <thead className="table-dark">
            <tr>
              <td>Id</td>
              <td>Tên Sản Phẩm</td>
              <td>Giá</td>
              <td>Thao tác</td>
            </tr>
          </thead>
          <tbody>
            {
              listSanPham.map(function (value, index) {
                return (
                  <tr key={index} >
                    <td>{ value.id }</td>
                    <td>{ value.ten_san_pham }</td>
                    <td>{ value.gia_san_pham } VND</td>
                    <td>
                      <button className="btn btn-primary ml-3">Update</button>
                      <button className="btn btn-danger ml-3">Delete</button>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
