import { GET_DATA } from '../actioTypes'
import deleteItemFromList from '../actions/deleteItemFromList'
import getDataFromApi from '../actions/dataFromApi'
import { createReducer } from '@reduxjs/toolkit'
import updateItem from '../actions/updateItem'
import { defaultEqualityCheck } from 'reselect'
const initialState = {
  dataList: null,
  item: '',
}
/**/
const dataApiReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getDataFromApi.pending, (state, action) => {})
    .addCase(getDataFromApi.fulfilled, (state, action) => {
      state.dataList = []
      state.dataList = action.payload.data
    })
    .addCase(deleteItemFromList, (state, action) => {
      const newlistofProduct = [...state.dataList]
      newlistofProduct.splice(action.payload, 1)
      state.dataList = newlistofProduct
    })

    .addCase(updateItem, (state, action) => {
      const newDataList = [...state.dataList]

      newDataList[action.payload.index] = action.payload.item
      /*  newDataList[action.payload.itemIndex] = action.payload*/

      state.dataList = [...newDataList]
    })
})

export default dataApiReducer
