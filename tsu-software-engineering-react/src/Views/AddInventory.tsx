import React from 'react';
class ContactForm extends React.Component<{}, { name: string, storageType: string, maxItem: string, resourceName: string, maxResource: string, resourceType: string, currentResource: string, display: boolean }> {
 constructor(props: any) {
  super(props);
  this.state = {
   name: '',
   storageType: '',
   maxItem: '',
   resourceName: '',
   maxResource: '',
   resourceType: '',
   currentResource: '',
   display: false
  };
  this.handleNameChange = this.handleNameChange.bind(this);
  this.handleStorageTypeChange = this.handleStorageTypeChange.bind(this);
  this.handleMaxItemChange = this.handleMaxItemChange.bind(this);
  this.handleResourceNameChange = this.handleResourceNameChange.bind(this);
  this.handleResourceTypeChange = this.handleResourceTypeChange.bind(this);
  this.handleMaxResourceChange = this.handleMaxResourceChange.bind(this);
  this.handleCurrentResourceChange = this.handleCurrentResourceChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
 }
 handleNameChange(event: any) {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  this.setState({
   name: value
  })
  console.log('Change detected. State updated' + name + ' = ' + value);

 }
 handleStorageTypeChange(event: any) {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;

  this.setState({
   storageType: value
  })
 }
 handleMaxItemChange(event: any) {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;

  this.setState({
   maxItem: value
  })
 }
 handleResourceNameChange(event: any) {
  this.setState({
   resourceName: event.target.value
  })
 }
 handleResourceTypeChange(event: any) {
  this.setState({
   resourceType: event.target.value
  })
 }
 handleMaxResourceChange(event: any) {
  this.setState({
   maxResource: event.target.value
  })
 }
 handleCurrentResourceChange(event: any) {
  this.setState({
   currentResource: event.target.value
  })
 }
 handleSubmit() {
  this.setState({
   display: true
  })
 }
 displayButtons() {
  const back = <div>
   <input type="button" onClick={this.handleSubmit} value="Back" />
  <input type="button" onClick={this.handleSubmit} value="Edit" />
  <input type="button" onClick={this.handleSubmit} value="DeleteClientData" /></div>
  return back;
 }
 render() {
  return (
   <div>
    <form>
     <div className="form-group">
      <h1> Inventory </h1>
      <label htmlFor="nameInput">Name</label>
      <label htmlFor="name" style={{ width: "10px", display: "inline-block", margin: "10px 20px 10px 5px" }}>
              </label>
      <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange}
       className="form-control" id="nameInput" placeholder="Name" />
     </div>
     <div className="form-group">
      <label htmlFor="storageType">Storage Type </label>
      <label htmlFor="claddrs" style={{ width: "10px", display: "inline-block", margin: "10px 20px 10px 5px" }}>
              </label>
      <input name="storage" type="text" value={this.state.storageType} onChange={this.handleStorageTypeChange}
       className="form-control" id="storageType" placeholder="Storage Type" />
     </div>
     <div className="form-group">
      <label htmlFor="nameInput">Max Item Capacity</label>
      <label htmlFor="maxitemcapacity" style={{ width: "10px", display: "inline-block", margin: "10px 20px 10px 5px" }}>
              </label>
      <input type="text" name="maxItem" value={this.state.maxItem} onChange={this.handleMaxItemChange}
       className="form-control" id="nameInput" placeholder="Max Item Capacity" />
     </div>
     <div className="form-group">
      <h1> Resources </h1>
      <label htmlFor="nameInput">Resource Name</label>
      <label htmlFor="Resources" style={{ width: "10px", display: "inline-block", margin: "10px 20px 10px 5px" }}>
              </label>
      <input type="text" name="resourceName" value={this.state.resourceName} onChange={this.handleResourceNameChange}
       className="form-control" id="nameInput" placeholder="Resource Name" />
     </div>
     <div className="form-group">
      <label htmlFor="nameInput">Resource Type</label>
      <label htmlFor="resourcetype" style={{ width: "10px", display: "inline-block", margin: "10px 20px 10px 5px" }}>
              </label>
      <input name="resourceType" value={this.state.resourceType} onChange={this.handleResourceTypeChange}
       className="form-control" id="nameInput" placeholder="Resource Type" />
     </div>
     <div className="form-group">
      <label htmlFor="nameInput">Max Number of Resources</label>
      <label htmlFor="maxnumberofresources" style={{ width: "10px", display: "inline-block", margin: "10px 20px 10px 5px" }}>
              </label>
      <input name="maxResource" value={this.state.maxResource} onChange={this.handleMaxResourceChange}
       className="form-control" id="nameInput" placeholder="Max Number of Resources" />
     </div>
     <div className="form-group">
      <label htmlFor="nameInput">Current Number of Resources</label>
      <label htmlFor="currentnumberofresources" style={{ width: "10px", display: "inline-block", margin: "10px 20px 10px 5px" }}>
              </label>
      <input type="text" name="currentResource" value={this.state.currentResource} onChange={this.handleCurrentResourceChange}
       className="form-control" id="nameInput" placeholder="Current number of Resources" />
     </div>
    
     <input type="button" onClick={this.handleSubmit} value="Submit" />
     {this.state.display ? this.displayButtons() : ''}
    </form>
   </div>
  )
 }

}
class MainTitle extends React.Component {
 render() {
  return (
    <h2 className="is-size-2 pb-6 has-text-weight-medium">Add Inventory</h2>
  )
 }
}
export default class App extends React.Component {
 render() {
  return (
   <div>
    <MainTitle/>
    <ContactForm/>
   </div>
  )
 }

}
