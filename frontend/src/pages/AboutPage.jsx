import React from 'react';

// Styles for the container that holds the text
const containerStyle = {
    backgroundColor: '#f7f7f7',
    padding: '20px',
};

// Styles for the main text
const textStyle = {
    fontSize: '18px',
    color: '#333', // Text color
};

export default function AboutPage() {
    return (
        <div style={containerStyle}>
            <p style={textStyle}>
                The project aims to address the absence of a responsible organization for boycotting events, which has
                led to an alarming increase in child suicides, a previously uncommon phenomenon. To combat this, we are
                developing an anonymous and welcoming online platform where children, parents, and individuals can
                report boycotts and seek assistance. Through a chat feature, users will choose options like "I'm being
                boycotted" or "I know somebody being boycotted," providing necessary information. Simultaneously, the
                platform will offer immediate support while sending detailed messages to designated school personnel who
                can intervene and request more information. Our goal is to create a secure and supportive space that
                attracts individuals, floods information, and provides crucial aid to children facing boycotts.
            </p>
        </div>
    );
}