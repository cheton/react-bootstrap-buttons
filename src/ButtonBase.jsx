import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import styles from './styles/index.styl';

const ButtonBase = forwardRef((
    {
        tag: Component,
        type,
        className,
        disabled,
        ...props
    },
    ref,
) => {
    return (
        <Component
            ref={ref}
            type={type}
            className={cx(className, styles.btnBase)}
            disabled={disabled}
            aria-disabled={disabled}
            {...props}
        />
    );
});

ButtonBase.propTypes = {
    // Pass in a component to override default button element.
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

    // Specifies the type of button.
    type: PropTypes.oneOf([
        'button',
        'reset',
        'submit'
    ]),

    // Specifies whether a button should be disabled or not.
    disabled: PropTypes.bool,
};

ButtonBase.defaultProps = {
    tag: 'button',
    type: 'button',
    disabled: false,
};

ButtonBase.displayName = 'ButtonBase';

export default ButtonBase;
