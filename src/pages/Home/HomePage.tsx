import useSWR from "swr"
import { BASE_API_URL } from "../../utils/constants"
import { getStories } from "../../utils/api"
import { StoryType } from "../../types/types"
import { NewsItem } from "../../components/NewsItem"
import { Button } from "@mui/material"
import { useState } from "react"

const REFRESH_INTERVAL = 60000

interface HomePageProps {
  setStory: any
}

export const HomePage: React.FC<HomePageProps> = ({ setStory }) => {
  const { data, isLoading, mutate } = useSWR(
    `${BASE_API_URL}/newstories.json`,
    getStories,
    { refreshInterval: REFRESH_INTERVAL }
  )

  const [loading, setLoading] = useState(false)

  return (
    <>
      <Button
        disabled={loading}
        onClick={() => {
          setLoading(true)
          mutate().then(res => setLoading(false)).catch(res => setLoading(false))
        }}
        sx={{ height: "50px", margin: "5px 0 5px 0", padding: 0 }}
        fullWidth
      >
        Refresh
      </Button>
      {isLoading && <p>Loading...</p>}
      {data &&
        data.map((story: StoryType) => {
          return <NewsItem key={story.id} story={story} setStory={setStory} />
        })}
    </>
  )
}
