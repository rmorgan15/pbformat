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
Spread notation is effectively just text that is inserted into a file, initiated by manual action by the user.
Spread notation has set rules that must be followed.
For a Set of Spreads, there will be 16 Spreads.  

The representation and labelling of a set of Spreads in can vary by user option, but there are limited variations.
The underlying sequence for spreads follows this pattern: 1, 2-3, 4-5, 6-7... 30-31, 32
The user may choose the first number to appear in the document as a setting.  Default value is 3.  name this setting 'firstDisplaySpreadPageNumber'
If the first number chosen would be the second number in a paired spread, such the value of 3 in '2-3' we would hide the 2, and we would not display the dash and then the number.
A given Spread notation should not be repeated in a document, nor should a value in a spreads label.
Spread notation representation or label has three variations.
First type of Spread label will consist of an integer that is greater than zero, but less than 33. Not zero padded.
Second type of Spread label will consist of two integers with a space, a dash, and a space between them, the leftmost integer will be less than the rightmost integer, and each will also be greater than zero and less than 33.
The Third type of spread label is a blank label.  Sometimes a user does not need to annotate their document for the first couple of sections.  They may choose to have certain section number be represented as blank.  (such as 1, or 1-2)


# Adding Spreads
The file under edit should not have any spread labels applied until the user manually does so.
There should be a toolbar button, under a sub-section of 'Spread Numnbering' with 'Add Spread Label' and 'Delete Spread Label'.  
'Add Spread Label' and 'Delete Spread Label' should have keyboard shortcuts.
The Windows Shortucuts should be of Ctrl-L to Add, and Ctrl-Shift-L to Delete.
Mac OS Shortcuts shoudl be command-L and command-Shift-L to delete.

A User may delete a spread label as they would any other text as well as highlight and using toolbar or keyboard shortcut.
The Spread label should be treated as immutable and atomic.  
A user may not edit, or partially delete a spread label.  
Example:  if in the document exists " 17-18 " do not allow the user to backspace over the 8, without removing the entire spread label.
The user should not be allowed to put text on the same line as a Spread label.

If a User deletes a spread label, the text below that label will move up and belong to the previous spread label in the sequence, if a previous spread label exists,
If the documnent contains one or many spread labels after the deleted spread label, those remaining spread labels neeed to 'shift' to account for the now removed labeld.

Example:
Before Delete:

```
18-19
{Test Paragraph One}
 
20-21
{Test Paragraph Two}
 
22-23
{Test Paragraph Three}
 
24-25
{Test Paragraph Four}
{End of file}
```

When User Deletes '20-21' from above, the expected result is as follows:
```
18-19
{Test Paragraph One}
{Test Paragraph Two}
 
20-21
{Test Paragraph Three}
 
22-23
{Test Paragraph Four}
{End of file}
```

Note that the labeling now ends at 22-23, and the user will need to apply a new spread label if they choose to add another section.


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
 - Spread and page number is not placed in a header or footer of a document, but is represented in text as a separate Quil BlockEmbed.  
 - From the user's perspective, the text 'belongs' to the spread label above it.  To state another way, a spread label indicates the beginning of a spread section, and all text after that spread label 'belongs' to that spared, until the next spread notation in the document occurs. 
        - In example above, {Default Text - First Example} is on spread label 3
 -  The Primary purpose of our formatter is to apply the spread numbers to a document, and then allow the writer to write as little or much as they want between the spread numbers, keeping the spread numbers on the document at all times, and ensuring they are saved with the document.
 - Application will support the user selecting blocks of text and apply a style to them, as described in an earlier section.
 - These Formatting Style types should be made available through a section in standard menubar.