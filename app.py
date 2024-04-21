import pandas as pd
from fastapi import FastAPI

# Read the CSV files and handle NaN values
df = pd.read_csv('datasets/housing_index.csv')
df.fillna(value=pd.NA, inplace=True)  # Use pd.NA to preserve the data types

app = FastAPI()

@app.get("/api")
def root():
    return {"message": "Hello, FastAPI!!"}


@app.get("/api/rows")
def read_root():
    df2 = pd.read_csv('datasets/for_sale_listings.csv')
    df2.fillna(value=pd.NA, inplace=True)
    
    # Check if df2 contains any rows
    if len(df2) > 0:
        # Extract rows as JSON objects, excluding the first row (column names)
        rows = [row for index, row in df2.iloc[1:].iterrows()]
        return rows
    else:
        return {"message": "No rows found in df2"}
