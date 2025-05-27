import React, { ReactNode, VFC } from 'react';

type ContainerProps = {
  children: ReactNode;
  id?: string;
  bg?: string;
};

const BaseContainer: VFC<ContainerProps> = ({ children, id, bg }) => (
  <>
    <section
      className={`flex flex-col items-center pb-20 px-10 sm:pb-40 md:px-24 lg:px-32 xl:px-72 ${
        bg || ''
      }`}
      id={id}
    >
      {children}
    </section>
  </>
);

export default BaseContainer;
