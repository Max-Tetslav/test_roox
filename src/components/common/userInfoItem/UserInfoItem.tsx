import React from 'react';
import cl from './UserInfoItem.module.scss';

interface IProps {
  title: string;
  content: string;
}

function UserInfoItem({ title, content }: IProps) {
  return (
    <p className={cl.item}>
      <span className={cl.itemTitle}>
        <strong>{title}</strong>
      </span>
      {content}
    </p>
  );
}

export default UserInfoItem;
