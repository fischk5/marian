---
id: Reference
sidebar_position: 5
---  
  
# Reference  

## Setup  

### Hello World
 
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

## Components  

### Get Component
 
**Request**  
```
GET /components/${component_id}
```  
**Response**  
```json
{
    "_id": "61ccb4fc6dc2e502ba661d1b",
    "schema": 1,
    "display_name": "Minor Ideas",
    "name": "list",
    "layer": "work",
    "workspace_id": "61ccb07e6dc2e502ba6614f3",
    "is_published": true,
    "last_updated": "2022-09-20T18:27:26.634Z",
    "num_updates": 3590,
    "attributes": {
        "tasks": [],
        "name": "Minor Ideas",
        "work_progress": 0.3076923076923077,
        "work_total": 78,
        "work_complete": 24,
        "column_id_new": "6207d2c3630e8591dd2e9bd4",
        "column_id_done": "6207d2c3630e8591dd2e9bda"
    },
    "status": "active",
    "created": "2021-12-29T19:20:28.823Z",
    "__v": 0,
    "progress": 0.3076923076923077,
    "updatedAt": "2022-09-20T18:27:26.699Z",
    "story": {},
    "completed": null,
    "owner_id": "61c512bf424dab79sd60de80",
    "parent_data": {}
}
```

  
## KPI  

### Get KPI
 
**Request**  
```
GET /kpi/${kpi_id}
```   
**Response**  
```json
{
    "name": "Social Media Subscribers",
    "current_value": 2390,
    "starting_value": 0,
    "units": "",
    "created": "2022-09-20T18:23:10.908Z",
    "updated": "2022-09-20T18:23:10.908Z"
}
```

### Update KPI  
**Description**  
Updates the current value for a KPI.  The value provided for `value` is the current state of the measurement.
 
**Request**  
```
PATCH /kpi/${kpi_id}

{
    "name": "Social Media Subscribers",
    "value": 4001,
    "units": "subs"
}
```  
**Response**  
```json
{
    "name": "Social Media Subscribers",
    "current_value": 4001,
    "starting_value": 0,
    "units": "subs",
    "created": "2022-09-20T18:23:10.908Z",
    "updated": "2022-09-20T18:23:10.908Z"
}
```