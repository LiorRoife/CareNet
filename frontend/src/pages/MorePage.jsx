import React from 'react';

// Styles for the container that holds the text and links
const containerStyle = {
    display: 'flex',
    flexDirection: 'column', // Stack items vertically
    alignItems: 'flex-end', // Align all items to the right
    paddingTop: '20px', // Add space at the top
    backgroundColor: '#f7f7f7', // Background color
    padding: '20px', // Add padding to the container
};

// Styles for the main text
const textStyle = {
    fontSize: '18px', // Increase the font size
    fontWeight: 'bold',
    textAlign: 'right', // Align the text to the right
};

// Styles for link text
const linkStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: '10px',
    color: '#007bff', // Link color
    textDecoration: 'none', // Remove underlines from links
    transition: 'color 0.2s', // Smooth color transition on hover

    // Add a hover effect
    ':hover': {
        color: '#0056b3', // New color on hover
    },
};

// Define an array of link objects with text and URLs
const links = [
    {
        text: 'התמודדות עם חרם חברתי',
        url: 'https://matzmichim.org.il/boycott',
    },
    {
        text: 'עמותת ים של חברים - חרם חברתי',
        url: 'https://www.yamshelhaverim.org.il/',
    },
    {
        text: 'קבוצת הפייסבוק - ים של חברים',
        url: 'https://www.facebook.com/groups/316986352810393/',
    },
    {
        text: 'יחידה 105 - המטה הלאומי להגנה על ילדים ברשת',
        url: 'https://www.police.gov.il/join/unit-105', // New link
    },
    // Add more links here as needed
];

export default function MorePage() {
    return (
        <div style={containerStyle}>
            <p style={textStyle}>
                לנוחיותכם אספנו מספר מקורות מידע, אתרים וקווים חמים לסיוע בנושא חרמות
            </p>

            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>

            {/* Map through the links array and render each link */}
            {links.map((link, index) => (
                <div key={index}>
                    <p>
                        <a href={link.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                            {link.text}
                        </a>
                    </p>
                    {index < links.length - 1 && (
                        <p>&nbsp;</p>
                    )}
                </div>
            ))}

            {/* Add more content here if needed */}
        </div>
    );
}
