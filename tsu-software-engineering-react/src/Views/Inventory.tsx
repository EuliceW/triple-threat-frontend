import "../App.css";
import SearchBox from "../Components/SearchBox";
import React, { useEffect, useState } from "react";
import { InventoryTableRow, InventoryTableJsonObject, getInventory, } from "../DataObjects/InventoryDataInterface";
import { INIT_INVENTORY_RESULT_DATA } from "../DataConstants/InventoryTableConstants";
// import { INIT_STORAGE_RESULT_DATA } from "../DataConstants/StorageTableConstants";
// import {StorageTableRow, StorageTableJsonObject} from '../DataObjects/StorageDataInterface';


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

function Inventory() {

        const [formData, setFormData] = useState(defaultFormData);
        const [tableData, setInventoryTableData] = useState<InventoryTableRow[]>([INIT_INVENTORY_RESULT_DATA]);
        const { name, companyName, companyAddress, street, city, state, zipCode, companyPhoneNumber, clientName, clientEmail, clientPhoneNumber } = formData;
        const [inventoryInput, inventoryUpdateSearch] = useState<string>("");
        const [searchParam] = useState(["ClientName", "Inventory", "StorageName"]);

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


        //A function that supports the creation of the inventory table.
        function setInventoryTable() {
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

                                        setInventoryTableData(inventoryTableArray);
                                },
                                (error: any) => {
                                        console.log(error)
                                }
                        );
                } catch { }
        }

        //The useEffect is a function that runs whenever the set data changes or when loading the page.
        useEffect(() => {
                setInventoryTable();
        }, []);

        // copy table data for appling search..
        const data = Object.values(tableData);

        function search(data : any[]) {
                return data.filter((item) => {
                        return searchParam.some((newItem) => {
                            return (
                                item[newItem]
                                    .toString()
                                    .toLowerCase()
                                    .indexOf(inventoryInput.toLowerCase()) > -1
                            );
                        });
            });
        }


        return (
                <>
                        <h2 className="is-size-2 pb-6 has-text-weight-medium">Inventory List</h2>

                        {/* Search Bar */}
                        <div>
                                <SearchBox searchInput={inventoryInput} updateSearch={inventoryUpdateSearch} />
                        </div>

                        <div className="box columns is-centered is-radiusless">
                                <div className="column is-12 px-0 py-0">
                                        <table className="table is-striped is-fullwidth">
                                                <thead>
                                                        <tr>
                                                                <th>#</th>
                                                                <th>Client Name</th>
                                                                <th>Inventory</th>
                                                                <th>Storage Name</th>
                                                                <th>Address</th>
                                                                <th>Capacity</th>
                                                        </tr>
                                                </thead>
                                                <tbody>
                                                        {search(data).map((row, i) =>
                                                                <tr id={(row.Id ? row.Id.toString() : "")}>
                                                                        <td>{(row.Id ? row.Id.toString() : "")}</td>
                                                                        <td>{(row.ClientName ? row.ClientName.toString() : "")}</td>
                                                                        <td>{(row.Inventory ? row.Inventory : "")}</td>
                                                                        <td>{(row.StorageName ? row.StorageName.toString() : "")}</td>
                                                                        <td>{(row.Address ? row.Address : "")}</td>
                                                                        <td>{(row.Capacity ? row.Capacity.toString() : "")}</td>
                                                                </tr>
                                                        )}
                                                </tbody>
                                        </table>
                                </div>
                        </div>
                </>
        );
}

export default Inventory;
