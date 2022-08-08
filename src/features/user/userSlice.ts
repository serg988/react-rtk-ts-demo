import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

type User = {
  id: number
  name: string
}

type InitialState = {
  loading: boolean
  users: User[]
  error: string
}
const initialState: InitialState = {
  loading: false,
  users: [],
  error: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true
    })
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.loading = false
        state.users = action.payload
        state.error = ''
      }
    )
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.users = []
      const newLocal = (state.error =
        action.error.message || 'Something went wrong')
    })
  },
})

// Generate pending, fulfilled and rejected actions types
export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  const users = res.data.map((user: User) => user)

  return users
})

export default userSlice.reducer
