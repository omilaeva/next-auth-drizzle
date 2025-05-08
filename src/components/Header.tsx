// @flow
import * as React from 'react';

type Props = {
  children?: React.ReactNode;
};

export const Header = ({ children }: Props) => {

  return (
    <header>
      <div className="container nav-container">
        <div className="logo">
          <a href={"/"}>HyperIn<span>&nbsp;Care</span></a>
        </div>
        {children}
      </div>
    </header>
  );
};