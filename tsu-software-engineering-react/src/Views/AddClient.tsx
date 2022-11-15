import "../App.css";
import React, { useState } from "react";

const defaultFormData = {
  name: "",
  companyName: "",
  companyAddress: "",
  street: "",
  city: "",
  state: "",
  zipCode: "",
  companyPhoneNumber: "",
  clientName: "",
  clientEmail: "",
  clientPhoneNumber: "",

};

function AddClient() {

  const [formData, setFormData] = useState(defaultFormData);
  const { name, companyName, companyAddress, street, city, state, zipCode, companyPhoneNumber, clientName, clientEmail, clientPhoneNumber } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData)

    setFormData(defaultFormData);
  };

    return (
      <div>
        {/* Add Client text */}
        <h2 className="is-size-2 pb-6 has-text-weight-medium">Add Client</h2>


        <form onSubmit = {onSubmit}>
          <label htmlFor="name">Name</label> <input type = "text" id = "name" value = {name} onChange = {(e) => onChange(e)} />
          <br />
          <br />
          <label htmlFor="companyName">Company Name</label> <input type = "text" id = "companyName" value = {companyName} onChange = {(e) => onChange(e)} />
          <br />
          <br />
          <label htmlFor="companyAddress">Company Address</label>
          <br /> 
          <br />
          <label htmlFor="street">Street</label> <input type = "text" id = "companyAddress" value = {companyAddress} onChange = {(e) => onChange(e)} /> <label htmlFor="city">City:</label>
          <br />
          <br />
          <label htmlFor="companyPhoneNumber">Company Phone Number</label> <input type = "text" id = "comapnyPhoneNumber" value = {companyPhoneNumber} onChange = {(e) => onChange(e)} />
          <br />
          <br />
          <label htmlFor="clientName">Client Name</label> <input type = "text" id = "clientName" value = {clientName} onChange = {(e) => onChange(e)} />
          <br />
          <br />
          <label htmlFor="clientEmail">Client Email</label> <input type = "text" id = "clientEmail" value = {clientEmail} onChange = {(e) => onChange(e)} />
          <br />
          <br />
          <label htmlFor="clientPhoneNumber">Client Phone Number</label> <input type = "text" id = "clientPhonenumber" value = {clientPhoneNumber} onChange = {(e) => onChange(e)} />
          <br />
          <br />
          <button type = "submit">Submit</button>
        </form>





      </div>

    );
}

export default AddClient;
