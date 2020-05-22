import React from 'react';


const Spinner = () => {
    return (
        <div className="ui segment">
            <div className="ui active dimmer">
                <div className="ui text loader">Please allow the permissons</div>
            </div>
            <p></p>
        </div>
    );
};

Spinner.defaultProps = {
    message : 'Loading...   '
};

export default Spinner;
