# 💬 AI Chatbot with TensorFlow, NLTK, and Flask

This is a simple AI chatbot built using Natural Language Processing (NLP) and a Neural Network. It can be run as a command-line chatbot or through a web interface using Flask.

## 📁 Project Structure

```bash
chatbot-project/
├── chatbot.py            # Command-line chatbot
├── training.py           # Script to train the model
├── app.py                # Flask web application
├── intents.json          # Chatbot intents and responses
├── words.pkl             # Preprocessed vocabulary (generated)
├── classes.pkl           # List of intent tags (generated)
├── chatbot_model.h5      # Trained Keras model (generated)
├── templates/
│   └── index.html
├── static/
│   │── js/
│   │   └── index.html
│   └── css/
│       └── index.html
└── README.md             # You're here!
```

# 🧠 How It Works

1. `intents.json` defines possible user inputs (`patterns`) and bot responses (`responses`) grouped by `tags`.

2. `training.py`:

    - Tokenizes and lemmatizes words.

    - Converts data to bag-of-words vectors.

    - Trains a neural network model to classify the intent.

3. `chatbot.py` (Command Line):

    - Loads the trained model and responds to user inputs.

4. `app.py` (Flask Web App):

    - Provides an API endpoint `/chat` to interact with the bot.

    - Renders a web page (`index.html`) where users can chat.

# 🚀 Getting Started

1. Clone the Repository

```bash
git clone https://github.com/Koustav2908/ai-chatbot.git
cd ai-chatbot
```

2. Install Requirements

```bash
pip install -r requirements.txt
```

3. Train the Model

```bash
python training.py
```

This will create:

-   `words.pkl`

-   `classes.pkl`

-   `chatbot_model.h5`

4. Run Command Line Chatbot

```bash
python chatbot.py
```

To exit, type `exit`.

## 🌐 Running the Web Chatbot (Flask)

```bash
python app.py
```

Visit http://127.0.0.1:5000 in your browser to start chatting.

## 🔧 Customize Your Bot

Edit `intents.json` to:

-   Add new intents/tags.

-   Provide sample user patterns.

-   Provide corresponding responses.

After editing, re-run `training.py` to retrain the model.

## 💡 Example intents.json

```json
{
    "intents": [
        {
            "tag": "greeting",
            "patterns": ["Hi", "Hello", "Hey there"],
            "responses": ["Hello!", "Hi there!", "Greetings!"]
        },
        {
            "tag": "goodbye",
            "patterns": ["Bye", "See you later"],
            "responses": ["Goodbye!", "See you soon!"]
        }
    ]
}
```

## 📌 Notes

-   Model is a simple feedforward neural network using Keras.

-   Bag-of-Words is used for feature extraction.

-   It's not a generative chatbot — it picks responses based on intent classification.
