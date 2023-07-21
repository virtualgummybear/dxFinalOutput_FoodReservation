import { App, Button, Popconfirm, Space, Table } from "antd";
import { DeleteTwoTone, EditTwoTone, ExpandOutlined } from "@ant-design/icons";

import ProductCarousel from "./productCarousel";
import { useContext } from "react";
import { OrderContext } from "./context/useContext";

const ProductViewOrder = () => {
  const { orders, refetch, handleDelete } = useContext(OrderContext);

  const columns = [
    {
      title: "Products",
      dataIndex: "product_name",
      key: "product_name",
    },
    {
      title: "Customer Name",
      dataIndex: "customer_name",
      key: "customer_name",
    },
    {
      title: "Unit Price",
      dataIndex: "unit_price",
      key: "price_price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Total Price",
      dataIndex: "total_price",
      key: "total_price",
    },
    {
      title: "Order Date",
      dataIndex: "order_date",
      key: "date_date",
    },
    {
      title: "Actions",
      key: "actions",
      render: (tableData) => {
        refetch();
        return (
          <>
            <Space size="middle">
              {/* Edit button */}
              <EditTwoTone />
              {/* Delete button */}
              <Popconfirm
                title="Delete the record"
                description="Are you sure to delete this record?"
                okText="Yes"
                cancelText="No"
              >
                <Button onClick={() => handleDelete(tableData)}>
                  <DeleteTwoTone />
                </Button>
              </Popconfirm>
              {/* Redirect button */}
              <Button type="text">
                <ExpandOutlined />
              </Button>
            </Space>
          </>
        );
      },
    },
  ];

  return (
    <>
      <ProductCarousel />
      <Table dataSource={orders} columns={columns} />
    </>
  );
};

export default ProductViewOrder;
