

import React from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { getOrderStatus } from '../library/helpers';

const recentOrderData = [
        {
          id: '1',
          product_id: '4324',
          customer_id: '23143',
          customer_name: 'Shirley A. Lape',
          order_date: '2024-02-17T03:24:00',
          order_total: '$435.50',
          current_order_status: 'PLACED',
          shipment_address: 'Cottage Grove, OR 97424'
        },
        {
          id: '2',
          product_id: '7453',
          customer_id: '96453',
          customer_name: 'Ryan Carroll',
          order_date: '2024-02-14T05:24:00',
          order_total: '$96.35',
          current_order_status: 'CONFIRMED',
          shipment_address: 'Los Angeles, CA 90017'
        },
        {
          id: '3',
          product_id: '6789',
          customer_id: '98765',
          customer_name: 'Sarah Lee',
          order_date: '2024-02-20T08:00:00',
          order_total: '$789.99',
          current_order_status: 'DELIVERED',
          shipment_address: '321 Maple Avenue, Anytown, USA'
        },
        {
          id: '4',
          product_id: '5432',
          customer_id: '12345',
          customer_name: 'David Martinez',
          order_date: '2024-02-18T14:45:00',
          order_total: '$200.00',
          current_order_status: 'PROCESSING',
          shipment_address: '456 Pine Street, Somewhere City, USA'
        },
        {
          id: '5',
          product_id: '8765',
          customer_id: '34567',
          customer_name: 'Emma Thompson',
          order_date: '2024-02-19T11:30:00',
          order_total: '$550.00',
          current_order_status: 'SHIPPED',
          shipment_address: '789 Oak Avenue, Anytown, USA'
        },
        {
        id: '6',
        product_id: '4324',
        customer_id: '23143',
        customer_name: 'Shirley A. Lape',
        order_date: '2024-02-17T03:24:00',
        order_total: '$435.50',
        current_order_status: 'PLACED',
        shipment_address: 'Cottage Grove, OR 97424'
      },
      {
        id: '7',
        product_id: '7453',
        customer_id: '96453',
        customer_name: 'Ryan Carroll',
        order_date: '2024-02-14T05:24:00',
        order_total: '$96.35',
        current_order_status: 'CONFIRMED',
        shipment_address: 'Los Angeles, CA 90017'
      },
      {
        id: '8',
        product_id: '6789',
        customer_id: '98765',
        customer_name: 'Sarah Lee',
        order_date: '2024-02-20T08:00:00',
        order_total: '$789.99',
        current_order_status: 'DELIVERED',
        shipment_address: '321 Maple Avenue, Anytown, USA'
      },
      {
        id: '9',
        product_id: '5432',
        customer_id: '12345',
        customer_name: 'David Martinez',
        order_date: '2024-02-18T14:45:00',
        order_total: '$200.00',
        current_order_status: 'PROCESSING',
        shipment_address: '456 Pine Street, Somewhere City, USA'
      },
      {
        id: '10',
        product_id: '8765',
        customer_id: '34567',
        customer_name: 'Emma Thompson',
        order_date: '2024-02-19T11:30:00',
        order_total: '$550.00',
        current_order_status: 'SHIPPED',
        shipment_address: '789 Oak Avenue, Anytown, USA'
      } 
];

export default function RecentOrders() {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Recent Orders</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-500">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product ID</th>
              <th>Customer Name</th>
              <th>Order Date</th>
              <th>Order Total</th>
              <th>Shipping Address</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrderData.map((order) => {
              let orderDate = '';
              try {
                orderDate = format(new Date(order.order_date), 'dd MMM yyyy');
              } catch (error) {
                console.error('Error parsing order date:', error);
              }

              return (
                <tr key={order.id}>
                  <td>
                    <Link to={`/order/${order.id}`}>{order.id}</Link>
                  </td>
                  <td>
                    <Link to={`/product/${order.product_id}`}>#{order.product_id}</Link>
                  </td>
                  <td>
                    <Link to={`/customer/${order.customer_id}`}>{order.customer_name}</Link>
                  </td>
                  <td>{orderDate}</td>
                  <td>{order.order_total}</td>
                  <td>{order.shipment_address}</td>
                  <td>{getOrderStatus(order.current_order_status)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
