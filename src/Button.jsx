import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    sizes,
    variants,
} from './constants';
import deprecate from './deprecate';
import styles from './styles/index.styl';

/**
 * @example ../examples/Button.md
 */
const Button = React.forwardRef((
    {
        className,
        tag: Component,
        type,
        lg,
        md,
        sm,
        xs,
        btnSize, // deprecated
        size,
        btnStyle, // deprecated
        variant,
        outline,
        block,
        active,
        hover,
        focus,
        disabled,
        ...props
    },
    ref,
) => {
    if (btnSize !== undefined) {
        const deprecatedPropName = 'btnSize';
        const remappedPropName = 'size';

        deprecate({ deprecatedPropName, remappedPropName });

        if (size === undefined) {
            size = btnSize;
        }
    }

    if (btnStyle !== undefined) {
        const deprecatedPropName = 'btnStyle';
        const remappedPropName = 'variant';

        deprecate({ deprecatedPropName, remappedPropName });

        if (variant === undefined) {
            variant = btnStyle;
        }
    }

    if (size !== undefined) {
        lg = (size === 'large' || size === 'lg');
        md = (size === 'medium' || size === 'md');
        sm = (size === 'small' || size === 'sm');
        xs = (size === 'extra-small' || size === 'xs');
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
        [styles.btnDefault]: variant === 'default' && !outline,
        [styles.btnPrimary]: variant === 'primary' && !outline,
        [styles.btnSecondary]: variant === 'secondary' && !outline,
        [styles.btnDanger]: variant === 'danger' && !outline,
        [styles.btnWarning]: variant === 'warning' && !outline,
        [styles.btnInfo]: variant === 'info' && !outline,
        [styles.btnSuccess]: variant === 'success' && !outline,
        [styles.btnLight]: variant === 'light' && !outline,
        [styles.btnDark]: variant === 'dark' && !outline,
        [styles.btnLink]: variant === 'link',
        [styles.btnOutlineDefault]: variant === 'default' && outline,
        [styles.btnOutlinePrimary]: variant === 'primary' && outline,
        [styles.btnOutlineSecondary]: variant === 'secondary' && outline,
        [styles.btnOutlineDanger]: variant === 'danger' && outline,
        [styles.btnOutlineWarning]: variant === 'warning' && outline,
        [styles.btnOutlineInfo]: variant === 'info' && outline,
        [styles.btnOutlineSuccess]: variant === 'success' && outline,
        [styles.btnOutlineLight]: variant === 'light' && outline,
        [styles.btnOutlineDark]: variant === 'dark' && outline,
        [styles.btnBlock]: block,
        [styles.hover]: hover,
        [styles.active]: active,
        [styles.focus]: focus,
    };

    return (
        <Component
            ref={ref}
            type={type}
            className={cx(className, classes)}
            disabled={disabled}
            {...props}
        />
    );
});

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

    // Large button.
    lg: PropTypes.bool,

    // Medium button.
    md: PropTypes.bool,

    // Small button.
    sm: PropTypes.bool,

    // Extra small button.
    xs: PropTypes.bool,

    // Component size variations.
    size: PropTypes.oneOf(sizes),

    // Component visual or contextual style variants.
    variant: PropTypes.oneOf(variants),

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
    variant: 'default',
    outline: false,
    block: false,
    active: false,
    hover: false,
    focus: false,
    disabled: false,
};

export default Button;
