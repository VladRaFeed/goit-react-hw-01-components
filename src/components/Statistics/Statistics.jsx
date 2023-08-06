import PropTypes from 'prop-types';
import css from './Statistics.module.css'
import { randomColor } from 'random_color';

export const Statistics = ({ title, data }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

                <ul className={css.stats_list}>
                    {data.map(({ id, label, percentage }) => (
                        <li
                            key={id}
                            className={css.item}
                            style={{
                             backgroundColor: randomColor()
                            }}
                        >
                            <span className={css.labelStats}>{label}</span>
                            <span className={css.percentage}>{percentage}%</span>
                        </li>
                        ))}
                </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}