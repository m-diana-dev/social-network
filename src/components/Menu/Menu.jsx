import { NavLink } from 'react-router-dom';
import Friends from '../Friends/Friends';
import classes from './Menu.module.css';
const Menu = (props) => {
    return (
        <div className={classes.menu}>
            <nav>
                <ul>
                    <li className={`${classes.item} ${classes.active}`}>
                        <NavLink to="/profile" className={menuLink => menuLink.isActive ? classes.active : null}>Profile</NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink to="/dialogs" className={menuLink => menuLink.isActive ? classes.active : null}>Message</NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink to="/news" className={menuLink => menuLink.isActive ? classes.active : null}>News</NavLink>
                    </li>
                    <li className={classes.item}>
                        <a href="#">Music</a>
                    </li>
                    <li className={classes.item}>
                        <a href="#">Settings</a>
                    </li>
                </ul>
            </nav>
            <Friends store={props.store} />
        </div>
    )
}

export default Menu;