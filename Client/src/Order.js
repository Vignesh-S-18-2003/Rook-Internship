import React, { useEffect } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';

function Order({ address, list, total }) {
  useEffect(() => {
    // const sendEmail = () => {
    //   emailjs.send('service_x3qalza', 'template_h1m4mc6', {
    //     to_email: address.email,
    //     message: `
    //       Name: ${address.name}
    //       Address: ${address.addressLine1} ${address.addressLine2}
    //       Pincode: ${address.pincode}
    //       Order Details:
    //       ${list.map(item => `${item.name}: ${item.quantity}`).join('\n')}
    //       Total Amount to Pay: ${total}
    //     `,
    //   }, 'aBpQc8OCMIz7ZxUTd')
    //   .then((response) => {
    //     console.log('SUCCESS!', response.status, response.text);
    //   }, (error) => {
    //     console.log('FAILED...', error);
    //     alert('Failed to send email.');
    //   });

    //   emailjs.send('service_x3qalza', 'template_h1m4mc6', {
    //     to_email: 'vigneshsm2003@gmail.com',
    //     message: `
    //       Name: ${address.name}
    //       Address: ${address.addressLine1} ${address.addressLine2}
    //       Pincode: ${address.pincode}
    //       Order Details:
    //       ${list.map(item => `${item.name}: ${item.quantity}`).join('\n')}
    //       Total Amount to Pay: ${total}
    //       Order Id: 12ABX11121
    //       Order Placed 
    //     `,
    //   }, 'aBpQc8OCMIz7ZxUTd')
    //   .then((response) => {
    //     console.log('SUCCESS!', response.status, response.text);
    //   }, (error) => {
    //     console.log('FAILED...', error);
    //     alert('Failed to send email.');
    //   });
    // };
    const postOrderDetails = () => {
      axios.post('http://localhost:3000/api/orders', {
        name: address.name,
        email: address.email,
        addressLine1: address.addressLine1,
        addressLine2: address.addressLine2,
        pincode: address.pincode,
        number: address.number,
        list: list,
        total: total,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('Order successfully sent to server:', response.data);
      })
      .catch((error) => {
        console.error('Error sending order to server:', error.message);
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
        } else if (error.request) {
          console.error('Request data:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
        console.error('Error config:', error.config);
      });
    };
    
    // sendEmail();
    postOrderDetails();
  }, [address, list, total]);

  return (
    <div className='payPage'>
      <h2>Order Confirmed</h2>
      <h1>Cash On Delivery</h1>
      <h3>Name: {address.name}</h3>
      {list.map((item, index) => (
        item.quantity > 0 && <h3 key={index}>{item.name} Quantity: {item.quantity}</h3>
      ))}
      <h3>Address: {address.addressLine1} {address.addressLine2}</h3>
      <h3>Number: {address.number.slice(2)}</h3>
      <h3>Pincode: {address.pincode}</h3>
      <h1>Total Amount to Pay: {total}</h1>
    </div>
  );
}

export default Order;
