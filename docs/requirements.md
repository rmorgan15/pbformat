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

# Outstanding Project Requirements

## Format Types:
For all types below, selectable via Quill Toolbar submenu: 
Font Family or Style of 'Times', 12 point, double-spaced, black font color, left justified, unless otherwise specified for the below type.
*Default Font* no changes.
*Illustration* Font color blue, Right justified text. 
*Title* -  16 point, center justification, All letters are capitilized.
*Author’s name* - 16 point, center justification.
*Header* - Two Columns.  The Leftmost Column is Left justified.  The Column to the right is right justified and all letters a capitilized, followed by the document page number.

 
## Spread Notation - labels and numbers
Spread notation is a way for a user to insert additional logical 'sections' into their larger text document, without having a visual text editor attempt to move the text to different pages, instead keeping all of the text on the editor's page, such that the content can fit on the fewest printed pages.
Spread notation is not intended to alter the formatting of the file that the user and this application will be editing.
Spread notation is text that is inserted into new files, as well as edited files, spreads will be re-added or adjusted, as needed.
Spread notation has set rules that must be followed.
For a Set of Spreads, there will be 16 Spreads.  
The representation and labelling of a set of Spreads in can vary by user option, but there are limited variations.
Do not implement any variations, unless explicitly specified.
A given Spread notation should not be repeated in a document, 
A Spread will have a label
A Spreads label has three variations.
First type of Spread label will consist of an integer that is greater than zero, but less than 33. Not zero padded.
Second type of Spread label will consist of two integers with a space, a dash, and a space between them, the leftmost integer will be less than the rightmost integer, and each will also be greater than zero and less than 33.
The Third type of spread label is a blank label.  Sometimes a user does not need to annotate their document for the first couple of sections.  They may choose to have certain section number be represented as blank.  (such as 1, or 1-2)

Spread 1 = page 3
Spread 2 = pages 4-5
Spread 3 = pages 6-7
Spread 4 = pages 8-9
Spread 5 = pages 10-11
Spread 6 = pages 12-13
Spread 7 = pages 14-15
Spread 8 = pages 16-17
Spread 9 = pages 18-19
Spread 10 = pages 20-21
Spread 11 = pages 22-23
Spread 12 = pages 24-25
Spread 13 = pages 26-27
Spread 14 = pages 28-29
Spread 15 = pages 30-31
Spread 16 = page 32 (alone)


## Description of Spread Structure and Text Styles
An example Picture Book layout may be formatted as below:
comments in {} not meant to be renderede in our application, rathera developer commentary or 'dynamic' content:

## Begin Example
{Start of file, Begining of 'Header'}
FirstName LastName								Word count: {Number of words on pages spreads} 
StreetAddress1								    Backmatter: {Number of words in Optional Backmatter section}
City, ST ZIP
Phone
Primary Email
Secondary Email
{End of 'Header'}


{Play Title}
By {Author}

Pitch: {Paragraph summary / pitch of following story}


                                                      [  {Right justified Illustration text format} ]
3 
{Default Text - First Example}
4-5
{Default Text}
 
6-7
{Default Text}
                                                     [  {Right justified Illustration text format} ]
{Default Text}
8-9
{Default Text}
 
10-11
{Default Text}
 
12-13
{Default Text}
 
14-15
{Default Text}
 
16-17
{Default Text}
 
18-19
{Default Text}
 
20-21
{Default Text}
 
22-23
{Default Text}
 
24-25
{Default Text}
 
26-27
{Default Text}
 
28-29
{Default Text}
 
30-31
{Default Text}

32
{Default Text}

OPTIONAL BACKMATTER
{Default Text}
## END Example


## Clarifications
 - Spread and page number is not placed in a header or footer of a document, but is represented in text as a separate Quil Delta.  
 - From the user's perspective, the text 'belongs' to the spread label above it.  To state another way, a spread label indicates the beginning of a spread section, and all text after that spread label 'belongs' to that spared, until the next spread notation in the document occurs. 
        - In example above, {Default Text - First Example} is on spread label 3
 -  The Primary purpose of our formatter is to apply the spread numbers to a document, and then allow the writer to write as little or much as they want between the spread numbers, keeping the spread numbers on the document at all times, and ensuring they are saved with the document.
 - Application will support the user selecting blocks of text and apply a style to them, as described in an earlier section.
 - These Formatting Style types should be made available through a section in standard menubar.