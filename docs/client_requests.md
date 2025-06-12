## Client Requests

The following is raw text from our client, a writer who wants a text editor that can provide quick formatting for a specific use case.

## Client Comments:
Client Comments Commence Below This line.


## Formatting Types:
*Default Font* should be Times, 12 point, double-spaced, black
*Illustration* A text descriptions placed between square brackets [], font color blue, right justified, do not auto-include the word Illustration, or any abbreviation such as Illo Note or Illo: before the words.
*Spreads / pages* - Times, 12 point, black - besides adding or deleting, they should be editable - these are auto-generated and adjusted when added or removed from the document.
*Title* - all caps, Times, 16 point, centered
*Author’s name* - Times, 16 point, centered
*Header* - Left justified, Author’s Last name followed by Title, in all caps. Right justified, page number (auto updated / adjusted)  (not the spread page number, but the actual page number of the document)

## Page Structure Spreads / Pages
'Page 1' would be the title. 
Industry standard is to not explicitly number the first couple of pages, where a title may go.
Page 2 could contain dedications, again Industry standard is to not display the page number for this.

Our requirement should be to create the ability to ensure industry standard page or spread numbeings for 32 page spread, nothing else. 
The most common way Spread and page numbers may align For a 32 page spread.
We will need a configurable variable for which 'page' is 'Spread 1' 
  - setting to be made available via menu bar, default value for "First Spread" is page 3. 

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
 - Spread and page number is not placed in a header or footer of a document, but is also represent in text.  
 - The text belongs to the spread / page number above it, and the page spread ends when the next spead / page number is encountered.
        - In example above, {Default Text - First Example} is on spread 3
 -  The Primary purpose of our formatter is to apply the spread numbers to a document, and then allow the writer to write as little or much as they want between the spread numbers.
 - We allow the writer to select blocks of text and apply a style to them, as described in an earlier section.
 - these styles should be made available through a menubar.