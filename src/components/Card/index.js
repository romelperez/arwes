import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class Card extends Component {

  constructor () {
    super(...arguments);
  }

  render () {

    const { className, children, ...rest } = this.props;
    const cls = classNames('arwes-card', className);

    return (
      <div className={cls} {...rest}>
        {children}
      </div>
    );
  }
}

Card.propTypes = {};

Card.defaultProps = {};