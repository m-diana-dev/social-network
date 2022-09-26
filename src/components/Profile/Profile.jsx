import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.profileData.postsData} newPostText={props.profileData.newPostText} store={props.store} />
        </div>
    )
}

export default Profile;