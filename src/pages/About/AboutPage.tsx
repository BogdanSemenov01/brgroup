import { Button, ButtonGroup, Divider, Paper, Typography } from "@mui/material"
import { CommentType, StoryType } from "../../types/types"
import moment from "moment"

import { Comment } from "../../components/Comment"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import useSWR from "swr"
import { getComments } from "../../utils/api"

interface AboutPageProps {
  story: StoryType | null
}

export const AboutPage: React.FC<AboutPageProps> = ({ story }) => {
  const { data, isLoading, mutate } = useSWR(`${story?.id}`, getComments)
  const [ loading, setLoading ] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    if (!story) navigate("/")
  }, [navigate, story])

  if (!story) return <p>Oops...</p>
  return (
    <>
      <ButtonGroup
        fullWidth
        variant="text"
        sx={{ height: "50px", margin: "5px 0 5px 0" }}
      >
        <Button
          onClick={() => {
            navigate("/")
          }}
        >
          Back to news
        </Button>
        <Button
          disabled={loading}
          onClick={() => {
            setLoading(true)
            mutate()
              .then(() => setLoading(false))
              .catch(() => setLoading(false))
          }}
        >
          Refresh comments
        </Button>
      </ButtonGroup>
      <Paper>
        <Typography variant="h5">{story.title}</Typography>
        <Divider />
        <Typography variant="h6">
          Ссылка: <Link to={story.url}>{story.url}</Link>
        </Typography>
        <Typography variant="h6">
          Создано: {moment(story.time * 1000).format("MMMM Do YYYY, h:mm:ss a")}
        </Typography>
        <Typography variant="h6">Автор: {story.by}</Typography>
        <Typography variant="h6">
          Количество комментариев: {story.descendants}
        </Typography>
        <Divider />
        <Typography variant="h6">Comments</Typography>
        <Divider />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data &&
          data.map((item: CommentType) => <Comment com={item} key={item.id} />)
        )}
      </Paper>
    </>
  )
}
