
import { useState, useEffect } from "react";

const OrderList = () =>{
    let[allorder, updateOrder] = useState( [] );

    const getOrder = () =>{
        fetch("http://localhost:1234/order")
        .then(response=>response.json())
        .then(productArray=>{
            updateOrder(productArray.reverse());
        })
    }

    useEffect(()=>{
        getOrder();
    }, [1]);

    return(
        <div className="container mt-5">
            <div className="row mb-5">
                <div className="col-lg-12">
                    <h3 className="text-center mb-5"> Manage Orders : {allorder.length} </h3>
                </div>
            </div>
            {
                allorder.map((order, index)=>{
                    return(
                        <div className="row mb-4" key={index}>
                            <div className="col-lg-4">
                                <p> {order.fullname} </p>
                                <p> {order.mobile} </p>
                                <p> {order.address} </p>
                            </div>
                            <div className="col-lg-8">
                            <table className="table table-bordered">
                                <thead className="text-center">
                                    <tr>
                                        <th> Product Name </th>
                                        <th> Photo </th>
                                        <th> Quantity </th>
                                        <th> Price </th>
                                        <th> Total Cost </th>
                                    </tr>
                                </thead>
                            <tbody className="text-center">
                                {
                                    order.itemlist.map((product, index)=>{
                                        return(
                                            <tr key={index}>
                                                <td> {product.name} </td>
                                                <td> <img src={product.photo} height="50" width="70"/> </td>
                                                <td>{product.qty}</td>
                                                <td> Rs.{product.price} </td>
                                                <td> {product.qty * product.price} </td>
                                            </tr>
                                        )
                                    })
                                }
                              </tbody>
                            </table>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default OrderList;