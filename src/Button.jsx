import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    btnSizes,
    btnStyles
} from './constants';
import styles from './styles/index.styl';

/**
 * @example ../examples/Button.md
 */
const Button = ({
    className,
    tag: Component,
    type,
    btnSize,
    btnStyle,
    outline,
    active,
    hover,
    focus,
    disabled,
    block,
    dropdownToggle,
    ...props
}) => {
    const classes = {
        [styles.btn]: true,
        [styles.btnLg]: btnSize === 'large' || btnSize === 'lg',
        [styles.btnMd]: btnSize === 'medium' || btnSize === 'md',
        [styles.btnSm]: btnSize === 'small' || btnSize === 'sm',
        [styles.btnXs]: btnSize === 'extra-small' || btnSize === 'xs',
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
        [styles.dropdownToggle]: dropdownToggle
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
    tag: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string
    ]),
    type: PropTypes.oneOf([
        'button',
        'reset',
        'submit'
    ]),
    btnSize: PropTypes.oneOf(btnSizes),
    btnStyle: PropTypes.oneOf(btnStyles),
    outline: PropTypes.bool,
    active: PropTypes.bool,
    hover: PropTypes.bool,
    focus: PropTypes.bool,
    disabled: PropTypes.bool,
    block: PropTypes.bool,

    // Apply styles for use in a Dropdown.
    // This prop will be set automatically when the Button is used inside a Dropdown.
    dropdownToggle: PropTypes.bool
};

Button.defaultProps = {
    tag: 'button',
    type: 'button',
    btnSize: 'md',
    btnStyle: 'default',
    outline: false,
    active: false,
    hover: false,
    focus: false,
    disabled: false,
    block: false,
    dropdownToggle: false
};

export default Button;
