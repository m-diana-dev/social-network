import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <img className={classes.banner} src="https://petgid.ru/wp-content/uploads/2022/03/miniature-poodle-main-870x400.jpeg" alt="banner"></img>
            <div className={classes.profile}>
                <img src="https://cdn.w600.comps.canstockphoto.ru/%D0%BC%D0%B8%D0%BB%D1%8B%D0%B9-%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0-%D0%BF%D1%83%D0%B4%D0%B5%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D1%80%D0%B8%D1%81%D1%83%D0%BD%D0%BE%D0%BA_csp56804391.jpg" alt="avatar"></img>
                <div className={classes.pwrappo}>
                    <div className={classes.pname}>Leva</div>
                    <ul className={classes.pinfo}>
                        <li>Date of Birth: 28 of April</li>
                        <li>City: Gagarin</li>
                        <li>Education: Home</li>
                    </ul>
                </div>
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;