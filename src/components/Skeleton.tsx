import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton: React.FC = (props) => {
  return (
    <ContentLoader
      speed={7}
      width={300}
      height={466}
      viewBox='0 0 300 466'
      backgroundColor='#e8e8e8'
      foregroundColor='#d9d9d9'
      {...props}
    >
      <rect x='75' y='445' rx='0' ry='0' width='0' height='1' />
      <rect x='-1' y='6' rx='10' ry='10' width='302' height='213' />
      <rect x='2' y='238' rx='10' ry='10' width='86' height='25' />
      <rect x='212' y='237' rx='10' ry='10' width='86' height='25' />
      <rect x='2' y='275' rx='22' ry='22' width='295' height='61' />
      <rect x='3' y='354' rx='10' ry='10' width='105' height='41' />
      <rect x='142' y='354' rx='20' ry='20' width='161' height='41' />
    </ContentLoader>
  );
};
