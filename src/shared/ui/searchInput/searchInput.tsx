import { Input } from '@mantine/core';
import { useState } from 'react';
import { TotalData, TotalDataItem } from '@shared/constants/allTexts';
import useNavigationScroll from '@shared/hooks/useNavigationScroll';
import { Highlight, ResultDescription, ResultItem, ResultsContainer, ResultTitle, SearchBox } from './styles';


const SearchInput = ({ $showsearch, deActiveMenu }: { $showsearch: boolean, deActiveMenu:() => void }) => {
  const [value, setValue] = useState('');
  const [results, setResults] = useState<any[]>([]);

  // Add this helper first
  const escapeRegExp = (string: string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // Helper function to highlight search term
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

  // Helper to search deeply in any value (handles nested objects and arrays)
  const searchInValue = (value: any, searchTerm: string): boolean => {
    if (!value) return false;
    
    const lowerTerm = searchTerm.toLowerCase();
    
    // String
    if (typeof value === 'string') {
      return value.toLowerCase().includes(lowerTerm);
    }
    
    // Array
    if (Array.isArray(value)) {
      return value.some(item => searchInValue(item, searchTerm));
    }
    
    // Object (recurse into nested properties)
    if (typeof value === 'object') {
      return Object.values(value).some(val => searchInValue(val, searchTerm));
    }
    
    return false;
  };

  // Helper to find and extract the text containing the search term
  const findMatchedText = (item: any, searchTerm: string): string => {
    const lowerTerm = searchTerm.toLowerCase();
    
    // Check name first (new field)
    if (item.name?.toLowerCase().includes(lowerTerm)) {
      return item.name;
    }
    
    // Check title
    if (item.title?.toLowerCase().includes(lowerTerm)) {
      return item.title;
    }
    
    // Check description
    if (item.description?.toLowerCase().includes(lowerTerm)) {
      return item.description;
    }
    
    // Check descriptionSecond
    if (item.descriptionSecond?.toLowerCase().includes(lowerTerm)) {
      return item.descriptionSecond;
    }
    
    // Check features array (now array of objects with nested properties)
    if (Array.isArray(item.features)) {
      for (const feature of item.features) {
        // If feature is an object, check its properties
        if (typeof feature === 'object' && feature !== null) {
          if (feature.name?.toLowerCase().includes(lowerTerm)) {
            return feature.name;
          }
          if (feature.description?.toLowerCase().includes(lowerTerm)) {
            return feature.description;
          }
          // Check nested features array
          if (Array.isArray(feature.features)) {
            for (const nestedFeature of feature.features) {
              if (typeof nestedFeature === 'string' && nestedFeature.toLowerCase().includes(lowerTerm)) {
                return nestedFeature;
              }
            }
          }
        }
        // Fallback for string features
        if (typeof feature === 'string' && feature.toLowerCase().includes(lowerTerm)) {
          return feature;
        }
      }
    }
    
    // Check section array
    if (Array.isArray(item.section)) {
      for (const sec of item.section) {
        if (typeof sec === 'object' && sec !== null) {
          if (sec.name?.toLowerCase().includes(lowerTerm)) {
            return sec.name;
          }
          if (sec.description?.toLowerCase().includes(lowerTerm)) {
            return sec.description;
          }
        }
      }
    }
    
    // Check sectionSecond array
    if (Array.isArray(item.sectionSecond)) {
      for (const sec of item.sectionSecond) {
        if (typeof sec === 'object' && sec !== null) {
          if (sec.name?.toLowerCase().includes(lowerTerm)) {
            return sec.name;
          }
          if (sec.description?.toLowerCase().includes(lowerTerm)) {
            return sec.description;
          }
        }
      }
    }
    
    // Check industries array
    if (Array.isArray(item.industries)) {
      for (const industry of item.industries) {
        if (typeof industry === 'string' && industry.toLowerCase().includes(lowerTerm)) {
          return industry;
        }
      }
    }
    
    // Check deployment array
    if (Array.isArray(item.deployment)) {
      for (const deploy of item.deployment) {
        if (typeof deploy === 'string' && deploy.toLowerCase().includes(lowerTerm)) {
          return deploy;
        }
      }
    }
    
    // Fallback to description or name
    return item.description || item.name || item.title || '';
  };

  const getTruncatedText = (text: string, searchTerm: string, maxLength = 80): string => {
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
    
    const filteredResults = TotalData.map((item) => {
      let score = 0;
      
      // Search through ALL fields recursively
      Object.entries(item).forEach(([key, value]) => {
        if (searchInValue(value, lowerCaseTerm)) {
          // Scoring with safer position penalty
          if (key === 'name') {
            score += 12; // Highest priority for name
            if (typeof value === 'string') {
              const position = value.toLowerCase().indexOf(lowerCaseTerm);
              score -= Math.min(position * 0.01, 5);
            }
          } else if (key === 'title') {
            score += 10;
            if (typeof value === 'string') {
              const position = value.toLowerCase().indexOf(lowerCaseTerm);
              score -= Math.min(position * 0.01, 5);
            }
          } else if (key === 'description' || key === 'descriptionSecond') {
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
                if (!result.sectionId) return;
                navigateAndScroll('/', result.sectionId ?? 'dashboard-welcome-section');
              }}
            >
              <ResultTitle>{highlightText(result.name || result.title || '', value)}</ResultTitle>
              <ResultDescription>
                {highlightText(getTruncatedText(findMatchedText(result, value), value), value)}
              </ResultDescription>
            </ResultItem>
          ))}
        </ResultsContainer>
      )}
    </SearchBox>
  );
};

export default SearchInput;