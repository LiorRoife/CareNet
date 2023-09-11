import React from 'react';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingTop: '20px',
    backgroundColor: '#f7f7f7',
    padding: '20px',
};

const textStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'right',
    direction: 'rtl',
};

const emailStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#007bff',
    textDecoration: 'none',
    transition: 'color 0.2s',
    direction: 'ltr',
};

export default function ContactUsPage() {
    return (
        <div style={containerStyle}>
            <p style={textStyle}>
                ניתן ליצור קשר בכתובת המייל
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p style={emailStyle}>
                <a href="mailto:ContantCareNet@gmail.com" style={emailStyle}>
                    ContantCareNet@gmail.com
                </a>
            </p>
        </div>
    );
}