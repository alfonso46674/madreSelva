# List of endpoints for the backend

## Uploading files

### Upload a pdf
POST Endpoint: **/uploads/pdf**

Body to send: 

    {
        document: -pdf file to upload-,
        creatorName: -name of the author-,
        abstract: -small summary of the pdf-,
        documentName: -file name-,
        category: -category of the document-
    }

Note: petition must be enctype="multipart/form-data"  

&nbsp;
### Upload a video link 
POST Endpoint: **/uploads/videoLink**

Body to send: 

    {
        videoLink: -youtube link to the video-,
        creatorName: -name of the author-,
        abstract: -small summary of the pdf-,
        documentName: -file name-,
        category: -category of the document-
    }

&nbsp;
## Obtaining files

### Show all stored files

GET Endpoint: **/files/show**

&nbsp;
### Download a specific file by name

POST Endpoint: **/files/download**

Returns a pdf file given its filename

Body to send:

    {
        filename: -file name-
    }

&nbsp;
### Download agreement letter

Returns the agreement letter .docx  file

GET Endpoint: **/files/agreement**