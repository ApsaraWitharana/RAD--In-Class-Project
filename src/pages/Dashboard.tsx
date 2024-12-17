import {CustomerContext} from "../component/CustomerProvider.tsx";
import {useContext} from "react";
import {Customer} from "../model/Customer.ts";

export function Dashboard() {
    const context = useContext(CustomerContext);

    if (!context) {
        throw new Error("CustomerContext must be used within a CustomerProvider");
    }

    const {customers} = context;
    return (
        <div>
            <h1>Welcome to the Dashboard</h1>
            <p>This is your personalized dashboard.</p>
            {customers.map((customer: Customer) => (<div
                key={customer.email}>{customer.name + ' ' + customer.address + ' ' + customer.email + ' ' + customer.phone}</div>))}
            <table border={1} cellPadding="8" style={{marginTop: "20px"}}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer) => (
                    <tr key={customer.email}>
                        <td>{customer.name}</td>
                        <td>{customer.address}</td>
                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>

                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
