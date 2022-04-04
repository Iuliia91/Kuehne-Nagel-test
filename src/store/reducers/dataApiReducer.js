import { GET_DATA } from '../actioTypes'
import deleteItemFromList from '../actions/deleteItemFromList'
import getDataFromApi from '../actions/dataFromApi'
import { createReducer } from '@reduxjs/toolkit'
import updateItem from '../actions/updateItem'
const initialState = {
  dataList: [
    {
      orderNo: 87987946,
      date: '20/05/22',
      customer: 'fvbfbfb gvfn gvbfdvbff ',
      trackingNO: '464654677+97+97+97++97+94',
      status: 'ship',
      consignee: 'dsgfvbfbhgfhnhbn',
    },
    {
      orderNo: 87987946,
      date: '20/05/22',
      customer: 'fvbfbfb gvfn gvbfdvbff ',
      trackingNO: '464654677+97+97+97++97+94',
      status: 'ship',
      consignee: 'dsgfvbfbhgfhnhbn',
    },
    {
      orderNo: 87987946,
      date: '20/05/22',
      customer: 'fvbfbfb gvfn gvbfdvbff ',
      trackingNO: '464654677+97+97+97++97+94',
      status: 'ship',
      consignee: 'dsgfvbfbhgfhnhbn',
    },
    {
      orderNo: 87987946,
      date: '20/05/22',
      customer: 'fvbfbfb gvfn gvbfdvbff ',
      trackingNO: '464654677+97+97+97++97+94',
      status: 'ship',
      consignee: 'dsgfvbfbhgfhnhbn',
    },
  ],
  item: '',
}

const dataApiReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getDataFromApi.pending, (state, action) => {})
    .addCase(getDataFromApi.fulfilled, (state, action) => {
      console.log(action.payload.data)
      state.dataList = action.payload.data
    })
    .addCase(deleteItemFromList, (state, action) => {
      const card = state.dataList.find((card) => card.id === action.payload)
      const cardIndex = state.dataList.indexOf(card)
      const newCardList = [...state.dataList]
      newCardList.splice(cardIndex, 1)
      state.dataList = newCardList
    }).addCase
})

export default dataApiReducer
