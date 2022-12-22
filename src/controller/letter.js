import FetchData from "../server/fetchData.js"

export default class Letter {
  async get() {
    const { getPostsData, getUsersData } = FetchData()

    const posts = await getPostsData()
    const users = await getUsersData()

    return users.map((user) => {
      const userWithPosts = posts.filter((post) => post.userId === user.id)

      return {
        ...user,
        posts: userWithPosts,
      }
    })
  }
}
