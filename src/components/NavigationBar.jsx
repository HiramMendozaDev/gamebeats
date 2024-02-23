import '../styles/NavigationBar.css';

export default function NavigationBar() {
    return (
        <nav className='navigation'>
            <div className="navigation__div">
                <h1 className='navigation__title'>GameBeats</h1>
                <input type="search" name="searchbar" id="searchbar" className='navigation__searchbar' placeholder='Super Mario bros OST...' />
            </div>

            <ul className='navigation__list'>
                <li className='navigation__link'>HOME</li>
                <li className='navigation__link'>MY LIBRARY</li>
                <li className='navigation__link'>ABOUT</li>
                <button className='navigation__button button--log'>Log in</button>
                <button className='navigation__button button--sign'>Sign in</button>
            </ul>
        </nav>
    )
}