import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles/index.styl';

/**
 * @example ../examples/ButtonToolbar.md
 */
const ButtonToolbar = React.forwardRef((
    {
        tag: Component,
        className,
        ...props
    },
    ref
) => (
    <Component
        ref={ref}
        className={cx(className, styles.btnToolbar)}
        {...props}
    />
));

ButtonToolbar.propTypes = {
    // Pass in a component to override default element.
    tag: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
        PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
        PropTypes.arrayOf(PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.string,
            PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
        ]))
    ]),
};

ButtonToolbar.defaultProps = {
    tag: 'div',
};

export default ButtonToolbar;
