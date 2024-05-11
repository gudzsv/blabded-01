import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const icons = [
  <FaRegThumbsUp key="0" />,
  <MdPeople key="1" />,
  <MdOutlineProductionQuantityLimits key="2" />,
  <GiTreeDoor key="3" />,
];

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.list}>
        {stats.map((el, index) => {
          return (
            <StatisticsItem
              key={el.id}
              title={el.title}
              total={el.total}
              icon={icons[index]}
            />
          );
        })}
      </ul>
    </>
  );
};
