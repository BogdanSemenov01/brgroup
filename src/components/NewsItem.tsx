import { Card, CardContent, Grid, Typography } from "@mui/material"
import { StoryType } from "../types/types"
import moment from "moment"
import { Link } from "react-router-dom"

interface NewsItemProps {
  story: StoryType
  setStory: any
}

export const NewsItem: React.FC<NewsItemProps> = ({ story, setStory }) => {
  const { title, score, time, descendants, by } = story
  const ago = moment(time * 1000).fromNow()

  return (
    <Link
      to={"about/" + story.id}
      style={{
        textDecoration: "none",
      }}
      onClick={() => {
        setStory(story)
      }}
    >
      <Card sx={{ margin: "5px" }}>
        <CardContent
          sx={{
            padding: 1,
            "&:last-child": {
              paddingBottom: 0,
            },
          }}
        >
          <Grid container>
            <Grid xs={12} item>
              <Typography>{title}</Typography>
            </Grid>
            <Grid xs={12} sx={{ display: "flex", gap: "5px" }} item>
              <Typography color="text.secondary">{score} points</Typography>
              <Typography color="text.secondary">by {by}</Typography>
              <Typography color="text.secondary">{ago}</Typography>
              <Typography color="text.secondary">
                comments: {descendants}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Link>
  )
}
