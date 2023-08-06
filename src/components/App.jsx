import PropTypes from 'prop-types';
import user from '../data/user.json'
import data from '../data/data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'
import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics"
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import css from './App.module.css'
export const App = () => {
  return (
    <div className={css.GlobalWrapper}>
      <Profile username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                followers={user.stats.followers}
                views={user.stats.views}
        likes={user.stats.likes} />
      <Statistics title="Upload Stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
    
  )
};

App.propTypes = {
    user: PropTypes.arrayOf(PropTypes.exact({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })),
    data: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })),
    friends: PropTypes.arrayOf(PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })),
    transactions: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })),
}