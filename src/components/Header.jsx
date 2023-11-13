function Header() {
    return (
        <nav className="lime darken-1">
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">Showcase-shop</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="https://github.com/phildan02/showcase-shop" target="blank">Repo</a></li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };