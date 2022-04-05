import React, { useContext } from 'react'
import { useField } from 'formik'
import styled from 'styled-components'

const StyledFormikInput = styled.div`
  diplay: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto;
  div {
    display: flex;
    flex-direction: column;
    padding: 10px;
    & label {
      color: black;
    }
  }
  input {
    outline: none;
    background: #e9ecef;
    border: none;
    border-radius: 5px;

    // border-color: ${(props) => (props.error ? 'red' : 'white')};
    padding: 15px 60px 15px 7px;
    margin: 5px;
    color: grey;
  }
  input:hover {
    color: red;
  }

  .errorMessagerHolder {
    position: absolute;
    padding-top: -10px;
    color: red;
  }
`
const FormikInput = (props) => {
  const [field, meta, helpers] = useField(props.name)

  return (
    <StyledFormikInput error={meta.error && meta.touched}>
      <div>
        {' '}
        <label for={props.name}>{props.labeltext}</label>
        <input
          className={props.className}
          onChange={field.onChange}
          onBlur={field.onBlur}
          name={props.name}
          type={props.type}
          value={field.value}
          inputcolor="blue"
        />
      </div>

      {/*  {meta.error && meta.touched && (
        <div className="errorMessagerHolder">{meta.error}</div>
      )}*/}
    </StyledFormikInput>
  )
}

export default FormikInput
