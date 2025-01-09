import React, { useState } from 'react';
import { useDataContext } from './DataContext'; 
import './PayoutDetails.css'; 

const PayoutDetails = () => {
  const { articles, setArticles } = useDataContext(); 
  const [data, setData] = useState(articles);

  const handlePayoutChange = (index, value) => {
    const newData = [...data];
    newData[index].payoutRate = value;

    newData[index].payout = value * 10; 

    setData(newData);
    setArticles(newData); 
  };

  return (
    <div className="payout-details">
      <h3>Payout Details</h3>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Article</th>
            <th>Payout Rate</th>
            <th>Calculated Payout</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.author ? row.author : 'undefined'}</td>
              <td>{row.article}</td>
              <td>
                <input
                  type="number"
                  value={row.payoutRate || ''}
                  onChange={(e) => handlePayoutChange(index, e.target.value)}
                />
              </td>
              <td>{row.payout || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PayoutDetails; 