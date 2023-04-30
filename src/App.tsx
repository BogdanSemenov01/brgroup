import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AboutPage, HomePage } from "./pages"
import { Container } from "@mui/material"
import { StoryType } from "./types/types"
import { useState } from "react"


function App() { 
  const [story, setStory] = useState<StoryType | null>(null)

  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<HomePage setStory={setStory}/>} />
          <Route path="/about/:id" element={<AboutPage story={story}/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
