import styled from '@emotion/styled'

export const Form = styled.form`
display: flex;
flex-direction: column;
width: 300px;
border: 1px solid black;
padding: 20px;
`
export const Label = styled.label`
display: flex;
flex-direction: column;
`
export const Input = styled.input`
width: 200px;
margin-bottom: 10px;
margin-top: 10px;
outline: none;
&:focus {
    border: 1px solid blue;
}
`
export const Button = styled.button`
width: 100px;
outline: none;
border: 1px solid gray;
border-radius: 3px;
&:hover {
    background-color: lightblue;
}
`