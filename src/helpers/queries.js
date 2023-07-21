import { gql } from "graphql-tag";

export const GET_PRODUCTS = gql`
  query {
    products {
      id
      product_name
      customer_name
      unit_price
      quantity
      total_price
      comment
      order_date
    }
  }
`;

export const INSERT_ADD_ORDER = gql`
  mutation InsertAddOrder(
    $product_name: String!
    $customer_name: String!
    $unit_price: bigint!
    $quantity: bigint!
    $total_price: bigint!
    $comment: String!
    $order_date: timestamptz!
  ) {
    insert_products(
      objects: {
        product_name: $product_name
        customer_name: $customer_name
        quantity: $quantity
        unit_price: $unit_price
        total_price: $total_price
        comment: $comment
        order_date: $order_date
      }
    ) {
      affected_rows
    }
  }
`;

export const DELETE_VIEW_ORDER = gql`
  mutation DeleteAddOrder($id: Int!) {
    delete_products(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;
