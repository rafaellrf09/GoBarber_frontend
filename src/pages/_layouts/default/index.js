import React from 'react';
import PropTypes from 'prop-types'

import { Wrapper } from './styles';

function DefalutLayout({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default DefalutLayout;

DefalutLayout.propTypes = {
 children: PropTypes.element.isRequired,
};
