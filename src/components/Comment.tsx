import { Button, Grid, Paper, Typography } from "@mui/material"
import { CommentType } from "../types/types"
import moment from "moment"

import parse from "html-react-parser"
import { useState } from "react"
import useSWR from "swr"
import { getComments } from "../utils/api"

interface CommentProps {
  com: CommentType
}


export const Comment: React.FC<CommentProps> = ({ com }) => {
  const { id, by, kids, text, time } = com
  const { data } = useSWR(`${id}`, getComments)
  const [isSubComOpen, setIsSubComOpen] = useState(false)
  const [hasSubCom, setHasSubCom] = useState(true)
  if (data && kids === undefined) {
    setHasSubCom(false)
  }

  return (
    <>
      <Grid container>
        <Paper sx={{paddingLeft: 1, marginBottom: 1, maxWidth: '99%'}} elevation={3}>
          <Grid item xs={12}>
            <Typography component='div'>{by + " " + moment(time * 1000).fromNow()}</Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{ paddingLeft: 1, fontSize: "12px" }}
            >
              {text ? parse(text) : 'Oops...'}
            </Typography>
            <Typography variant="body1" align="right" component='div'>
              {kids !== undefined ?
                <Button
                  onClick={() => {
                    setIsSubComOpen((prev) => !prev)
                  }}
                  disabled={!hasSubCom}
                >
                  {kids.length} comment
                </Button>
              : 
                <p>No comments</p>
              }
            </Typography>
            {isSubComOpen &&
              data &&
              data.map((item: CommentType) => <Comment com={item} key={item.id}/>)}
          </Grid>
        </Paper>
      </Grid>
    </>
  )
}
