import React from 'react';
import { BsUpcScan } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import './title.css';


export default function Title() {
  const location = useLocation();

  // Define a function to determine if the current route is '/history'
  const isHistoryRoute = () => {
    return location.pathname === '/history';
  };

  return (
    <div className='text-container'>
      {isHistoryRoute() ? (
      <div className='history-title'>
        <img src='https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYyQFtPy4BljxFiYM47WVnjMmZdFqekScny1XMhJWoyUNjZYHHOZwSUCbtU5o8VWYvaG-Wj_r6XDCuzkOFs-o-1lYSDnA=w2940-h6354-v0' alt=" Logo" />
        <div>
          <h1>Know what you searched for</h1>
          <p>The new way to check your food Nutrution value by Nutrilens</p>
        </div>
      </div>
      ) : (
      <div className='text-container'>
      <img src='https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYyQFtPy4BljxFiYM47WVnjMmZdFqekScny1XMhJWoyUNjZYHHOZwSUCbtU5o8VWYvaG-Wj_r6XDCuzkOFs-o-1lYSDnA=w2940-h6354-v0' alt=" Logo" />
      <h1 className=''>Know Your Food Nutrition</h1>
      <p>The new way to check your food Nutrition value by Nutrilens</p>
      </div>
      )}
    </div>
  );
}
