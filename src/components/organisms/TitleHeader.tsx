import React, { VFC } from 'react';

type Props = {
  title: string;
  description?: string;
};

const TitleHeader: VFC<Props> = ({ title, description }) => (
  <div className="custom-header">
    <h2 className="custom-header-title m-4">{title}</h2>
    {description && description ? <h5>{description}</h5> : null}
  </div>
);

export default TitleHeader;
