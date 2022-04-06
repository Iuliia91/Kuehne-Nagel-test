import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field, useFormik } from 'formik'
import FormikInput from './Formiknut'
import updateItem from 'store/actions/updateItem'
const StyledDeteilsOfItem = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  font-size: 20px;
  position: absolute;
  top: ${(props) => props.leftValue};
  left: ${(props) => props.topValue};
  .form {
    background: white;
    & p {
      text-align: center;
      font-weight: 600;
      padding-top: 50px;
    }
  }

  .table {
    margin: auto;
    background: white;
    display: flex;
    flex-direction: row;

    padding: 50px;
    align-items: center;
    justify-content: center;
    width: 100%;

    & div {
      width: 100%;
    }
  }

  .button {
    text-align: center;
  }
  button {
    border: none;
    background: transparent;
    margin: 20px;
  }
  .button: hover {
    color: green;
  }
`

const DeteilsOfItem = (props) => {
  const element = props.element

  const dispatch = useDispatch()

  const initialData = {
    trackingNo: element.item.trackingNo,
    orderNo: element.item.orderNo,
    date: element.item.date,
    customer: element.item.customer,
    status: element.item.status,
    consignee: element.item.consignee,
  }

  let topX = (props.pageX - 1200) * 0.1 + 'px'
  let leftY = props.pageY - 600 + 'px'
  return (
    <StyledDeteilsOfItem topValue={topX} leftValue={leftY}>
      <Formik
        initialValues={initialData}
        validate={(formValues) => {
          const errorObj = {}

          if (!formValues.date) {
            errorObj.date = 'Field the fields'
          } else if (!formValues.customer) {
            errorObj.customer = 'Field the fields'
          } else if (!formValues.trackingNo) {
            errorObj.trackingNo = 'Field the fields'
          } else if (!formValues.orderNo) {
            errorObj.orderNo = 'Field the fields'
          } else if (!formValues.status) {
            errorObj.status = 'Field the fields'
          } else if (!formValues.consignee) {
            errorObj.consignee = 'Field the fields'
          }

          return errorObj
        }}
        onSubmit={(formValues, { resetForm }) => {
          const obj = {
            item: formValues,
            index: element.itemIndex,
          }
          props.handleCloseElement(false)
          dispatch(updateItem(obj))
          resetForm()
        }}
      >
        <Form>
          <div className="form">
            <p>SHIPMENT DETAILS</p>

            <div className="table">
              <div>
                <FormikInput name="orderNo" labeltext="orderNo" />
                <FormikInput name="customer" labeltext="customer" />
                <FormikInput name="consignee" labeltext="consignee" />
              </div>
              <div>
                <FormikInput name="date" labeltext="date" />
                <FormikInput name="trackingNo" labeltext="trackingNo" />
                <FormikInput name="status" labeltext="status" />
              </div>
            </div>
            <div className="button">
              <button type="submit">Change</button>
              <button
                type="button"
                onClick={() => {
                  props.handleCloseElement(false)
                }}
              >
                Close
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </StyledDeteilsOfItem>
  )
}

export default DeteilsOfItem
