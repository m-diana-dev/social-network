import classes from './Friend.module.css';
const Friend = (props) => {
    return (
        <div className={classes.friend}>
            <img src={props.img} alt="avatar"></img>
            <span>{props.name}</span>
        </div>
    )
}

export default Friend;