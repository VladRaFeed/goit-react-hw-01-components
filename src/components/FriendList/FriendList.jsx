import PropTypes from 'prop-types';
import css from './FriendList.module.css'
import { FriendListItem } from 'components/FriendListItem/FriendListItem'
export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friend_list}>
            {friends.map(friend => (
                <FriendListItem id={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }),
    ),
}