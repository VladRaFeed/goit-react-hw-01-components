import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'
export const TransactionHistory = ({ items }) => {
    // console.log(items)
    return (
        <table className={css.transaction_history}>
            <thead className={css.table_head}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id}>
                        <th>{type}</th>
                        <th>{amount}</th>
                        <th>{currency}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })),
}