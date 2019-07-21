import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    btnSizes, // deprecated
    btnStyles
} from './constants';
import deprecate from './deprecate';
import styles from './styles/index.styl';

/**
 * @example ../examples/Button.md
 */
const Button = ({
    className,
    tag: Component,
    type,
    btnSize, // deprecated
    lg,
    md,
    sm,
    xs,
    btnStyle,
    outline,
    block,
    active,
    hover,
    focus,
    disabled,
    ...props
}) => {
    if (btnSize !== undefined) {
        const deprecatedPropName = 'btnSize';
        const remappedPropName = 'lg|md|sm|xs';

        deprecate({ deprecatedPropName, remappedPropName });

        lg = (btnSize === 'large' || btnSize === 'lg');
        md = (btnSize === 'medium' || btnSize === 'md');
        sm = (btnSize === 'small' || btnSize === 'sm');
        xs = (btnSize === 'extra-small' || btnSize === 'xs');
    }

    if (lg) {
        md = false;
        sm = false;
        xs = false;
    }
    if (md) {
        sm = false;
        xs = false;
    }
    if (sm) {
        xs = false;
    }
    if (!lg && !md && !sm && !xs) {
        md = true;
    }

    const classes = {
        [styles.btn]: true,
        [styles.btnLg]: lg,
        [styles.btnMd]: md,
        [styles.btnSm]: sm,
        [styles.btnXs]: xs,
        [styles.btnDefault]: btnStyle === 'default' && !outline,
        [styles.btnPrimary]: btnStyle === 'primary' && !outline,
        [styles.btnSecondary]: btnStyle === 'secondary' && !outline,
        [styles.btnDanger]: btnStyle === 'danger' && !outline,
        [styles.btnWarning]: btnStyle === 'warning' && !outline,
        [styles.btnInfo]: btnStyle === 'info' && !outline,
        [styles.btnSuccess]: btnStyle === 'success' && !outline,
        [styles.btnLight]: btnStyle === 'light' && !outline,
        [styles.btnDark]: btnStyle === 'dark' && !outline,
        [styles.btnLink]: btnStyle === 'link',
        [styles.btnOutlineDefault]: btnStyle === 'default' && outline,
        [styles.btnOutlinePrimary]: btnStyle === 'primary' && outline,
        [styles.btnOutlineSecondary]: btnStyle === 'secondary' && outline,
        [styles.btnOutlineDanger]: btnStyle === 'danger' && outline,
        [styles.btnOutlineWarning]: btnStyle === 'warning' && outline,
        [styles.btnOutlineInfo]: btnStyle === 'info' && outline,
        [styles.btnOutlineSuccess]: btnStyle === 'success' && outline,
        [styles.btnOutlineLight]: btnStyle === 'light' && outline,
        [styles.btnOutlineDark]: btnStyle === 'dark' && outline,
        [styles.btnBlock]: block,
        [styles.hover]: hover,
        [styles.active]: active,
        [styles.focus]: focus,
    };

    return (
        <Component
            {...props}
            type={type}
            className={cx(className, classes)}
            disabled={disabled}
        />
    );
};

Button.propTypes = {
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

    // [deprecated] Component size variations.
    btnSize: PropTypes.oneOf(btnSizes),

    // Large button.
    lg: PropTypes.bool,

    // Medium button.
    md: PropTypes.bool,

    // Small button.
    sm: PropTypes.bool,

    // Extra small button.
    xs: PropTypes.bool,

    // Component visual or contextual style variants.
    btnStyle: PropTypes.oneOf(btnStyles),

    // Specifies whether to remove background image and color on a button.
    outline: PropTypes.bool,

    // Specifies whether to span the full width of a parent.
    block: PropTypes.bool,

    // Specifies whether to add active effect to a button.
    active: PropTypes.bool,

    // Specifies whether to add hover effect to a button.
    hover: PropTypes.bool,

    // Specifies whether to add focus effect to a button.
    focus: PropTypes.bool,

    // Specifies whether a button should be disabled or not.
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    tag: 'button',
    type: 'button',
    btnStyle: 'default',
    outline: false,
    block: false,
    active: false,
    hover: false,
    focus: false,
    disabled: false,
};

export default Button;
