import { useNavigate } from "react-router"; // Ensure this matches your router setup
import { useContext, useState } from "react";
import { Customer } from "../model/Customer";
import { CustomerContext } from "../component/CustomerProvider";

export function AddCustomer() {
    const navigate = useNavigate();
    const context = useContext(CustomerContext);

    if (!context) {
        throw new Error("CustomerContext must be used within a CustomerProvider");
    }

    const { customers, setCustomers } = context;

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit() {
        const newCustomer = new Customer(name, address, email, phone);
        setCustomers([...customers, newCustomer]);
        navigate("/");
    }

    return (
        <div>
            <header><h2>Add Customer</h2></header>
            <br />
            <input name="Name" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input name="Address" type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
            <input name="Email" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input name="Phone" type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
            <br />
            <button onClick={handleSubmit}>Add</button>
        </div>
    );
}
