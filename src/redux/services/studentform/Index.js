// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const studentAPI = createApi({
  reducerPath: 'studentAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6641cd993d66a67b3434fc30.mockapi.io/' }),
  endpoints: (builder) => ({
    getallStudents: builder.query({
        query: (name) => `student`,
      })
  }),
})
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetallStudentsQuery } = studentAPI