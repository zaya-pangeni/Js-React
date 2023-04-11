// import React, { useState } from 'react';

// function Form() {
//   const [formData, setFormData] = useState({});
//   const [submittedData, setSubmittedData] = useState([]);

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value
//     });
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setSubmittedData([...submittedData, formData]);
//     setFormData({});
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" name="name" value={formData.name || ''} onChange={handleChange} /><br></br>
//         </label>
//         <label>
//           Email:
//           <input type="email" name="email" value={formData.email || ''} onChange={handleChange} /><br></br>
//         </label>
//         <label>
//           Address:
//           <input type="text" name="address" value={formData.address || ''} onChange={handleChange} /><br></br>
//         </label>
//         <label>
//           Phone No :
//           <input type="tel" name="phone" value={formData.phone || ''} onChange={handleChange} /><br></br>
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//       <h2>Submitted Data:</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Address</th>
//             <th>Phone Number</th>
//           </tr>
//         </thead>
//         <tbody>
//           {submittedData.map((data, index) => (
//             <tr key={index}>
//               <td>{data.name}</td><br></br>
//               <td>{data.email}</td><br></br>
//               <td>{data.address}</td><br></br>
//               <td>{data.phone}</td><br></br>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Form;



import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {},
      submittedData: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(prevState => ({
      submittedData: [...prevState.submittedData, prevState.formData],
      formData: {}
    }));
  }

  render() {
    const { formData, submittedData } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name || ''} onChange={this.handleChange} /><br />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email || ''} onChange={this.handleChange} /><br />
          </label>
          <label>
            Address:
            <input type="text" name="address" value={formData.address || ''} onChange={this.handleChange} /><br />
          </label>
          <label>
            Phone No :
            <input type="tel" name="phone" value={formData.phone || ''} onChange={this.handleChange} /><br />
          </label>
          <button type="submit">Submit</button>
        </form>
        <h2>Submitted Data:</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td><br />
                <td>{data.email}</td><br />
                <td>{data.address}</td><br />
                <td>{data.phone}</td><br />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Form;
