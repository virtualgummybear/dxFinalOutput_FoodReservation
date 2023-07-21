import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  TimePicker,
} from "antd";
import { useContext } from "react";
import { OrderContext } from "./context/useContext";

const { Option } = Select;

const ProductAddOrder = () => {
  const { handleOnFinish, form, handleChange, selectedProduct } =
    useContext(OrderContext);
  console.log(selectedProduct);
  return (
    <>
      <div className="flex flex-col items-center justify-center px-2 py-2 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-3 mb-10 sm:max-w-md xl:p-0 dark:border-gray-700">
          <div className="flex justify-center p-2 space-y-4 md:space-y-6 sm:p-8">
            <Form
              form={form}
              name="register"
              onFinish={handleOnFinish}
              initialValues={{
                suffix: ["₱"],
                prefix: "86",
                remember: true,
              }}
              style={{
                width: 350,
              }}
              scrollToFirstError
            >
              <h1 className="text-2xl font-bold">ADD ORDER</h1>
              <Form.Item
                name="product_name"
                rules={[
                  {
                    required: true,
                    message: "Please select your product!",
                  },
                ]}
              >
                <Select
                  placeholder="Products"
                  value={selectedProduct}
                  onChange={handleChange}
                  options={[
                    {
                      value: "siopao",
                      label: "Siopao (₱30)",
                    },
                    {
                      value: "batchoy",
                      label: "Batchoy (₱50)",
                    },
                    {
                      value: "halohalo",
                      label: "Halo-halo (₱45)",
                    },
                  ]}
                />
              </Form.Item>

              <Form.Item
                name="customer_name"
                rules={[
                  {
                    required: true,
                    message: "Please input your fullname!",
                  },
                ]}
              >
                <Input placeholder="Customer Name" />
              </Form.Item>

              <Form.Item
                name="unit_price"
                rules={[
                  {
                    required: true,
                    message: "Please input price!",
                  },
                ]}
              >
                <InputNumber
                  placeholder="Unit Price"
                  className="w-full"
                  min={0}
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  prefix="₱"
                  suffix="PHP"
                  onChange={null}
                />
              </Form.Item>

              <Form.Item
                className="w-full"
                name="quantity"
                rules={[
                  {
                    required: true,
                    message: "Please input quantity!",
                  },
                ]}
              >
                <InputNumber
                  placeholder="Quantity"
                  className="w-full"
                  min={1}
                  max={100000}
                />
              </Form.Item>

              <Form.Item
                name="total_price"
                rules={[
                  {
                    required: true,
                    message: "Please input total amount!",
                  },
                ]}
              >
                <InputNumber
                  placeholder="Total Price"
                  size="large"
                  className="w-full"
                  min={0}
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  prefix="₱"
                  suffix="PHP"
                  onChange={null}
                />
              </Form.Item>

              <Form.Item
                name="order_date"
                rules={[
                  {
                    required: true,
                    message: "Please input order date!",
                  },
                ]}
              >
                <DatePicker
                  placeholder="Order Date"
                  className="w-full"
                  showTime
                  format="YYYY-MM-DD HH:mm:ss"
                />
              </Form.Item>

              <Form.Item name="comment">
                <Input.TextArea
                  placeholder="Comment"
                  showCount
                  maxLength={100}
                />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 4,
                }}
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(
                            new Error("Should have reviewed the new order")
                          ),
                  },
                ]}
              >
                <Checkbox>I have reviewed the new order</Checkbox>
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 9,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductAddOrder;
