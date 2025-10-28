import { Input } from '@mantine/core';
import { useState } from 'react';
import { TotalData, TotalDataItem } from '@shared/constants/allTexts';
import useNavigationScroll from '@shared/hooks/useNavigationScroll';
import { Highlight, ResultDescription, ResultItem, ResultsContainer, ResultTitle, SearchBox } from './styles';


const SearchInput = ({ $showsearch, deActiveMenu }: { $showsearch: boolean, deActiveMenu:() => void }) => {
  const [value, setValue] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const escapeRegExp = (string: string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm.trim()) return text;

    const escapedTerm = escapeRegExp(searchTerm);
    const regex = new RegExp(`(${escapedTerm})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, i) => {
      const isMatch = part.toLowerCase() === searchTerm.toLowerCase();
      return isMatch ? <Highlight key={i}>{part}</Highlight> : part;
    });
  };

  const searchInValue = (value: any, searchTerm: string): boolean => {
    if (!value) return false;
    
    const lowerTerm = searchTerm.toLowerCase();
    
    if (typeof value === 'string') {
      return value.toLowerCase().includes(lowerTerm);
    }
    
    if (Array.isArray(value)) {
      return value.some(item => searchInValue(item, searchTerm));
    }
    
    if (typeof value === 'object') {
      return Object.values(value).some(val => searchInValue(val, searchTerm));
    }
    
    return false;
  };

  const getTruncatedText = (text: string, searchTerm: string, maxLength = 120): string => {
    if (!searchTerm.trim()) {
      return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
    }

    const lowerText = text.toLowerCase();
    const lowerTerm = searchTerm.toLowerCase();

    const matchIndex = lowerText.indexOf(lowerTerm);
    if (matchIndex === -1) {
      return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
    }

    const termLength = searchTerm.length;
    const preferredContextBefore = Math.floor((maxLength - termLength) / 2);
    const preferredContextAfter = maxLength - termLength - preferredContextBefore;

    let start = Math.max(0, matchIndex - preferredContextBefore);
    let end = Math.min(text.length, matchIndex + termLength + preferredContextAfter);

    if (end - start < maxLength) {
      const missing = maxLength - (end - start);
      if (start >= missing) {
        start -= missing;
      } else {
        end += missing - start;
        start = 0;
      }
    }

    start = Math.max(0, start);
    end = Math.min(text.length, end);

    const prefix = start > 0 ? '...' : '';
    const suffix = end < text.length ? '...' : '';

    return prefix + text.slice(start, end) + suffix;
  };

  const handleSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    const lowerCaseTerm = searchTerm.toLowerCase();
    
    const filteredResults = TotalData.map((item, index) => {
      let score = 0;
      const matchedIn: string[] = [];
      
      Object.entries(item).forEach(([key, value]) => {
        if (searchInValue(value, lowerCaseTerm)) {
          matchedIn.push(key);
          
          if (key === 'title') {
            score += 10;
            if (typeof value === 'string') {
              const position = value.toLowerCase().indexOf(lowerCaseTerm);
              score -= Math.min(position * 0.01, 5);
            }
          } else if (key === 'description') {
            score += 5;
            if (typeof value === 'string') {
              const position = value.toLowerCase().indexOf(lowerCaseTerm);
              score -= Math.min(position * 0.001, 3);
            }
          } else {
            score += 2;
          }
        }
      });
      
      
      
      return { ...item, score };
    })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);
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
    <SearchBox $showsearch={$showsearch}>
      <Input
        placeholder="Search by keyword ..."
        variant="filled"
        value={value}
        onChange={handleInputChange}
        rightSection={value !== '' ? <Input.ClearButton onClick={handleClear} /> : undefined}
        rightSectionPointerEvents="auto"
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
                setValue('');
                setResults([]);
                if (!result.section) return;
                navigateAndScroll('/', result.section ?? 'dashboard-welcome-section');
              }}
            >
              <ResultTitle>{highlightText(result.title, value)}</ResultTitle>
              <ResultDescription>
                {highlightText(getTruncatedText(result.description, value), value)}
              </ResultDescription>
            </ResultItem>
          ))}
        </ResultsContainer>
      )}
    </SearchBox>
  );
};

export default SearchInput;