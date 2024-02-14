import React, { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";

const Cart = () => {
  let [allproduct, updateProduct] = useState([]);

  const getProduct = () => {
    fetch("http://localhost:1234/cart")
      .then((response) => response.json())
      .then((productArray) => {
        updateProduct(productArray.reverse());
      });
  };

  useEffect(() => {
    getProduct();
  }, [1]);

  const delProduct = (pid) => {
    let url = "http://localhost:1234/cart/" + pid;
    let postData = { method: "delete" };
    fetch(url, postData)
      .then((response) => response.json())
      .then((msg) => {
        getProduct();
      });
  };

  const updateQty = (product, status) => {
    if (status == "A") {
      product["qty"] = product.qty + 1;
    } else {
      product["qty"] = product.qty - 1;
    }

    if (product.qty == 0) {
      delProduct(product.id);
      getProduct();
    } else {
      let url = "http://localhost:1234/cart/" + product.id;
      let postData = {
        headers: { "Content-Type": "application/json" },
        method: "put",
        body: JSON.stringify(product),
      };

      fetch(url, postData)
        .then((response) => response.json())
        .then((message) => {
          getProduct(); // relod list after quantity update
        });
    }
  };

  let [fullname, pickName] = useState("");
  let [mobile, pickMobile] = useState("");
  let [address, pickAddress] = useState("");

  const save = () => {
    let url = "http://localhost:1234/order";
    let newproduct = {
      fullname: fullname,
      mobile: mobile,
      address: address,
      itemlist: allproduct,
    };

    let postData = {
      headers: { "Content-Type": "application/json" },
      method: "post",
      body: JSON.stringify(newproduct),
    };

    fetch(url, postData)
      .then((response) => response.json())
      .then((message) => {
        alert("Hi, " + fullname + " We Received Your Order !");
      });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-4">
          <h3> Customer Details </h3>
          <div className="mb-3">
            <label> Customer Name </label>
            <input
              type="text"
              className="form-control"
              onChange={(obj) => pickName(obj.target.value)}
            />
          </div>

          <div className="mb-3">
            <label> Customer Mobile No </label>
            <input
              type="text"
              className="form-control"
              onChange={(obj) => pickMobile(obj.target.value)}
            />
          </div>

          <div className="mb-3">
            <label> Customer Address </label>
            <textarea
              className="form-control"
              onChange={(obj) => pickAddress(obj.target.value)}
            ></textarea>
          </div>

          <div className="text-center">
            <button className="btn btn-danger" onClick={save}>
              {" "}
              Place Order{" "}
            </button>
          </div>
        </div>
        <div className="col-lg-8">
          <h3 className="text-center mb-4">
            {allproduct.length} - Items in Cart
          </h3>
          <table className="table table-bordered shadow-lg">
            <thead className="text-center">
              <tr>
                <th>Product Name</th>
                <th>Photo</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total Cost</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {
                   allproduct.map((product, index)=>{
                    return(
                        <tr key={index}>
                            <td> {product.name} </td>
                            <td> <img src={product.photo} height="50" width="70"/> </td>
                            <td> 
                                <button className="btn btn-warning btn-sm me-2" onClick={updateQty.bind(this, product, 'B')}> - </button>
                                    {product.qty} 
                                <button className="btn btn-primary btn-sm ms-2" onClick={updateQty.bind(this, product, 'A')}> + </button>
                            </td>
                            <td> Rs.{product.price} </td>
                            <td> {product.qty * product.price} </td>
                            <td> 
                                <FiTrash2
                                onClick={delProduct.bind(this, product.id)} className="text-danger" />
                            </td>
                        </tr>
                    )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
