import axios from "axios";

export interface InventoryTableRow {
    Id: Number,
    // ClientId: Number,
    ClientName: String,
    Inventory: String,
    // StorageId: Number,
    StorageName: String,
    Address: String,
    Capacity: Number
}


export interface InventoryTableJsonObject {
    inventory_id: Number,
    abc_client: ClientTableJsonObject,
    inventory_name: String,
    storage_type: StorageTableJsonObject,
    address: String,
    max_item_capacity: Number
}

export interface StorageTableJsonObject {

    storage_type_id: Number,
    type_name: String,
    // created_by : "Initialized Data",
    // created_date : "2022-11-14T11:39:42Z",
    // modified_by : null,
    // modified_date : null,
    // is_deleted : 0
}
export interface ClientTableJsonObject {

    abc_client_id: Number,
    client_name: String,
    // "company_address": 1,
    // "phone_number": "999-999-9999",
    // "created_by": "Initialized Data",
    // "created_date": "2022-11-14T11:39:42Z",
    // "modified_by": null,
    // "modified_date": null,
    // "is_deleted": 0
}


export async function getInventory() {
    const response = await axios.get(
        'http://localhost:8000/Inventory',
        {}
    );

    return response;
}

export async function getClients() {
    const response = await axios.get(
        'http://localhost:8040/clients',
        {}
    );

    return response;
}



