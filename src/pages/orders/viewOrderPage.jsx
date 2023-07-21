import React from "react";
import ProductViewOrder from "../../components/productViewOrder";
import { OrderContext } from "../../components/context/useContext";
import { useQuery, useMutation } from "@apollo/client";
import { GET_PRODUCTS, DELETE_VIEW_ORDER } from "../../helpers/queries";
import { useForm } from "antd/es/form/Form";
import Form from "antd/es/form/Form";
import { useState } from "react";

const ViewOrderPage = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();

  const { loading, error, data, refetch } = useQuery(GET_PRODUCTS);
  const [deleteRecord] = useMutation(DELETE_VIEW_ORDER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // The fetched student information is available in the "data" object
  const dataInput = data?.student_informations;

  const orders = data?.products;

  const handleDelete = (tableData) => {
    const { id } = tableData;
    deleteRecord({
      variables: {
        id,
      },
    })
      .then(({ data }) => {
        const affected_rows = data.delete_products.affected_rows;
        if (affected_rows > 0) refetch();
      })
      .catch((error) => {
        // Handle error here
        console.error(error);
      });
  };

  return (
    <>
      <OrderContext.Provider value={{ orders, refetch, handleDelete }}>
        <ProductViewOrder />
      </OrderContext.Provider>
    </>
  );
};

export default ViewOrderPage;
