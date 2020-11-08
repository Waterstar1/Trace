import requests as req
import json
import numpy as np
from firebase import firebase


items = {
    [
        {
            "name": "shirt",
            "color": "red",
            "sex": "male",
        },
        {
            "name": "chocolate",
            "color": "brown",
            "sex": "unisex",
        },
        {
            "name": "dress",
            "color": "blue",
            "sex": "female",
        }
    ]
}

results = firebase.post('/', items)
