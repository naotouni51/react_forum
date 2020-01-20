import { Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { toDateText } from '../helpers/toDateText'

const useStyles = makeStyles({
  root: { display: 'grid', gridRowGap: 8 + 'px' },
  info: {
    display: 'grid',
    gridAutoColumns: 'max-content',
    gridAutoFlow: 'column',
    gridColumnGap: 8 + 'px'
  },
  text: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' }
})

const CardResponse = ({ response }) => {
  const classes = useStyles()

  return (
    <Card>
      <CardContent className={classes.root}>
        <div className={classes.info}>
          <Typography>{String(response.index)}</Typography>
          <Typography>
            {response.username || '名無しさん'}
          </Typography>
          <Typography>
            {toDateText(response.createdAt.toDate())}
          </Typography>
        </div>
        <Typography className={classes.text}>{response.text}</Typography>
      </CardContent>
    </Card>
  )
}

export default CardResponse