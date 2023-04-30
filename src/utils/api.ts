import axios from 'axios';
import { BASE_API_URL } from './constants'

const getStory = async (id: number) => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story.data;
  } catch (error) {
    console.log('Error while getting a story.');
  }
};

export const getStories = async () => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/newstories.json`
    );
    const stories = await Promise.all(storyIds.slice(0, 100).map(getStory));
    return stories;
  } catch (error) {
    console.log('Error while getting list of stories.');
  }
};
const getComment = async (id: number) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return response.data;
  } catch (error) {
    console.log('Error while getting a story.');
  }
};

export const getComments = async (id: number) => {
  try {
    const response = await axios.get(
      `${BASE_API_URL}/item/${id}.json`
    );
    const comments = await Promise.all(response.data.kids.map(getComment));
    return comments;
  } catch (error) {
    console.log('Error while getting list of stories.');
  }
};