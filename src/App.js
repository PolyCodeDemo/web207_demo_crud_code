import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [clickRow, setClickRow] = useState(-1);
  const [listSanPham, setListSanPham] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    ten_san_pham: '',
    gia_san_pham: '',
  });

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

  const formInputOnChange = function (event) {
    const { name, value } = event.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const onCreate = function (url, data) {
    axios.post(url, formData)
      .then(function (response) {
        console.log(response);
        const { data } = response;
        setListSanPham([
          ...listSanPham,
          data
        ]);

        setFormData({
          id: '',
          ten_san_pham: '',
          gia_san_pham: '',
        });
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const onUpdate = function (url, data) {
    axios.put(url, data)
      .then(function (response) {
        const { data } = response;
        console.log(data);
        const list = listSanPham.map(function (value, index) {
          if (index == clickRow) {
            return data;
          } else {
            return value;
          }
        });

        setListSanPham(list);
        setFormData({
          id: '',
          ten_san_pham: '',
          gia_san_pham: '',
        });
        setClickRow(-1);

      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const onSubmitHandler = function (event) {
    event.preventDefault();
    console.log(formData)
    const url = 'https://5f2d045b8085690016922b50.mockapi.io/todo-list/my-products';

    if (clickRow == -1) {
      onCreate(url, formData);
    } else {
      onUpdate(url + '/' + formData.id, formData);
    }
  }

  const btnUpdateOnClick = function (event, value, index) {
    console.log(value, index);
    setFormData(value);
    setClickRow(index);
  }

  const btnXoaFormOnClick = function (event) {
    event.preventDefault();
    setFormData({
      id: '',
      ten_san_pham: '',
      gia_san_pham: '',
    });
    setClickRow(-1);
  }

  const btnDeleteOnClick = function (event, value, index) {
    console.log(event, value, index)
    const url = 'https://5f2d045b8085690016922b50.mockapi.io/todo-list/my-products/' + value.id;

    axios.delete(url)
      .then(function (response) {
        const list = listSanPham.filter(function (val, idx) {
          return idx == index ? false : true;
        })
        setListSanPham(list);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (
    <div className="App">

      {/* Form Sản phẩm */}
      <div className="d-flex justify-content-center">
        <form
          onSubmit={ onSubmitHandler }
          className="col-6">
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Id</label>
            <div className="col-sm-10">
              <input
                value={formData.id}
                onChange={ formInputOnChange }
                name="id"
                type="text"
                className="form-control" disabled/>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Tên</label>
            <div className="col-sm-10">
              <input
                value={formData.ten_san_pham}
                onChange={ formInputOnChange }
                name="ten_san_pham"
                type="text"
                className="form-control" />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Giá</label>
            <div className="col-sm-10">
              <input
                value={formData.gia_san_pham}
                onChange={ formInputOnChange }
                name="gia_san_pham"
                type="text"
                className="form-control" />
            </div>
          </div>

          <div className="form-group row d-flex justify-content-center">
            <button className="btn btn-primary">Lưu</button>
            <button
              type="reset"
              onClick={ btnXoaFormOnClick }
              className="btn btn-danger ml-4">Xóa form</button>

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
                      <button
                        onClick={ (event) => {
                          btnUpdateOnClick(event, value, index)
                        } }
                        className="btn btn-primary ml-3">
                        Update
                      </button>
                      <button
                        onClick={ (event) => {
                          btnDeleteOnClick(event, value, index)
                        } }
                        className="btn btn-danger ml-3">
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
    </div>
  );
}

export default App;
