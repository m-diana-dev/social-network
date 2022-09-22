import classes from './Post.module.css';

const Post = (props) => {

    return (
        <div className={classes.item}>
            <div className={classes.item_wrapp}>
                <img className={classes.item_img} src="https://cdn.w600.comps.canstockphoto.ru/%D0%BC%D0%B8%D0%BB%D1%8B%D0%B9-%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0-%D0%BF%D1%83%D0%B4%D0%B5%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D1%80%D0%B8%D1%81%D1%83%D0%BD%D0%BE%D0%BA_csp56804391.jpg" alt="avatar"></img>
                <div className={classes.item_text}>
                    {props.message}
                </div>
            </div>
            <div className={classes.item_like}>
                <img src="https://icons.veryicon.com/png/o/miscellaneous/ui-basic-linear-icon/like-106.png" alt="like"></img>
                <span>{props.likes} likes</span>
            </div>
        </div>
    )
}

export default Post;