import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'
import deleteItemFromList from 'store/actions/deleteItemFromList'
import DeteilsOfItem from './DeteilsOfItem'
const StyledTableList = styled.div`
  background-color: pinck;
  //margin: 20px;
  // border-radius: 5px;
  // width: 100%;

  .table-wrapper {
    margin-top: 20px;
    box-shadow: 0px 35px 50px rgba(0, 0, 0, 0.2);
  }

  .fl-table {
    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    // max-width: 100%;
    white-space: nowrap;
    background-color: white;
  }

  .fl-table td,
  .fl-table th {
    text-align: center;
    padding: 8px;
  }

  .fl-table td {
    border-right: 1px solid #f8f8f8;
    font-size: 12px;
  }

  .fl-table thead th {
    color: #ffffff;
    background: #4fc3a1;
  }

  .fl-table thead th:nth-child(odd) {
    color: #ffffff;
    background: #324960;
  }

  .fl-table tr:nth-child(even) {
    background: #f8f8f8;
  }

  @media (max-width: 767px) {
    .fl-table {
      display: block;
      width: 100%;
    }
    .table-wrapper:before {
      content: 'Scroll horizontally >';
      display: block;
      text-align: right;
      font-size: 11px;
      color: white;
      padding: 0 0 10px;
    }
    .fl-table thead,
    .fl-table tbody,
    .fl-table thead th {
      display: block;
    }
    .fl-table thead th:last-child {
      border-bottom: none;
    }
    .fl-table thead {
      float: left;
    }
    .fl-table tbody {
      width: auto;
      position: relative;
      overflow-x: auto;
    }
    .fl-table td,
    .fl-table th {
      padding: 20px 0.625em 0.625em 0.625em;
      height: 60px;
      vertical-align: middle;
      box-sizing: border-box;
      overflow-x: hidden;
      overflow-y: auto;
      width: 120px;
      font-size: 13px;
      text-overflow: ellipsis;
    }
    .fl-table thead th {
      text-align: left;
      border-bottom: 1px solid #f7f7f9;
    }
    .fl-table tbody tr {
      display: table-cell;
    }
    .fl-table tbody tr:nth-child(odd) {
      background: none;
    }
    .fl-table tr:nth-child(even) {
      background: transparent;
    }
    .fl-table tr td:nth-child(odd) {
      background: #f8f8f8;
      border-right: 1px solid #e6e4e4;
    }
    .fl-table tr td:nth-child(even) {
      border-right: 1px solid #e6e4e4;
    }
    .fl-table tbody td {
      display: block;
      text-align: center;
    }
  }
`
const TableList = (props) => {
  const [elements, setElement] = useState()

  const [index, setIndex] = useState()
  const [isVisible, setVisible] = useState(false)
  const [sortField, setSortField] = useState('')
  const [sortDirection, setSortDirection] = useState(1)
  const dataArr = useSelector((store) => store.dataApiReducer.dataList)
  const [tableData, setTableData] = useState(dataArr)
  const dispatch = useDispatch()

  const handleVisibleElement = (task, index, value) => {
    setVisible(value)
    setElement(task)
    setIndex(index)
  }

  const sortTable = (table) => {
    const newTable = [...table]
    newTable.sort((a, b) => {
      return a > b ? sortDirection : -sortDirection
    })
    return newTable
  }
  const handleSort = (fieldKey) => () => {
    if (fieldKey !== sortField) {
      setSortField(fieldKey)
      setSortDirection(1)
    } else {
      // setSortDirection(-sortDirection)
    }
  }

  useEffect(() => {
    setTableData(sortTable(tableData))
  }, [sortField, sortDirection])

  return (
    <StyledTableList>
      {isVisible && (
        <DeteilsOfItem
          element={elements}
          indexOFElement={index}
          handleCloseElement={handleVisibleElement}
        />
      )}
      <div className="table-wrapper">
        <table className="fl-table">
          {' '}
          <thead>
            <tr>
              {props.columns.map((column, index) => {
                return (
                  <th key={index} onClick={handleSort(column.datakey)}>
                    {column.name}
                  </th>
                )
              })}
              <th></th>
            </tr>
          </thead>{' '}
          <tbody>
            {tableData.map((task, index) => {
              return (
                <tr key={index}>
                  {props.columns.map((column, index) => {
                    return <td key={index}>{task[column.datakey]}</td>
                  })}

                  <td>
                    <FontAwesomeIcon
                      icon={faFileCirclePlus}
                      style={{ color: 'red', padding: 5 }}
                      onClick={() => {
                        handleVisibleElement(task, index, true)
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ color: 'red', padding: 5 }}
                      onClick={() => {
                        dispatch(deleteItemFromList(index))
                      }}
                    />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </StyledTableList>
  )
}

export default TableList
