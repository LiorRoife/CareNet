import React, { useState } from 'react';
import PhonePopupModal from './PhonePopUpModal.jsx'; // Import the PhonePopupModal component

function PhonePopup() {
    const [modalOpen, setModalOpen] = useState(false);
    const phoneNumber = '105'; // the actual phone number

    const handleCallClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <p>Click to call: <span onClick={handleCallClick}>105</span></p>
            {modalOpen && (
                <PhonePopupModal
                    onClose={handleCloseModal}
                    phoneNumber={phoneNumber}
                />
            )}
        </div>
    );
}

export default PhonePopup;