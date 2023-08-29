import { Box } from '@mui/material'
import React from 'react'

export default function Main({ children }) {
    return (
        <Box sx={{
            minHeight: "95vh",
            backgroundColor: "#40E0D0"
        }}>
            {children}
        </Box>
    )
}
