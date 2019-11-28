import React from 'react';
import './_installBtn.scss';

export default function InstallButton (props) {
        let { condition = true, children = null } = props;
        if (!condition) return null;

        return (
            <div className="InstallButton button">
                {children}
            </div>
        );
}