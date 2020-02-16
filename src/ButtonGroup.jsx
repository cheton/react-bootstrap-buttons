import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { cloneElement } from 'react';
import Button from './Button';
import {
    sizes,
    variants,
} from './constants';
import deprecate from './deprecate';
import styles from './styles/index.styl';

const getComponentType = (Component) => (Component ? (<Component />).type : undefined);

/**
 * @example ../examples/ButtonGroup.md
 */
const ButtonGroup = React.forwardRef((
    {
        tag: Component,
        lg,
        md,
        sm,
        xs,
        btnSize, // deprecated
        size,
        btnVariant, // deprecated
        variant,
        vertical,
        children,
        className,
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
        [styles.btnGroup]: !vertical,
        [styles.btnGroupVertical]: !!vertical,
        [styles.btnGroupLg]: lg,
        [styles.btnGroupMd]: md,
        [styles.btnGroupSm]: sm,
        [styles.btnGroupXs]: xs,
    };

    return (
        <Component
            ref={ref}
            className={cx(className, classes)}
            {...props}
        >
            {React.Children.map(children, child => {
                if (React.isValidElement(child) && child.type === getComponentType(Button)) {
                    const childProps = {};
                    if (sizes.indexOf(size) >= 0) {
                        childProps.size = size;
                    }
                    if (variants.indexOf(variant) >= 0) {
                        childProps.variant = variant;
                    }
                    return cloneElement(child, childProps);
                }

                return child;
            })}
        </Component>
    );
});

ButtonGroup.propTypes = {
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

    // Large button group.
    lg: PropTypes.bool,

    // Medium button group.
    md: PropTypes.bool,

    // Small button group.
    sm: PropTypes.bool,

    // Extra small button group.
    xs: PropTypes.bool,

    // Component size variations.
    size: PropTypes.oneOf(sizes),

    // Component visual or contextual style variants.
    variant: PropTypes.oneOf(variants),

    // Specifies whether a button group should be aligned vertically or not.
    vertical: PropTypes.bool,
};

ButtonGroup.defaultProps = {
    tag: 'div',
    vertical: false,
};

export default ButtonGroup;
