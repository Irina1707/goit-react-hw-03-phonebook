import styled from '@emotion/styled'

export const FilterBlock = styled.div`
width: 300px;

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