from crypt import methods

from flask import Flask, request, jsonify
import pickle
import pymongo
import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
import joblib

# Initialize Flask app
app = Flask(__name__)

# MongoDB connection setup
client = pymongo.MongoClient("mongodb+srv://hackuta2024:hackuta2024@cluster0.xahdr.mongodb.net/")
db = client["test"]
collection = db["students"]


@app.route('/')
def home():
    return "Flask app is running"

# Load your pickled model
model = joblib.load(r'/Users/ashwinathappan/Documents/workspace/WebstormProjects/hackuta-2024/flask_server/static/Risk_analysis_model.pkl')




# Define a route to handle querying MongoDB and making predictions

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get search query from the request body
        email = request.json.get('email')

        # Query MongoDB to retrieve data
        query_result = collection.find_one({"email": email})

        if query_result:
            # Convert the MongoDB result to a Pandas DataFrame (as we need this for further preprocessing)
            df = pd.DataFrame([query_result])

            # Drop unnecessary columns
            columns_to_drop = ['firstName', 'email', 'PhoneNumber', 'PassportNumber', 'PhysicalAddress', 'SevisID',
                               'I-94DocNumber', 'ApartmentNo', 'lastname']
            # Make sure the drop function updates the DataFrame
            data_cleaned = df.drop(columns=columns_to_drop)

            # Check the cleaned DataFrame
            print("Data after dropping unnecessary columns:")
            print(data_cleaned.head())

            # Preprocessing steps
            # Assigning 0 for 'Signed' and 1 for 'Not signed' or 'Unsigned'
            data_cleaned['LeaseAgreement'] = data_cleaned['LeaseAgreement'].apply(lambda x: 0 if x == 'Signed' else 1)

            # Assigning 2 for 'Missed', 1 for 'Late', and 0 for 'Good'
            data_cleaned['PaymentHistory'] = data_cleaned['PaymentHistory'].map({'Good': 0, 'Late': 1, 'Missed': 2})

            # Assigning 0 for 'Busy', 1 for 'Moderate', and 2 for 'Free'
            data_cleaned['Work&classSchedule'] = data_cleaned['Work&classSchedule'].map(
                {'Busy': 0, 'Moderate': 1, 'Free': 2})

            # Assigning 0 for 'Mostly Out', 1 for 'Part-Time', and 2 for 'Mostly In'
            data_cleaned['TimeSpentinApt'] = data_cleaned['TimeSpentinApt'].map(
                {'Mostly Out': 0, 'Part-Time': 1, 'Mostly In': 2})

            # Check the DataFrame after transformations
            print("Data after transformation:")
            print(data_cleaned.head())

            # Columns to scale
            columns_to_scale = [
                'daysFromPortofEntry', 'LeaseAgreement', 'NoOfRoomates',
                'PaymentHistory', 'PreviousRisks', 'DistancfromCampus',
                'Work&classSchedule', 'TimeSpentinApt'
            ]

            # Initialize the scaler
            scaler = MinMaxScaler()

            # Apply scaling to the selected columns
            data_cleaned[columns_to_scale] = scaler.fit_transform(data_cleaned[columns_to_scale])

            # Check the DataFrame after scaling
            print("Data after scaling:")
            print(data_cleaned.head())

            # Convert the cleaned data to a numpy array for the model
            model_input = data_cleaned.values.reshape(1, -1)

            # Make prediction using the pre-trained model
            prediction = model.predict(model_input)

            # Return prediction as a JSON response
            return jsonify({'prediction': prediction.tolist()})

        else:
            return jsonify({'error': 'No matching data found in the database'}), 404

    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 500



# Run Flask app
if __name__ == '__main__':
    app.run(debug=True)