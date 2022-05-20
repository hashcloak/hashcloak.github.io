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
// SERVICE
// custom-contents
// custom-contents-item
//  - img
//  - h5
//  - p

// Announcements
// custom-contents
// custom-contents-item
// - img
// - h5

// PRODUCTs
// custom-contents
// custom-contents-item
// - a
// - img
// - h5
// - p
