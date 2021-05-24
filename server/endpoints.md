# List of endpoints for the backend

## Example of a stored object in the DB

    {
        "author": "Alfonso",
        "title": "Practica3",
        "abstract": "This is a test description",
        "category": "educacion",
        "filePath": "C:\\Users\\Alponcho\\Documents\\Proyectos\\ArtWebPage\\madreSelva\\server\\files\\Practica3Clase.pdf",
        "agreementPath": "C:\\Users\\Alponcho\\Documents\\Proyectos\\ArtWebPage\\madreSelva\\server\\files\agreement.pdf",
        "status": "pending",
        "videoLink": null        
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
GET Endpoint: **/files/agreement**

Returns the agreement letter .docx  file


&nbsp;
## Obtaining submissions

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
