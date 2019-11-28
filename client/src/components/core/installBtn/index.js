import React from 'react';

export default function InstallButton (props) {
        let { condition = true, children = null } = props;
        if (!condition) return null;

        return (
            <div className="InstallButton button">
                {children}
            </div>
        );
}