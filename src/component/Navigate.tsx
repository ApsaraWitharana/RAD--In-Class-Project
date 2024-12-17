import {Link} from "react-router";
export function Navigation() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <Link to='/'>Dashboard</Link>
                        <br/>
                        <Link to='/add'>Add Customer</Link>
                        <br/>
                        <Link to='/delete'>Delete Customer</Link>
                        <br/>
                        <Link to='/update'>Update Customer</Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}