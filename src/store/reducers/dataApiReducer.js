import { GET_DATA } from '../actioTypes'
import deleteItemFromList from '../actions/deleteItemFromList'
import getDataFromApi from '../actions/dataFromApi'
import { createReducer } from '@reduxjs/toolkit'
import updateItem from '../actions/updateItem'
import { defaultEqualityCheck } from 'reselect'
const initialState = {
  dataList: [],
  item: '',
}
/**/
const dataApiReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getDataFromApi.pending, (state, action) => {})
    .addCase(getDataFromApi.fulfilled, (state, action) => {
      console.log(action.payload.data)
      state.dataList = action.payload.data
    })
    .addCase(deleteItemFromList, (state, action) => {
      const card = state.dataList.find(
        (card, index) => index === action.payload
      )
      const cardIndex = state.dataList.indexOf(card)
      const newCardList = [...state.dataList]
      newCardList.splice(cardIndex, 1)
      state.dataList = newCardList
    })
    .addCase(updateItem, (state, action) => {
      const newDataList = [...state.dataList]
      const card = state.dataList.find(
        (card, index) => index === action.payload.id
      )
      const cardIndex = state.dataList.indexOf(card)
      newDataList[cardIndex] = action.payload
      console.log(cardIndex)
      state.dataList = newDataList
    })
})

export default dataApiReducer
