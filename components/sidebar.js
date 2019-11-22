import React, {useState} from 'react'
import Link from '../components/helpers/Link'

const Sidebar = () => {
    const [mobileMenu, useMobileMenu] = useState(false);

    return(
        <>
        <div role="banner" className={`w-100 h-100 relative ma0 pv2 db white`}>
            <a href="/" className={`sidebar__logo tc w-100 pv3`}>
                <h1 className={`fw9 f2`}><span>Tim</span> Lentz</h1>

            </a>
            <button className={`sidebar__logo sidebar__menu__button white db dn-l fw8`} onClick={useMobileMenu}><i style={{marginRight: '.8em'}} className={`fa fa-bars`}></i>MENU</button>

            <nav role={"navigation"} className={`${mobileMenu ? 'mobile__menu__open' : 'mobile__menu__closed'} mobile__menu`}>
                <ul>
                    <Link activeClassName={`sidebar__nav__active`} href={'/'} >
                        <li onClick={() => useMobileMenu(false)} className={`sidebar__nav__item sidebar__nav__item__overview`}>
                            <a>
                                OVERVIEW
                            </a>
                        </li>
                    </Link>
                    <Link activeClassName={`sidebar__nav__active`} href={'/whoiam'} >
                        <li onClick={() => useMobileMenu(false)} className={`sidebar__nav__item sidebar__nav__item__who`}>
                            <a>
                                WHO I AM
                            </a>
                        </li>
                    </Link>
                    <Link activeClassName={`sidebar__nav__active`} href={'/portfolio'} >
                        <li onClick={() => useMobileMenu(false)} className={`sidebar__nav__item sidebar__nav__item__portfolio`}>
                            <a>
                                PORTFOLIO
                            </a>
                        </li>
                    </Link>
                    <Link activeClassName={`sidebar__nav__active`} href={'/contact'} >
                        <li onClick={() => useMobileMenu(false)} className={`sidebar__nav__item sidebar__nav__item__contact`}>
                            <a>
                                CONTACT
                            </a>
                        </li>
                    </Link>
                </ul>
            </nav>

            <h1 className={`${mobileMenu ? 'mobile__menu__closebutton__active' : 'dn'} mobile__menu__closebutton`} onClick={() => useMobileMenu(false)}>X</h1>
        </div>

        <style jsx>{`
            .sidebar__logo h1 span {
                color: #f26823;
            }
            .sidebar__logo:hover > h1 span{
                animation-name: colorspin;
                animation-duration: 800ms;
                animation-iteration-count: infinite;
            }
            @keyframes colorspin {
                0%{color:#f26823}
                20%{color:#d5df10}
                40%{color:#00b6ad}
                60%{color:#3B3B97}
                80%{color:#FF00EE}
                100%{color:#7F08FB}
            }
            
        `}</style>
        </>
    )
}
export default Sidebar