// src/App.js

import React from 'react';
import Stepper from './Stepper';

const steps = [
  {
    label: 'Contact Details',
    // content: (
    //   <div>
    //     <h2>Contact Details</h2>
    //     <p>Please enter your contact details for further communications.</p>
    //     <form>
    //       <div>
    //         <label>Name:</label>
    //         <input type="text" name="name" />
    //       </div>
    //       <div>
    //         <label>Email:</label>
    //         <input type="email" name="email" />
    //       </div>
    //       <div>
    //         <label>Phone:</label>
    //         <input type="tel" name="phone" />
    //       </div>
    //     </form>
    //   </div>
    // ),
  },
  {
    label: 'Shipping Address',
    // content: (
    //   <div>
    //     <h2>Shipping Address</h2>
    //     <p>Please enter your shipping address.</p>
    //     <form>
    //       <div>
    //         <label>Street:</label>
    //         <input type="text" name="street" />
    //       </div>
    //       <div>
    //         <label>City:</label>
    //         <input type="text" name="city" />
    //       </div>
    //       <div>
    //         <label>State:</label>
    //         <input type="text" name="state" />
    //       </div>
    //       <div>
    //         <label>Zip Code:</label>
    //         <input type="text" name="zip" />
    //       </div>
    //     </form>
    //   </div>
    // ),
  },
  {
    label: 'Payment',
    // content: (
    //   <div>
    //     <h2>Payment</h2>
    //     <p>Please enter your payment details.</p>
    //     <form>
    //       <div>
    //         <label>Credit Card Number:</label>
    //         <input type="text" name="ccnumber" />
    //       </div>
    //       <div>
    //         <label>Expiration Date:</label>
    //         <input type="text" name="expdate" />
    //       </div>
    //       <div>
    //         <label>CVV:</label>
    //         <input type="text" name="cvv" />
    //       </div>
    //     </form>
    //   </div>
    // ),
  },
  {
    label: 'Delivered',
    content: (
      <div>
        <h2>Delivered</h2>
        <p>Your order has been delivered! Thank you for shopping with us.</p>
      </div>
    ),
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Stepper Component</h1>
      </header>
      <main>
        <Stepper steps={steps} />
      </main>
    </div>
  );
}

export default App;
