const DELETE_FRIEND = 'DELETE_FRIEND';

let initialState = {
    friendsData: [
        { id: 1, img: "https://cdn.w600.comps.canstockphoto.ru/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%BF%D0%BE%D0%BF%D1%83%D0%B3%D0%B0%D0%B9-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F_csp52883922.jpg", name: "Roma" },
        { id: 2, img: "https://cdn.w600.comps.canstockphoto.ru/avatar-%D0%BA%D0%BE%D1%82-%D0%BF%D0%B5%D1%80%D1%81%D0%B8%D0%B4%D1%81%D0%BA%D0%B8%D0%B9-breeds-%D1%80%D0%B8%D1%81%D1%83%D0%BD%D0%BE%D0%BA_csp57717699.jpg", name: "Barsik" },
        { id: 3, img: "https://img.freepik.com/premium-vector/cute-dog-head-avatar_79416-67.jpg", name: "Margo" }
    ]
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_FRIEND:
            let stateCopy = { ...state };
            stateCopy.friendsData = [...state.friendsData];
            let idFriend = action.idFriend;
            const index = stateCopy.friendsData.findIndex(n => n.id === Number(idFriend));
            if (index !== -1) {
                stateCopy.friendsData.splice(index, 1);
            }
            return stateCopy;
        default:
            return state;
    }

}

export const deleteFriendActionCreator = (id) => ({
    type: DELETE_FRIEND,
    idFriend: id,
})

export default sidebarReducer;