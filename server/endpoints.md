# List of endpoints for the backend

## Example of a stored object in the DB

    {
        "id":1,
        "author": "Alfonso",
        "title": "Practica3",
        "abstract": "This is a test description",
        "category": "educacion",
        "filePath": "C:\\Users\\Alponcho\\Documents\\Proyectos\\ArtWebPage\\madreSelva\\server\\files\\Practica3Clase.pdf",
        "agreementPath": "C:\\Users\\Alponcho\\Documents\\Proyectos\\ArtWebPage\\madreSelva\\server\\files\agreement.pdf",
        "status": "pending",
        "videoLink": null,
        "type":"file"        
    }


## Uploading files

### Upload a pdf
POST Endpoint: **/uploads/pdf**

Body to send: 

    {
        document: -pdf file to upload-,
        author: -name of the author-,
        abstract: -small summary of the pdf-,
        title: -document title-,
        category: -category of the document-,
        agreement: -pdf agreement letter-
    }

Note: petition must be enctype="multipart/form-data"  

&nbsp;
### Upload a video link 
POST Endpoint: **/uploads/videoLink**

Body to send: 

    {
        videoLink: -youtube link to the video-,
        author: -name of the author-,
        abstract: -small summary of the pdf-,
        title: -video title-,
        category: -category of the document-,
        agreement: -pdf agreement letter-
    }

&nbsp;
## Obtain files

### Show all stored files

GET Endpoint: **/files/show**

&nbsp;
### Download a specific file by submission id

GET Endpoint: **/files/download**

Returns a pdf file given its submission id

Send id as query params.
i.e. http://localhost:8080/files/download?id=1

&nbsp;
### Download a specific agreement by submission id

GET Endpoint: **/files/agreement**

Returns an agreement file given its submission id

Send id as query params.
i.e. http://localhost:8080/files/agreement?id=1


&nbsp;
### Download a specific videoLink by submission id

GET Endpoint: **/files/video**

Returns an video link given its submission id

Send id as query params.
i.e. http://localhost:8080/files/video?id=1


&nbsp;
### Download agreement letter
GET Endpoint: **/files/agreementTemplate**

Returns the agreement letter .docx  file


&nbsp;
## Obtain submissions

&nbsp;
### Obtain all submissions
GET Endpoint: **/submissions/all**

&nbsp;
### Obtain accepted submmissions
GET Endpoint: **/submissions/accepted**

&nbsp;
### Obtain rejected submissions
GET Endpoint: **/submissions/rejected**

&nbsp;
### Obtain pending submissions
GET Endpoint: **/submissions/pending**

&nbsp;
### Search submissions by title/author/category
GET Endpoint: **/submissions/search**

Send search conditions as query params.
i.e. http://localhost:8080/submissions/search?author=Alfonso&title=Practica3&category=educacion

&nbsp;

## Modify submissions
&nbsp;
### Modify submission status

PUT Endpoint: **/submissions/status**

Modify submission status to one of the following states: rejected, pending or accepted. 

Body to send:

    {
        id: -id of the submission to edit-,
        status: -new submission status-        
    }