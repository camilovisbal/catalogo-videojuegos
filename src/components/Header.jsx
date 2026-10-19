import "./Header.css";

function Header() {
    return (
        <header className="header">
            <p className="header__eyebrow">Tienda de videojuegos · Catálogo</p>
            <h1 className="header__title">La Estantería</h1>
            <p className="header__subtitle">
                Recorre el catálogo, busca por nombre y aparta tus favoritos.
        </p>
        </header>
    );
}

export default Header;