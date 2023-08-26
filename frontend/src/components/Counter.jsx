import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function Counter() {
    const [counterValue, setCounterValue] = useState(Number(localStorage.getItem("counter")))
    const DecrementCounter = () => {
        setCounterValue(prev => prev - 1)
    }

    useEffect(() => {
        return () => {
            localStorage.setItem("counter", counterValue)
        }
    }, [counterValue])

    return (
        <Box>
            <Typography>{counterValue}</Typography>
            <Button variant='contained' onClick={() => setCounterValue((prev) => prev + 1)}>+</Button>
            <Button variant='contained' onClick={DecrementCounter}>-</Button>

        </Box>
    )
}
