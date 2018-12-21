import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { cloneElement } from 'react';
import Button from './Button';
import {
    btnSizes,
    btnStyles
} from './constants';
import styles from './styles/index.styl';

const getComponentType = (Component) => (Component ? (<Component />).type : undefined);

/**
 * @example ../examples/ButtonGroup.md
 */
const ButtonGroup = ({
    btnSize,
    btnStyle,
    vertical,
    children,
    className,
    ...props
}) => {
    const classes = {
        [styles.btnGroup]: !vertical,
        [styles.btnGroupVertical]: !!vertical,
        [styles.btnGroupLg]: btnSize === 'large' || btnSize === 'lg',
        [styles.btnGroupMd]: btnSize === 'medium' || btnSize === 'md',
        [styles.btnGroupSm]: btnSize === 'small' || btnSize === 'sm',
        [styles.btnGroupXs]: btnSize === 'extra-small' || btnSize === 'xs',
    };

    return (
        <div
            {...props}
            className={cx(className, classes)}
        >
            {React.Children.map(children, child => {
                if (React.isValidElement(child) && child.type === getComponentType(Button)) {
                    const childProps = {};
                    if (btnSizes.indexOf(btnSize) >= 0) {
                        childProps.btnSize = btnSize;
                    }
                    if (btnStyles.indexOf(btnStyle) >= 0) {
                        childProps.btnStyle = btnStyle;
                    }
                    return cloneElement(child, childProps);
                }

                return child;
            })}
        </div>
    );
};

ButtonGroup.propTypes = {
    // Component size variations.
    btnSize: PropTypes.oneOf(btnSizes),

    // Component visual or contextual style variants.
    btnStyle: PropTypes.oneOf(btnStyles),

    // Specifies whether a button group should be aligned vertically or not.
    vertical: PropTypes.bool,
};

ButtonGroup.defaultProps = {
    vertical: false,
};

export default ButtonGroup;
