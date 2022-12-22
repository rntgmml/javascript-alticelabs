import axios from "axios"
import { BASE_URL } from "../utils/BASE_URL.js"

export default function FetchData() {
  async function getUsersData() {
    try {
      const { data } = await axios.get(`${BASE_URL}/users`)
      return data
    } catch (error) {
      throw new Error(`Error: ${error.message}`)
    }
  }

  async function getPostsData() {
    try {
      const { data } = await axios.get(`${BASE_URL}/posts`)
      return data
    } catch (error) {
      throw new Error(`Error: ${error.message}`)
    }
  }

  return { getUsersData, getPostsData }
}
