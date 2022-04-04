import { GET_DATA } from '../actioTypes'
import { createAction } from '@reduxjs/toolkit'

const updateItem = createAction(GET_DATA.updateItem)

export default updateItem
