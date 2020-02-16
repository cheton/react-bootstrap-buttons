import cx from 'classnames';
import React from 'react';
import styles from './styles/index.styl';

/**
 * @example ../examples/ButtonToolbar.md
 */
const ButtonToolbar = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cx(className, styles.btnToolbar)}
        {...props}
    />
));

export default ButtonToolbar;
