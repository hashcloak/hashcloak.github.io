import React, { ReactNode, VFC } from 'react';

type Props = {
  children: ReactNode;
  additionalItemClass?: string;
  withAnchor?: boolean;
};

const ItemContainer: VFC<Props> = ({ children, additionalItemClass }) => (
  <>
    <div className={`custom-contents-item ${additionalItemClass || ''}`}>
      {children}
    </div>
  </>
);

export default ItemContainer;
