import { Card, Col, Row, Image } from "antd";
import React from "react";

const ProductPage = () => (
  <>
    <div className="flex flex-row space-x-5 p-5">
      <Col span={8}>
        <Card title="Siopao" bordered={false}>
          <Image
            width={400}
            src="https://img.freepik.com/free-vector/hand-drawn-food-illustration_23-2149283393.jpg?w=740&t=st=1689743633~exp=1689744233~hmac=aac5676b471989dacbaa4d93a6532f40e82f48579c284f4f0d0cd3ed718fa6c3"
          />
          <b>Siopao</b>, is a Philippine steamed bun with various fillings. It
          is the indigenized version of the Fujianese baozi, introduced to the
          Philippines by Hokkien immigrants during the Spanish colonial period.
          It is a popular snack in the Philippines and is commonly sold by
          bakeries and restaurants.
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Batchoy" bordered={false}>
          <Image
            width={400}
            src="https://img.freepik.com/premium-vector/spicy-korean-noodles-ramyeon-illustration_77417-2778.jpg"
          />
          <b>Batchoy</b>, is a Filipino noodle soup of pork offal, crushed pork
          cracklings, chicken stock, beef loin and round noodles. The popular
          variant, the La Paz Batchoy, traces its roots to the district of La
          Paz, Iloilo City in the Philippines.
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Halo-Halo" bordered={false}>
          <Image
            width={400}
            src="https://img.freepik.com/premium-vector/halohalo-is-very-tasty-dessert-philippines-isolated-illustration-white-background-vector_508884-4.jpg?w=740"
          />
          <b>Halo-halo</b>, is a popular cold dessert in the Philippines made up
          of crushed ice, evaporated milk, and various ingredients including ube
          jam, sweetened kidney beans, sago, gulaman, pinipig, flan, slices or
          portions of fruit preserves and other root crop preserves. The dessert
          is topped with a scoop of ube ice cream. Halo-halo is considered to be
          the unofficial national dessert of the Philippines.
        </Card>
      </Col>
    </div>
  </>
);

export default ProductPage;
