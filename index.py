from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route("/api", methods=["GET"])
def api_home():
    return jsonify({
        "status": "success",
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

    data = request.get_json(silent=True)

    if not data:
        return jsonify({
            "error": "Invalid request"
        }), 400

    name = data.get("name", "").strip()
    email = data.get("email", "").strip()
    destination = data.get("destination", "").strip()
    message = data.get("message", "").strip()

    if not name:
        return jsonify({
            "error": "Name is required"
        }), 400

    if not email:
        return jsonify({
            "error": "Email is required"
        }), 400

    if not destination:
        return jsonify({
            "error": "Destination is required"
        }), 400

    if not message:
        return jsonify({
            "error": "Message is required"
        }), 400

    print("================================")
    print("NEW TRAVEL ENQUIRY")
    print("================================")
    print("Name:", name)
    print("Email:", email)
    print("Destination:", destination)
    print("Message:", message)
    print("================================")

    return jsonify({
        "success": True,
        "message": "Thank you! Your travel enquiry has been received."
    })


# Local development
if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )
