import React from 'react';
import PropTypes from 'prop-types'

import { Wrapper } from './styles';

import Header from '~/components/Header'

function DefalutLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

export default DefalutLayout;

DefalutLayout.propTypes = {
 children: PropTypes.element.isRequired,
};
