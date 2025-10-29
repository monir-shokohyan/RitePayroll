import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '@mantine/core'

import { TotalData, TotalDataItem } from '@shared/constants/allTexts'
import useNavigationScroll from '@shared/hooks/useNavigationScroll'

import {
  Highlight,
  ResultDescription,
  ResultItem,
  ResultsContainer,
  ResultTitle,
  SearchBox,
} from './styles'

interface SearchResult extends TotalDataItem {
  score: number
  matchedText: string
}

const SearchInput = ({
  $showsearch,
  deActiveMenu,
}: {
  $showsearch: boolean
  deActiveMenu: () => void
}) => {
  const [value, setValue] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState<number>(-1)
  const { navigateAndScroll } = useNavigationScroll()
  const resultsContainerRef = useRef<HTMLDivElement>(null)
  const escapeRegExp = (string: string) =>
    string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const navigate = useNavigate()

  const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm.trim()) return text

    const escapedTerm = escapeRegExp(searchTerm)
    const regex = new RegExp(`(${escapedTerm})`, 'gi')
    const parts = text.split(regex)

    return parts.map((part, i) => {
      const isMatch = part.toLowerCase() === searchTerm.toLowerCase()
      return isMatch ? <Highlight key={part}>{part}</Highlight> : part
    })
  }

  const searchInValue = (value: any, searchTerm: string): boolean => {
    if (!value) return false

    const lowerTerm = searchTerm.toLowerCase()

    if (typeof value === 'string') {
      return value.toLowerCase().includes(lowerTerm)
    }

    if (Array.isArray(value)) {
      return value.some((item) => searchInValue(item, searchTerm))
    }

    if (typeof value === 'object') {
      return Object.values(value).some((val) => searchInValue(val, searchTerm))
    }

    return false
  }

  const findMatchedText = (item: any, searchTerm: string): string => {
    const lowerTerm = searchTerm.toLowerCase()

    if (item.name?.toLowerCase().includes(lowerTerm)) {
      return item.name
    }

    if (item.title?.toLowerCase().includes(lowerTerm)) {
      return item.title
    }

    if (item.description?.toLowerCase().includes(lowerTerm)) {
      return item.description
    }

    if (item.descriptionSecond?.toLowerCase().includes(lowerTerm)) {
      return item.descriptionSecond
    }

    if (Array.isArray(item.features)) {
      for (const feature of item.features) {
        if (typeof feature === 'object' && feature !== null) {
          if (feature.name?.toLowerCase().includes(lowerTerm)) {
            return feature.name
          }
          if (feature.description?.toLowerCase().includes(lowerTerm)) {
            return feature.description
          }
          if (Array.isArray(feature.features)) {
            for (const nestedFeature of feature.features) {
              if (
                typeof nestedFeature === 'string' &&
                nestedFeature.toLowerCase().includes(lowerTerm)
              ) {
                return nestedFeature
              }
            }
          }
        }
        if (
          typeof feature === 'string' &&
          feature.toLowerCase().includes(lowerTerm)
        ) {
          return feature
        }
      }
    }

    if (Array.isArray(item.section)) {
      for (const sec of item.section) {
        if (typeof sec === 'object' && sec !== null) {
          if (sec.name?.toLowerCase().includes(lowerTerm)) {
            return sec.name
          }
          if (sec.description?.toLowerCase().includes(lowerTerm)) {
            return sec.description
          }
        }
      }
    }

    if (Array.isArray(item.sectionSecond)) {
      for (const sec of item.sectionSecond) {
        if (typeof sec === 'object' && sec !== null) {
          if (sec.name?.toLowerCase().includes(lowerTerm)) {
            return sec.name
          }
          if (sec.description?.toLowerCase().includes(lowerTerm)) {
            return sec.description
          }
        }
      }
    }

    if (Array.isArray(item.industries)) {
      for (const industry of item.industries) {
        if (
          typeof industry === 'string' &&
          industry.toLowerCase().includes(lowerTerm)
        ) {
          return industry
        }
      }
    }

    if (Array.isArray(item.deployment)) {
      for (const deploy of item.deployment) {
        if (
          typeof deploy === 'string' &&
          deploy.toLowerCase().includes(lowerTerm)
        ) {
          return deploy
        }
      }
    }

    return item.description || item.name || item.title || ''
  }

  const getTruncatedText = (
    text: string,
    searchTerm: string,
    maxLength = 80,
  ): string => {
    if (!searchTerm.trim()) {
      return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text
    }

    const lowerText = text.toLowerCase()
    const lowerTerm = searchTerm.toLowerCase()

    const matchIndex = lowerText.indexOf(lowerTerm)
    if (matchIndex === -1) {
      return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text
    }

    const termLength = searchTerm.length
    const preferredContextBefore = Math.floor((maxLength - termLength) / 2)
    const preferredContextAfter =
      maxLength - termLength - preferredContextBefore

    let start = Math.max(0, matchIndex - preferredContextBefore)
    let end = Math.min(
      text.length,
      matchIndex + termLength + preferredContextAfter,
    )

    if (end - start < maxLength) {
      const missing = maxLength - (end - start)
      if (start >= missing) {
        start -= missing
      } else {
        end += missing - start
        start = 0
      }
    }

    start = Math.max(0, start)
    end = Math.min(text.length, end)

    const prefix = start > 0 ? '...' : ''
    const suffix = end < text.length ? '...' : ''

    return prefix + text.slice(start, end) + suffix
  }

  const handleSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setResults([])
      setSelectedIndex(-1)
      return
    }

    const lowerCaseTerm = searchTerm.toLowerCase()

    const filteredResults = TotalData.map((item) => {
      let score = 0

      Object.entries(item).forEach(([key, value]) => {
        if (searchInValue(value, lowerCaseTerm)) {
          if (key === 'name') {
            score += 12
            if (typeof value === 'string') {
              const position = value.toLowerCase().indexOf(lowerCaseTerm)
              score -= Math.min(position * 0.01, 5)
            }
          } else if (key === 'title') {
            score += 10
            if (typeof value === 'string') {
              const position = value.toLowerCase().indexOf(lowerCaseTerm)
              score -= Math.min(position * 0.01, 5)
            }
          } else if (key === 'description' || key === 'descriptionSecond') {
            score += 5
            if (typeof value === 'string') {
              const position = value.toLowerCase().indexOf(lowerCaseTerm)
              score -= Math.min(position * 0.001, 3)
            }
          } else {
            score += 2
          }
        }
      })

      const matchedText = findMatchedText(item, searchTerm)
      return { ...item, score, matchedText }
    })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)

    setResults(filteredResults)
    setSelectedIndex(-1)
  }

  const handleInputChange = (event: any) => {
    const newValue = event.currentTarget.value
    setValue(newValue)
    handleSearch(newValue)
  }

  const handleClear = () => {
    setValue('')
    setResults([])
    setSelectedIndex(-1)
  }

  const handleResultClick = (result: SearchResult) => {
    deActiveMenu()
    setValue('')
    setResults([])
    setSelectedIndex(-1)
    if (!result.sectionId) {
      navigate(result.target)
      return
    }
    navigateAndScroll('/', result.sectionId)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (results.length === 0) return

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1))
    } else if (event.key === 'Enter') {
      event.preventDefault()
      if (selectedIndex >= 0 && selectedIndex < results.length) {
        handleResultClick(results[selectedIndex])
      }
    } else if (event.key === 'Escape') {
      setResults([])
      setSelectedIndex(-1)
    }
  }

  useEffect(() => {
    if (selectedIndex >= 0 && resultsContainerRef.current) {
      const selectedElement = resultsContainerRef.current.children[
        selectedIndex
      ] as HTMLElement
      if (selectedElement) {
        selectedElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        })
      }
    }
  }, [selectedIndex, results.length])

  return (
    <SearchBox $showsearch={$showsearch}>
      <Input
        placeholder="Search by keyword ..."
        variant="filled"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        rightSection={
          value !== '' ? <Input.ClearButton onClick={handleClear} /> : undefined
        }
        rightSectionPointerEvents="auto"
        radius="lg"
        size="sm"
      />
      {results.length > 0 && (
        <ResultsContainer
          ref={resultsContainerRef}
          role="listbox"
          aria-label="Search results"
        >
          {results.map((result: SearchResult, index) => (
            <ResultItem
              key={result.target}
              to={result.target}
              $isSelected={index === selectedIndex}
              onClick={() => handleResultClick(result)}
            >
              <ResultTitle>
                {highlightText(result.name || result.title || '', value)}
              </ResultTitle>
              <ResultDescription>
                {highlightText(
                  getTruncatedText(result.matchedText, value),
                  value,
                )}
              </ResultDescription>
            </ResultItem>
          ))}
        </ResultsContainer>
      )}
    </SearchBox>
  )
}

export default SearchInput
