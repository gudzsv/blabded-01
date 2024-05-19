// const tableHeaders = ['№', 'price', 'amount', 'date'];

import style from './CryptoHistory.module.css';
import { format } from 'date-fns';

export const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>No</th>
          <th className={style.th}>PRICE</th>
          <th className={style.th}>AMOUNT</th>
          <th className={style.th}>DATE</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => (
          <tr className={style.tr} key={item.id}>
            <td className={style.td}>{index + 1}</td>
            <td className={style.td}>{item.price}</td>
            <td className={style.td}>{item.amount}</td>
            <td className={style.td}>
              {format(new Date(item.date), 'dd/MM/yyyy, HH:mm aa')}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
