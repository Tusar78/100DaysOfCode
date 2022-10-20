// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";

// const element = React.createElement("h2", null, 'Hello World');
// setInterval(() => {
//   const element = (
//     <div className="container">
//       <h2>Time: {new Date().toLocaleTimeString()}</h2>
//       <h2 className="title">Welcome to React World</h2>
//       <span className="sub-title">Since 2013 -by Jordan Walke</span>
//     </div>
//   )
//   ReactDOM.render(element, document.getElementById('root'));
// }, 1000);

// const Clock = ({locale}) => {
//   return (
//     <div className="container">
//       <h2>Time: {new Date().toLocaleTimeString(locale)}</h2>
//       <h2 className="title">Welcome to React World</h2>
//       <span className="sub-title">Since 2013 -by Jordan Walke</span>
//     </div>
//   );
// };

// class Clock {
//   print() {
//     return (
//       <div className="container">
//         <h2>Time: {new Date().toLocaleTimeString()}</h2>
//         <h2 className="title">Welcome to React World</h2>
//         <span className="sub-title">Since 2013 -by Jordan Walke</span>
//       </div>
//     );
//   }
// }

// const ClockComponent = new Clock();

class Clock extends React.Component {
  render() {
    const {locale} = this.props;

    return (
      <div className="container">
        <h2>Time: {new Date().toLocaleTimeString(locale)}</h2>
        <h2 className="title">Welcome to React World</h2>
        <span className="sub-title">Since 2013 -by Jordan Walke</span>
      </div>
    );
  }
}

ReactDOM.render(<Clock locale="bn-BD" />, document.getElementById("root"));

/*
{
  element = {
    type: 'div',
    props: {
      className: 'container',
      children : [
        {
          type: 'h2',
          props: {
            className: 'title',
            children: 'Welcome to React World'
          }
        },
        {
          type: 'span',
          props: {
            className: 'sub-title',
            children: 'Since 2013 -by Jordan Walke'
          }
        }
      ]
    }
  }
}

*/
