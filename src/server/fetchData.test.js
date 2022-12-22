import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import { BASE_URL } from "../utils/BASE_URL.js"
import { postMock, userMock } from "../mock/mockData.js"
import FetchData from "./fetchData.js"

const axiosMock = new MockAdapter(axios)

describe("Testing fetch data", () => {
  let data

  beforeAll(() => {
    data = FetchData()
  })

  it("should run getUsersData return a user json", async () => {
    axiosMock.onGet(`${BASE_URL}/users`).reply(200, userMock)

    const users = await data.getUsersData()
    expect(users).toStrictEqual(userMock)
  })

  it("should throw an error to users request", async () => {
    axiosMock.onGet(`${BASE_URL}/users`).reply(500)

    expect(data.getUsersData).rejects.toThrow("Error:")
  })

  it("should run getPostsData return a post json", async () => {
    axiosMock.onGet(`${BASE_URL}/posts`).reply(200, postMock)

    const posts = await data.getPostsData()
    expect(posts).toStrictEqual(postMock)
  })

  it("should throw an error to posts request", async () => {
    axiosMock.onGet(`${BASE_URL}/posts`).reply(500)

    expect(data.getPostsData).rejects.toThrow("Error:")
  })
})
