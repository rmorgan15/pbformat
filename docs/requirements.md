# Project Requirements

## System Requirements
- Operating System: Windows 10 or later
- Node.js: Latest LTS version
- npm: Latest version

## Application Requirements
- Electron-based desktop application
- Support for file format conversion
- User-friendly interface
- Cross-platform compatibility

## Development Requirements
- Code editor (VS Code recommended)
- Git for version control
- Basic understanding of:
  - JavaScript/Node.js
  - Electron framework
  - HTML/CSS

## Performance Requirements
- Fast file processing
- Minimal memory footprint
- Responsive user interface

## Security Requirements
- Safe file handling
- Input validation
- Error handling

# Outstanding Project Requirements

Based on client requests and current implementation analysis, the following features are still needed:

## Text Formatting Styles (Not Yet Implemented)
- **Default Text**: Times, 12 point, double-spaced, black color
- **Title Style**: All caps, Times, 16 point, centered
- **Author Style**: Times, 16 point, centered  
- **Illustration Style**: Blue color, right-justified, enclosed in square brackets []
- **Header Style**: Left-justified author lastname + title (all caps), right-justified page number

## Document Structure Features (Not Yet Implemented)
- **Document Header Section**: Author contact information, word counts
- **Automatic Spread/Page Numbering**: Industry standard 32-page spread numbering
- **Configurable First Spread**: Menu setting for which page starts as "Spread 1" (default: page 3)
- **Page Number Logic**: Proper mapping of spreads to pages (e.g., Spread 1 = page 3, Spread 2 = pages 4-5, etc.)
- **Backmatter Section**: Optional section with separate word count

## Word Count Features (Not Yet Implemented)
- **Live Word Count**: Real-time counting of words in spread content
- **Backmatter Word Count**: Separate count for backmatter section
- **Word Count Display**: Show counts in document header

## Menu Integration (Partially Implemented)
- **Format Menu**: Add text style options to menu bar
- **First Spread Configuration**: Menu option to set starting spread page
- **Style Application**: Apply formatting styles to selected text blocks

## Document Template Features (Not Yet Implemented)
- **Auto-generated Spread Numbers**: Automatic insertion and management of spread/page numbers
- **Template Structure**: Pre-formatted document template with proper sections
- **Industry Standard Numbering**: Correct page numbering that doesn't display on title/dedication pages

## Technical Requirements (Not Yet Implemented)
- **Custom CSS Styles**: Implement Times font family and specific formatting
- **Text Selection Formatting**: Apply styles to selected text blocks
- **Document State Management**: Track spread content and word counts
- **Export Functionality**: Maintain formatting when saving/exporting 