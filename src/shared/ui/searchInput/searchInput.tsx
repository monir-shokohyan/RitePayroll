import { Input } from '@mantine/core';
import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SavedColors } from '@shared/constants';
import { TotalData, TotalDataItem } from '@shared/constants/allTexts';
import useNavigationScroll from '@shared/hooks/useNavigationScroll';

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
  &:hover {
    background-color: transparent;
    border: 1px solid ${SavedColors.Primaryblue};
    color: ${SavedColors.Primaryblue};
    cursor: pointer;
  }
`;

const SearchBox = styled.div<{ height?: string; width?: string; showSearch: boolean }>`
  height: ${(props) => props.height || '40px'};
  width: ${(props) => props.width || '335px'};
  position: relative;
  @media (max-width: 1024px) {
    display: ${(props) => (props.showSearch ? 'block' : 'none')};
    width: 100%;
  }
`;

const ResultsContainer = styled.div`
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
`;

const ResultItem = styled(Link)`
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  color: ${SavedColors.Primaryblue};
  border-bottom: 1px solid #eee;
  &:hover {
    background-color: #f5f5f5;
  }
  &:last-child {
    border-bottom: none;
  }
`;

const ResultTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const ResultDescription = styled.div`
  font-size: 14px;
  color: #666;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Highlight = styled.span`
  background-color: #e6f3ff;
  font-weight: bold;
  color: ${SavedColors.Primaryblue};
`;

const SearchInput = ({ showSearch, deActiveMenu }: { showSearch: boolean, deActiveMenu:() => void }) => {
  const [value, setValue] = useState('');
  const [results, setResults] = useState<any[]>([]);

  // Helper function to highlight search term
  const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm.trim()) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) =>
      regex.test(part) ? (
        <Highlight key={index}>{part}</Highlight>
      ) : (
        part
      )
    );
  };

  // Helper function to truncate text while ensuring highlighted term is visible
  const truncateWithHighlight = (text: string, searchTerm: string, maxLength: number = 100) => {
    if (!searchTerm.trim()) return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const match = text.toLowerCase().indexOf(searchTerm.toLowerCase());
    
    if (match === -1) {
      return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
    }

    const contextLength = 50; // Characters to show before and after the match
    let start = Math.max(0, match - contextLength);
    let end = Math.min(text.length, match + searchTerm.length + contextLength);

    if (end - start > maxLength) {
      end = start + maxLength;
    }

    const truncated = (start > 0 ? '...' : '') + text.slice(start, end) + (end < text.length ? '...' : '');
    return highlightText(truncated, searchTerm);
  };

  // Handle search input change
  const handleSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    const lowerCaseTerm = searchTerm.toLowerCase();
    const filteredResults = TotalData.map((item) => {
      let score = 0;
      if (item.title.toLowerCase().includes(lowerCaseTerm)) {
        score += 10; // Higher score for title match
        score -= item.title.toLowerCase().indexOf(lowerCaseTerm) * 0.1; // Prioritize earlier matches
      }
      if (item.description.toLowerCase().includes(lowerCaseTerm)) {
        score += 5; // Lower score for description match
        score -= item.description.toLowerCase().indexOf(lowerCaseTerm) * 0.1;
      }
      if (
        item.features &&
        item.features.some((feature: any) => feature.toLowerCase().includes(lowerCaseTerm))
      ) {
        score += 3;
      }
      if (
        item.industries &&
        item.industries.some((industry: any) => industry.toLowerCase().includes(lowerCaseTerm))
      ) {
        score += 3;
      }
      return { ...item, score };
    })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score); // Sort by score (descending)

    setResults(filteredResults);
  };

  const handleInputChange = (event: any) => {
    const newValue = event.currentTarget.value;
    setValue(newValue);
    handleSearch(newValue);
  };

  const handleClear = () => {
    setValue('');
    setResults([]);
  };

  const { navigateAndScroll } = useNavigationScroll();

  return (
    <SearchBox showSearch={showSearch}>
      <Input
        placeholder="Search by keyword ..."
        variant="filled"
        value={value}
        onChange={handleInputChange}
        rightSectionPointerEvents="all"
        // rightSection={
        //   <InputIcon aria-label="Search input" onClick={handleClear}>
        //     <CiSearch />
        //   </InputIcon>
        // }
        radius="lg"
        size="sm"
      />
      {results.length > 0 && (
        <ResultsContainer>
          {results.map((result: TotalDataItem & { score: number }, index) => (
            <ResultItem
              key={index}
              to={result.target}
              onClick={() => {
                deActiveMenu()
                setResults([]);
                if (!result.section) return;
                navigateAndScroll('/', result.section ?? 'dashboard-welcome-section');
              }}
            >
              <ResultTitle>{highlightText(result.title, value)}</ResultTitle>
              <ResultDescription>{truncateWithHighlight(result.description, value)}</ResultDescription>
            </ResultItem>
          ))}
        </ResultsContainer>
      )}
    </SearchBox>
  );
};

export default SearchInput;