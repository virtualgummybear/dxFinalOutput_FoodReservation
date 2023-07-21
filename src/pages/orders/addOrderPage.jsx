import React from "react";
import { useMutation, useQuery } from "@apollo/client";

import { useState } from "react";
import { notification, Form } from "antd";
import ProductAddOrder from "../../components/productAddOrder";
import { OrderContext } from "../../components/context/useContext";
import { INSERT_ADD_ORDER } from "../../helpers/queries";

const AddOrderPage = () => {
  const [form] = Form.useForm();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [insertOrder] = useMutation(INSERT_ADD_ORDER);

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: "New Order Added!",
      placement,
    });
  };

  const handleChange = (value) => {
    setSelectedProduct(value);
  };

  const handleOnFinish = (values) => {
    const {
      product_name,
      customer_name,
      unit_price,
      quantity,
      total_price,
      comment,
      order_date,
    } = values;

    console.log(
      product_name,
      customer_name,
      unit_price,
      quantity,
      total_price,
      comment,
      order_date
    );

    insertOrder({
      variables: {
        product_name,
        customer_name,
        unit_price,
        quantity,
        total_price,
        comment,
        order_date,
      },
    })
      .then(({ data }) => {
        const affected_rows = data.insert_products.affected_rows;
        if (affected_rows > 0);
        openNotification("top");
      })
      .catch((error) => {
        // Handle error here
        console.error(error);
      });
    form.resetFields();
  };

  return (
    <OrderContext.Provider
      value={{ form, handleOnFinish, handleChange, selectedProduct }}
    >
      {contextHolder}
      <ProductAddOrder />
    </OrderContext.Provider>
  );
};

export default AddOrderPage;
