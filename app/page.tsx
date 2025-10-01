'use client'
import {
  Button,
  Box,
  Paper
} from '@mui/material'

export default function Home() {
  return (
    <Box
      component={Paper}
      sx={{
        minHeight: '100vh',
      }}
    >
      <Button variant='contained' color='success'>Hello</Button>
    </Box>
  )
}
