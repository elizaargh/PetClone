import React from "react";

const formErrors = (props) => {
    return(
        <div>
            {Object.keys(formErrors).map((fieldName, i) => {
                if (formErrors[fieldName].length > 0){
                    return (
                        <p key={i}>{fieldName} {formErrors[fieldName]}</p>
                    )        
                } else {
                    return '';
                }
            })}
        </div>
    );
};

export default formErrors;