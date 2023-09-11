import React from 'react';

function PhonePopup() {
    const handlePhoneClick = () => {
        console.log('Phone icon clicked');
        window.open('tel:1234567890');
    };

    return (
        <div>
            <p>Click to call: <span onClick={handlePhoneClick}>105</span></p>
        </div>
    );
}

export default PhonePopup;