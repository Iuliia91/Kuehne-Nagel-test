import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field, useFormik } from 'formik'
import FormikInput from './Formiknut'
import updateItem from 'store/actions/updateItem'
const StyledDeteilsOfItem = styled.div`
  width: 90%;
  height: 100%;
  //background: white;
  position: absolute;
  margin: auto;
  // top: 20%;
  left: 5%;

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
    //margin:40px;
    padding: 50px;

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
  const indexElement = props.indexOFElement
  const dispatch = useDispatch()

  const initialData = {
    trackingNo: element.trackingNo,
    orderNo: element.orderNo,
    date: element.date,
    customer: element.customer,
    status: element.status,
    consignee: element.consignee,
    id: indexElement,
  }

  return (
    <StyledDeteilsOfItem>
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
          console.log(formValues)
          props.handleCloseElement(false)
          dispatch(updateItem(formValues))
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
