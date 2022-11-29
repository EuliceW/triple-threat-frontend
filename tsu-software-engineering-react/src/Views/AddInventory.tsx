import "../App.css";
import React, { useEffect, useState } from "react";
import {
        ClientTableJsonObject, getClients,
        StorageTableJsonObject, getStorageTypes,
        ResourceTableJsonObject, getResourceTypes,
        InventoryTableRow, InventoryTableJsonObject, getInventory, addInventory
} from "../DataObjects/InventoryDataInterface";

// class AddInventoryForm1 extends React.Component<{}, { name: string, storageType: string, maxItem: string, resourceName: string, maxResource: string, resourceType: string, currentResource: string, display: boolean }> {
//         constructor(props: any) {
//                 super(props);
//                 this.state = {
//                         name: '',
//                         storageType: '',
//                         maxItem: '',
//                         resourceName: '',
//                         maxResource: '',
//                         resourceType: '',
//                         currentResource: '',
//                         display: false
//                 };
//                 this.handleNameChange = this.handleNameChange.bind(this);
//                 this.handleStorageTypeChange = this.handleStorageTypeChange.bind(this);
//                 this.handleMaxItemChange = this.handleMaxItemChange.bind(this);
//                 this.handleResourceNameChange = this.handleResourceNameChange.bind(this);
//                 this.handleResourceTypeChange = this.handleResourceTypeChange.bind(this);
//                 this.handleMaxResourceChange = this.handleMaxResourceChange.bind(this);
//                 this.handleCurrentResourceChange = this.handleCurrentResourceChange.bind(this);
//                 this.handleSubmit = this.handleSubmit.bind(this);
//         }
//         handleNameChange(event: any) {
//                 const target = event.target;
//                 const value = target.type === 'checkbox' ? target.checked : target.value;
//                 const name = target.name;

//                 this.setState({
//                         name: value
//                 })
//                 console.log('Change detected. State updated' + name + ' = ' + value);

//         }
//         handleStorageTypeChange(event: any) {
//                 const target = event.target;
//                 const value = target.type === 'checkbox' ? target.checked : target.value;

//                 this.setState({
//                         storageType: value
//                 })
//         }
//         handleMaxItemChange(event: any) {
//                 const target = event.target;
//                 const value = target.type === 'checkbox' ? target.checked : target.value;

//                 this.setState({
//                         maxItem: value
//                 })
//         }
//         handleResourceNameChange(event: any) {
//                 this.setState({
//                         resourceName: event.target.value
//                 })
//         }
//         handleResourceTypeChange(event: any) {
//                 this.setState({
//                         resourceType: event.target.value
//                 })
//         }
//         handleMaxResourceChange(event: any) {
//                 this.setState({
//                         maxResource: event.target.value
//                 })
//         }
//         handleCurrentResourceChange(event: any) {
//                 this.setState({
//                         currentResource: event.target.value
//                 })
//         }
//         handleSubmit() {
//                 this.setState({
//                         display: true
//                 })
//         }
//         displayButtons() {
//                 const back = <div>
//                         <input type="button" onClick={this.handleSubmit} value="Back" />
//                         <input type="button" onClick={this.handleSubmit} value="Edit" />
//                         <input type="button" onClick={this.handleSubmit} value="DeleteClientData" /></div>
//                 return back;
//         }


//         render() {
//                 return (
//                         <div>
//                                 <form>
//                                         <div className="form-group">
//                                                 <h1> Inventory </h1>
//                                                 <label htmlFor="nameInput">Name</label>
//                                                 <label htmlFor="name" style={{ width: "10px", display: "inline-block", margin: "10px 20px 10px 5px" }}>
//                                                 </label>
//                                                 <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange}
//                                                         className="form-control" id="nameInput" placeholder="Name" />
//                                         </div>
//                                         <div className="form-group">
//                                                 <label htmlFor="storageType">Storage Type </label>
//                                                 <label htmlFor="claddrs" style={{ width: "10px", display: "inline-block", margin: "10px 20px 10px 5px" }}>
//                                                 </label>
//                                                 <input name="storage" type="text" value={this.state.storageType} onChange={this.handleStorageTypeChange}
//                                                         className="form-control" id="storageType" placeholder="Storage Type" />
//                                         </div>
//                                         <div className="form-group">
//                                                 <label htmlFor="nameInput">Max Item Capacity</label>
//                                                 <label htmlFor="maxitemcapacity" style={{ width: "10px", display: "inline-block", margin: "10px 20px 10px 5px" }}>
//                                                 </label>
//                                                 <input type="text" name="maxItem" value={this.state.maxItem} onChange={this.handleMaxItemChange}
//                                                         className="form-control" id="nameInput" placeholder="Max Item Capacity" />
//                                         </div>
//                                         <div className="form-group">
//                                                 <h1> Resources </h1>
//                                                 <label htmlFor="nameInput">Resource Name</label>
//                                                 <label htmlFor="Resources" style={{ width: "10px", display: "inline-block", margin: "10px 20px 10px 5px" }}>
//                                                 </label>
//                                                 <input type="text" name="resourceName" value={this.state.resourceName} onChange={this.handleResourceNameChange}
//                                                         className="form-control" id="nameInput" placeholder="Resource Name" />
//                                         </div>
//                                         <div className="form-group">
//                                                 <label htmlFor="nameInput">Resource Type</label>
//                                                 <label htmlFor="resourcetype" style={{ width: "10px", display: "inline-block", margin: "10px 20px 10px 5px" }}>
//                                                 </label>
//                                                 <input name="resourceType" value={this.state.resourceType} onChange={this.handleResourceTypeChange}
//                                                         className="form-control" id="nameInput" placeholder="Resource Type" />
//                                         </div>
//                                         <div className="form-group">
//                                                 <label htmlFor="nameInput">Max Number of Resources</label>
//                                                 <label htmlFor="maxnumberofresources" style={{ width: "10px", display: "inline-block", margin: "10px 20px 10px 5px" }}>
//                                                 </label>
//                                                 <input name="maxResource" value={this.state.maxResource} onChange={this.handleMaxResourceChange}
//                                                         className="form-control" id="nameInput" placeholder="Max Number of Resources" />
//                                         </div>
//                                         <div className="form-group">
//                                                 <label htmlFor="nameInput">Current Number of Resources</label>
//                                                 <label htmlFor="currentnumberofresources" style={{ width: "10px", display: "inline-block", margin: "10px 20px 10px 5px" }}>
//                                                 </label>
//                                                 <input type="text" name="currentResource" value={this.state.currentResource} onChange={this.handleCurrentResourceChange}
//                                                         className="form-control" id="nameInput" placeholder="Current number of Resources" />
//                                         </div>

//                                         <input type="button" onClick={this.handleSubmit} value="Submit" />
//                                         {this.state.display ? this.displayButtons() : ''}
//                                 </form>
//                         </div>
//                 )
//         }

// }

const defaultFormData = {
        abc_client: 0,
        storage_type: 0,
        inventory_name: 'default',
        max_item_capacity: 1000,
        created_by: 'web form',
        created_date: new Date().toISOString(),
        is_deleted: 0,
      };

function AddInventoryForm() {
        const [clientList, setClientList] = useState<ClientTableJsonObject[]>([]);
        const [resourceTypes, setResourceTypes] = useState<ResourceTableJsonObject[]>([]);
        const [storageTypes, setStorageTypes] = useState<StorageTableJsonObject[]>([]);
        const [inventoryList, setInventoryList] = useState<InventoryTableRow[]>([]);

        const [formData, setFormData] = useState(defaultFormData);

        const onChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
                setFormData((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                }));
        };
        const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement> ) => {
                setFormData((prevState) => ({
                        ...prevState,
                        [e.target.name]: parseInt(e.target.value),
                }));
        };

        const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                console.log('formData', formData)
                addInventory(formData).then(r => {
                        console.log(r)
                })
        };


        //A function that supports the creation of the inventory table.
        function loadInventories() {
                try {
                        getInventory().then(
                                function (response: any) {

                                        // Inventory Table Array..
                                        let inventoryTableArray: InventoryTableRow[] = [];

                                        //Define the output of my objects to the array.
                                        response.data.forEach((element: InventoryTableJsonObject) => {
                                                inventoryTableArray.push({
                                                        Id: (element.inventory_id ? element.inventory_id : null),
                                                        ClientName: (element.abc_client ? element.abc_client.client_name : null),
                                                        Inventory: (element.inventory_name ? element.inventory_name : ""),
                                                        StorageName: (element.storage_type ? element.storage_type.type_name : null),
                                                        Address: (element.address ? element.address : ""),
                                                        Capacity: (element.max_item_capacity ? element.max_item_capacity : null)
                                                });
                                        });

                                        setInventoryList(inventoryTableArray);
                                },
                                (error: any) => {
                                        console.log(error)
                                }
                        );
                } catch { }
        }

        function loadClientList() {
                try {
                        getClients().then(
                                function (response: any) {

                                        // Inventory Table Array..
                                        let tempList: ClientTableJsonObject[] = [];

                                        //Define the output of my objects to the array.
                                        response.data.forEach((element: ClientTableJsonObject) => {
                                                // console.log('e', element)
                                                tempList.push(element);
                                        });

                                        // console.log('templist', tempList)

                                        setClientList(tempList);
                                },
                                (error: any) => {
                                        console.log(error)
                                }
                        );
                } catch { }
        }

        function loadResourceTypes() {
                try {
                        getResourceTypes().then(
                                function (response: any) {

                                        // Inventory Table Array..
                                        let tempList: ResourceTableJsonObject[] = [];

                                        //Define the output of my objects to the array.
                                        response.data.forEach((element: ResourceTableJsonObject) => {
                                                // console.log('e', element)
                                                tempList.push(element);
                                        });

                                        // console.log('templist', tempList)

                                        setResourceTypes(tempList);
                                },
                                (error: any) => {
                                        console.log(error)
                                }
                        );
                } catch { }
        }

        function loadStorageTypes() {
                try {
                        getStorageTypes().then(
                                function (response: any) {

                                        // Inventory Table Array..
                                        let tempList: StorageTableJsonObject[] = [];

                                        //Define the output of my objects to the array.
                                        response.data.forEach((element: StorageTableJsonObject) => {
                                                // console.log('e', element)
                                                tempList.push(element);
                                        });

                                        // console.log('templist', tempList)

                                        setStorageTypes(tempList);
                                },
                                (error: any) => {
                                        console.log(error)
                                }
                        );
                } catch { }
        }

        useEffect(() => {
                loadClientList();
                // console.log(clientList)
                loadResourceTypes();
                loadStorageTypes();
                // loadInventories();
        }, []);

        return (
                <>
                        <form onSubmit={onSubmit}>
                                <label>Client</label>
                                <select name='abc_client' onChange = {(e) => onSelectChange(e)} >
                                        {clientList.map((row, i) =>
                                                <option value={row.abc_client_id.toString()}> {row.client_name.toString()}</option>
                                        )}
                                </select>

                                <label>Storage Type</label>
                                <select name='storage_type' onChange = {(e) => onSelectChange(e)} >
                                        {storageTypes.map((row, i) =>
                                                <option value={row.storage_type_id.toString()}> {row.type_name.toString()}</option>
                                        )}
                                </select>

                                <label>Inventory Name</label>
                                <input type='text' name='inventory_name'  onChange = {(e) => onChange(e)} />

                                <label>Max Capacity</label>
                                <input type="number" name='max_item_capacity'  onChange = {(e) => onChange(e)} />


                                {/* <div>
                                <h2>Add resource</h2>
                                <label>Inventory</label>
                                <select name='resource'>
                                        {inventoryList.map((row, i) =>
                                                <option value="{row.Id.toString()}"> {row.Inventory.toString()}</option>
                                        )}
                                </select>
                                <label>Resource Type</label>
                                <select name='resource'>
                                        {resourceTypes.map((row, i) =>
                                                <option value="{row.resource_type_id.toString()}"> {row.type_name.toString()}</option>
                                        )}
                                </select>

                                <label>Current</label>
                                <input type="number" name='current'/>

                                <label>Max</label>
                                <input type="number" name='max'/>

                                <button>Submit</button>
                        </div> */}

                                <input type="submit"/>
                        </form>
                </>
        )
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
                                <MainTitle />
                                <AddInventoryForm />
                        </div>
                )
        }

}
