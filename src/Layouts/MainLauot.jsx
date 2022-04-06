import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import TableList from 'Components/TableList'
import getDataFromApi from 'store/actions/dataFromApi'

const StyledMainLayout = styled.div`
  max-width: 1400px;
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
  { name: 'TRACKUNGNO', datakey: 'trackingNo' },
  { name: 'ORDERNO', datakey: 'orderNo' },
  { name: 'DELIVERYDATE', datakey: 'date' },
  { name: 'CUSTOMER', datakey: 'customer' },
  { name: 'STATUS', datakey: 'status' },
  { name: 'CONSIGNE', datakey: 'consignee' },
]
const MainLayout = () => {
  const dispatch = useDispatch()
  const dataArr = useSelector((store) => store.dataApiReducer.dataList)

  const LoaderElement = () => {
    useEffect(() => {
      dispatch(getDataFromApi())
    }, [])

    return (
      <StyledLoadingWrapper>
        <div>Loading...</div>
      </StyledLoadingWrapper>
    )
  }

  const Element = () => {
    if (!dataArr) {
      return <LoaderElement />
    } else {
      return <TableList columns={TASK_TABLE} />
    }
  }

  return (
    <StyledMainLayout>
      <Element />
    </StyledMainLayout>
  )
}

export default MainLayout
