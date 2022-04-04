import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { GET_DATA } from '../actioTypes'
import apiRequest from 'api/apiInstance'

const getDataFromApi = createAsyncThunk(
  GET_DATA.getData,

  async () => {
    const response = await apiRequest.get()

    return response
  }
)

export default getDataFromApi
