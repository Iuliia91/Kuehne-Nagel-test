import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import TableList from 'Components/TableList'
import getDataFromApi from 'store/actions/dataFromApi'

const StyledMainLayout = styled.div`
  max-width: 90%;
  margin: auto;
`
const StyledLoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  font-size: 30px;
`
const TASK_TABLE = [
  { name: 'ORDERNO', datakey: 'orderNo' },
  { name: 'DELIVERYDATE', datakey: 'date' },
  { name: 'CUSTOMER', datakey: 'customer' },
  { name: 'TRACKUNGNO', datakey: 'trackingNO' },
  { name: 'STATUS', datakey: 'status' },
  { name: 'CONSIGNE', datakey: ' consignee ' },
]
const MainLayout = () => {
  const dispatch = useDispatch()
  const dataArr = useSelector((store) => store.dataApiReducer.dataList)
  console.log('hi')
  /*useEffect(() => {
    dispatch(getDataFromApi())
  }, [])*/

  /*if (!dataArr) {
    return (
      <StyledLoadingWrapper>
        <div>Loading...</div>
      </StyledLoadingWrapper>
    )
  }*/

  return (
    <StyledMainLayout>
      <TableList columns={TASK_TABLE} />
    </StyledMainLayout>
  )
}

export default MainLayout
