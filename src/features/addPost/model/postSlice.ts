import { FileWithPath } from 'react-dropzone'

import { createSlice } from '@reduxjs/toolkit'

interface PostState {
  images: FileWithPath[]
}

const initialState: PostState = {
  images: [],
}

const postSlice = createSlice({
  initialState,
  name: 'post',
  reducers: {
    addImages: (state, action) => {
      state.images = [...state.images, ...action.payload]
    },
    clearImages: state => {
      state.images = []
    },
  },
})

export const { addImages, clearImages } = postSlice.actions

export default postSlice.reducer
