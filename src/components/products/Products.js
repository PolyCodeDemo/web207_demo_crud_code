import { useState, useEffect } from 'react';
import axios from 'axios';
import FormProduct from './FormProduct';
import ListProduct from './ListProduct';

function Products() {
  const formDataInit = {
    id: '',
    ten_san_pham: '',
    gia_san_pham: '',
  };

  const url = 'https://5f2d045b8085690016922b50.mockapi.io/todo-list/my-products/';
  const [listSanPham, setListSanPham] = useState([]);
  const [formData, setFormData] = useState(formDataInit);
  const [clickRow, setClickRow] = useState(-1);

  useEffect(function () {
    axios.get(url)
      .then(function (response) {
        // Destructuring - ES6
        const { data } = response;
        setListSanPham(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const btnDeleteOnClick = function (event, value, index) {
    axios.delete(url + value.id)
      .then(function (response) {
        const list = listSanPham.filter(function (val, idx) {
          return idx == index ? false : true;
        });

        setListSanPham(list);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const formInputOnChange = function (event) {
    const { name, value } = event.target;

    // Spread Operator - ES6
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const onCreate = function () {
    axios.post(url, formData)
      .then(function (response) {
        const { data } = response;
        setListSanPham([
          ...listSanPham,
          data,
        ]);

        setFormData(formDataInit);
      })
      .catch(function (error) {
        console.log('error');
        console.log(error);
      });
  }

  const onUpdate = function () {
    const urlUpdate = url + formData.id;
    axios.put(urlUpdate, formData)
      .then(function (response) {
        const { data } = response;

        const list = listSanPham.map(function (val, idx) {
          if (idx == clickRow) {
            return data;
          } else {
            return val;
          }
        });

        setListSanPham(list);
        setClickRow(-1);
        setFormData(formDataInit);
      })
      .catch(function (error) {
        console.log('error');
        console.log(error);
      });
  }

  const onSubmitHandler = function (event) {
    event.preventDefault();

    if (clickRow == -1) {
      onCreate();
    } else {
      onUpdate();
    }
  }

  const btnUpdateOnClick = function (event, value, index) {
    setFormData(value);
    setClickRow(index);
  }

  const btnXoaFormOnClick = function (event) {
    event.preventDefault();

    setFormData(formDataInit);
    setClickRow(-1);
  }

  return (
    <div className="App">
      <FormProduct
        onSubmitHandler={ onSubmitHandler }
        formInputOnChange={ formInputOnChange }
        formData={ formData }
        btnXoaFormOnClick={ btnXoaFormOnClick }
        />
      <ListProduct
        listSanPham={ listSanPham }
        btnUpdateOnClick={ btnUpdateOnClick }
        btnDeleteOnClick={ btnDeleteOnClick }
        />
    </div>
  );
}

export default Products;
