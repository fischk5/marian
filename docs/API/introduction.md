---
id: Getting Started
sidebar_position: 4
---
# Getting Started  
To use the Tetheros API, obtain your `API Key` by navigating to the [Settings Page](https://tetheros.com/settings).  
  
Include the `X-USER-TOKEN` header in every request.  The value is your API Key.  
  

API Keys can be recycled at any point.  Users are allowed one API key.  
  
The base URL for the API is `https://tetheros.com/api/v1`  

## Hello World Test  

**Request**  
```
GET /hello
```  
**Response**  
```json
{
    "friendly_message": "Hello, ${user.firstName}"
}
```  