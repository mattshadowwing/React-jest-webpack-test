import * as React from 'react';

export const ContactError = ({contactErrors}:any) =>
    <div className="errors">
        <ul>
            {Object.keys(contactErrors).map((fieldName, i) => {
                if (contactErrors[fieldName].length > 0) {
                    return (
                        <li key={i}>- {fieldName} {contactErrors[fieldName]}</li>
                    )
                } else {
                    return '';
                }
            })}
        </ul>
    </div>