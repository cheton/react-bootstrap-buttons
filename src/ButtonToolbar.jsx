import cx from 'classnames';
import React from 'react';
import styles from './styles/index.styl';

/**
 * @example ../examples/ButtonToolbar.md
 */
const ButtonToolbar = ({ className, ...props }) => (
    <div
        {...props}
        className={cx(className, styles.btnToolbar)}
    />
);

export default ButtonToolbar;
