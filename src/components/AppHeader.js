import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const AppHeader = () => {
  return (
    <AppBar position={'sticky'} color={'default'}>
      <Toolbar>
        <Typography color={'inherit'} component={Link} to={'/'} variant={'h5'}>
          Forum
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default AppHeader