import PropTypes from 'prop-types';
import { StaticticsList, StaticticsItem } from "./Statistics.styled";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {total
        ? (
        <StaticticsList>
          <StaticticsItem>Good: {good ? good : 0}</StaticticsItem>
          <StaticticsItem>Neutral: {neutral ? neutral : 0}</StaticticsItem>
          <StaticticsItem>Bad: {bad ? bad : 0}</StaticticsItem>
          <StaticticsItem>Total: {total ? total : 0}</StaticticsItem>
          <StaticticsItem>
            Positive feedback:{' '}
            {positivePercentage ? Math.round(positivePercentage) : 0}%
          </StaticticsItem>
        </StaticticsList>
        )
        : null
      }
    </>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};