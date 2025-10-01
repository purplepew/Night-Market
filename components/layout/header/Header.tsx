'use client'

import { useAppDispatch, useAppSelector } from '@/lib/store'
import { ShoppingCart } from '@mui/icons-material'
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Searchbar from './Searchbar'

export default function Header() {

    return (
        <AppBar>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Stack direction='row' alignItems='center' gap={4}>
                    <Typography>Night Market</Typography>

                    <Stack direction='row' gap={2}>
                        <Typography variant='body2' color='textSecondary' component='a' href='#'>All</Typography>
                        <Typography variant='body2' color='textSecondary' component='a' href='#'>Shirts</Typography>
                        <Typography variant='body2' color='textSecondary' component='a' href='#'>Sleeves</Typography>
                    </Stack>

                </Stack>


                <Stack>
                    <Searchbar />
                </Stack>

                <Stack>
                    <IconButton>
                        <ShoppingCart />
                    </IconButton>
                </Stack>

            </Toolbar>
        </AppBar>
    )
}
