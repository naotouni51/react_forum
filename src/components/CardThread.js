import { Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Link } from 'react-router-dom'
import { toDateText } from '../helpers/toDateText'

const useStyles = makeStyles({
  content: { display: 'grid', gridRowGap: 8 + 'px' },
  title: { display: 'grid', gridTemplateColumns: '1fr auto' }
})

const CardThread = ({ thread }) => {
  const classes = useStyles()

  return (
    <Card>
      <Link to={`/threads/${thread.id}`}>
        <CardContent className={classes.content}>
          <Typography className={classes.title}>
            <span>{thread.title}</span>
            <span>投稿数：{String(thread.responseCount)}</span>
          </Typography>
          <Typography>{toDateText(thread.updatedAt.toDate())}</Typography>
        </CardContent>
      </Link>
    </Card>
  )
}

export default CardThread