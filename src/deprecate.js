const deprecateProp = ({ deprecatedPropName, remappedPropName }) => {
    if (remappedPropName) {
        console.warn(`Warning: the "${deprecatedPropName}" prop is deprecated. Use "${remappedPropName}" instead.`);
        return;
    }

    console.warn(`Warning: the "${deprecatedPropName}" prop is deprecated.`);
};

export default deprecateProp;
