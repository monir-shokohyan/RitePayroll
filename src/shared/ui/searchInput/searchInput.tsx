import { Input } from '@mantine/core'
import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import styled from 'styled-components'
import { SavedColors } from '@shared/constants'
const InputIcon = styled.div`
border-radius: 50%;
background-color: ${SavedColors.Primaryblue};
width: 25px;
height: 25px;
color: ${SavedColors.PrimaryWhite};
display: flex;
justify-content: center;
align-items: center;
transition: all 0.3s ease-in;
&:hover{
  background-color: transparent;
  border: 1px solid ${SavedColors.Primaryblue};
  color: ${SavedColors.Primaryblue};
  cursor: pointer;
}

`
interface SearchBoxProps {
  height?: string;
  width?: string;
  showSearch: boolean
}

const SearchBox = styled.div<SearchBoxProps>`
  height: ${(props) => props.height || '40px'};
  width: ${(props) => props.width || '335px'};
   @media (max-width:1024px){
        display: ${(props) => props.showSearch ? 'block' : 'none'};
        width: 100%;
    }
`


const SearchInput = ({showSearch}:{showSearch:boolean}) => {
    const [ value, setValue] = useState('')
  return (
   <SearchBox showSearch={showSearch}>
       <Input
              placeholder="Search by keyword ..."
              variant="filled"
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              rightSectionPointerEvents="all"
              rightSection={
                  <InputIcon
                  aria-label="Search input"
                  >
                    <CiSearch />
                  </InputIcon>
      
              }
              radius="lg"
              size="sm"
              />
   </SearchBox>
  )
}

export default SearchInput
 