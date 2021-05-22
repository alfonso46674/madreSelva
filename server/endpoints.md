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