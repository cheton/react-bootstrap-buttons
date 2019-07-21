import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { cloneElement } from 'react';
import Button from './Button';
import {
    btnSizes, // deprecated
    btnStyles
} from './constants';
import deprecate from './deprecate';
import styles from './styles/index.styl';

const getComponentType = (Component) => (Component ? (<Component />).type : undefined);

/**
 * @example ../examples/ButtonGroup.md
 */
const ButtonGroup = ({
    btnSize, // deprecated
    lg,
    md,
    sm,
    xs,
    btnStyle,
    vertical,
    children,
    className,
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
        [styles.btnGroup]: !vertical,
        [styles.btnGroupVertical]: !!vertical,
        [styles.btnGroupLg]: lg,
        [styles.btnGroupMd]: md,
        [styles.btnGroupSm]: sm,
        [styles.btnGroupXs]: xs,
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
    // [deprecated] Component size variations.
    btnSize: PropTypes.oneOf(btnSizes),

    // Large button group.
    lg: PropTypes.bool,

    // Medium button group.
    md: PropTypes.bool,

    // Small button group.
    sm: PropTypes.bool,

    // Extra small button group.
    xs: PropTypes.bool,

    // Component visual or contextual style variants.
    btnStyle: PropTypes.oneOf(btnStyles),

    // Specifies whether a button group should be aligned vertically or not.
    vertical: PropTypes.bool,
};

ButtonGroup.defaultProps = {
    vertical: false,
};

export default ButtonGroup;
