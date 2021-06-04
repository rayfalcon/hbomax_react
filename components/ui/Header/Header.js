import Account from '../Account/Account';
import SearchModal from '../SearchModal/SearchModal';
import {useStateContext} from '../../HBOProvider';

const Header = (props) => {
    const globalState = useStateContext();

    return (
        <>
            <header className={`top-header ${globalState.accountModalOpen || globalState.sideNavOpen ? 'top-header--menu-open' : ''}`}>
                <div className="top-header__left-side">
                    <div className="top-header__menu-btn" onClick={() => globalState.setSideNavOpen(true)}>
                        <i className="fas fa-bars" />
                    </div>
                    <div className="top-header__search-btn" onClick={() => globalState.setSearchModalOpen(true)}>
                        <i className="fas fa-search" />
                    </div>
                </div>
                <div className="top-header__logo"></div>
                <div className="top-header__account" onClick={() => {globalState.setAccountModalOpen(!globalState.accountModalOpen)}}>
                    <img src="https://uifaces.co/our-content/donated/vIqzOHXj.jpg" className="top-header__user-img" />
                    <div className="top-header__user-name">Brendan</div>
                </div>
                <Account />
                <SearchModal />
            </header>
        </>
    )
}

export default Header;