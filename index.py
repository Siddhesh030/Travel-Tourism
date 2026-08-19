from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route("/")
def home():

    return jsonify({
        "message": "Wanderly Travel API is running"
    })


@app.route("/api/destinations", methods=["GET"])
def destinations():

    data = [

        {
            "name": "Goa",
            "country": "India",
            "price": 8999
        },

        {
            "name": "Manali",
            "country": "India",
            "price": 10999
        },

        {
            "name": "Kerala",
            "country": "India",
            "price": 12999
        },

        {
            "name": "Jaipur",
            "country": "India",
            "price": 7999
        },

        {
            "name": "Kashmir",
            "country": "India",
            "price": 15999
        },

        {
            "name": "Mumbai",
            "country": "India",
            "price": 6999
        }

    ]

    return jsonify(data)


@app.route("/api/packages", methods=["GET"])
def packages():

    data = [

        {
            "name": "Goa Beach Escape",
            "duration": "4 Days / 3 Nights",
            "price": 12999
        },

        {
            "name": "Manali Adventure",
            "duration": "5 Days / 4 Nights",
            "price": 16999
        },

        {
            "name": "Kerala Escape",
            "duration": "6 Days / 5 Nights",
            "price": 19999
        }

    ]

    return jsonify(data)


@app.route("/api/contact", methods=["POST"])
def contact():

    data = request.get_json()

    if not data:

        return jsonify({
            "error": "Invalid request"
        }), 400


    name = data.get("name", "").strip()
    email = data.get("email", "").strip()
    destination = data.get("destination", "").strip()
    message = data.get("message", "").strip()


    if not name or not email or not destination or not message:

        return jsonify({
            "error": "Please fill all fields."
        }), 400


    print("New Travel Enquiry")
    print("------------------")
    print("Name:", name)
    print("Email:", email)
    print("Destination:", destination)
    print("Message:", message)


    return jsonify({

        "message":
        "Thank you! Your travel enquiry has been received."

    }), 200


if __name__ == "__main__":

    app.run(
        debug=True,
        host="0.0.0.0",
        port=5000
    )
