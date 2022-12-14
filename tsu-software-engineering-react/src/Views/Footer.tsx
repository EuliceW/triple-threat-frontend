import "../App.css";

function Footer() {
    return (
        <footer className="footer mt-auto has-background-dark pb-4 pt-4">
            <div className="content">
                <ul>
                    <li><a className="navbar-item" href="/">Home</a></li>
                    <li><a className="navbar-item" href="/about">About</a></li>
                    <li><a className="navbar-item" href="/search">Search Client</a></li>
                    <li><a className="navbar-item" href="/add-client">Add Client</a></li>
                    <li><a className="navbar-item" href="/add-inventory">Add Inventory</a></li>
                    <li><a className="navbar-item" href="/inventory">Inventory</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
