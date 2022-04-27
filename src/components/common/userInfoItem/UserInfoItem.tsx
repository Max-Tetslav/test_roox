import React from 'react';
import cl from './UserInfoItem.module.scss';

interface IUserInfoItemProps {
  title: string;
  content: string;
}

const UserInfoItem: React.FC<IUserInfoItemProps> = ({ title, content }) => {
  return (
    <p className={cl.item}>
      <span className={cl.itemTitle}>
        <strong>{title}</strong>
      </span>
      {content}
    </p>
  );
};

export default UserInfoItem;
