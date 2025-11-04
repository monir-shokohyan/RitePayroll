import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { SavedColors } from '@shared/constants'

export const SearchBox = styled.div<{
  height?: string
  width?: string
  $showsearch: boolean
}>`
  height: ${(props) => props.height || '40px'};
  width: ${(props) => props.width || '335px'};
  position: relative;
  @media (max-width: 1024px) {
    display: ${(props) => (props.$showsearch ? 'block' : 'none')};
    width: 100%;
  }
`

export const ResultsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${SavedColors.PrimaryWhite};
  border: 1px solid ${SavedColors.Primaryblue};
  border-radius: 8px;
  max-height: 300px;
  overflow-y: auto;
  z-index: 10;
  margin-top: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const ResultItem = styled(Link)<{ $isSelected: boolean }>`
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  color: ${SavedColors.Primaryblue};
  background-color: ${({ $isSelected }) =>
    $isSelected ? '#f5f5f5' : 'transparent'};
  border-bottom: 1px solid #eee;
  &:hover {
    background-color: #f5f5f5;
  }
  &:last-child {
    border-bottom: none;
  }
`

export const ResultTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
`

export const ResultDescription = styled.div`
  font-size: 14px;
  color: #666;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const Highlight = styled.span`
  background-color: #e6f3ff;
  font-weight: bold;
  color: ${SavedColors.Primaryblue};
`
