from flask import Flask, request, jsonify

app = Flask(__name__)


# -----------------------------
# HOME API
# -----------------------------

@app.route("/api", methods=["GET"])
def home():

    return jsonify({
        "success": True,
        "message": "Wanderly Travel API is running"
    })


# -----------------------------
# DESTINATIONS
# -----------------------------

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
        }
    ]

    return jsonify(data)


# -----------------------------
# PACKAGES
# -----------------------------

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


# -----------------------------
# CONTACT
# -----------------------------

@app.route("/api/contact", methods=["POST"])
def contact():

    data = request.get_json(silent=True) or {}

    name = str(data.get("name", "")).strip()
    email = str(data.get("email", "")).strip()
    destination = str(data.get("destination", "")).strip()
    message = str(data.get("message", "")).strip()

    if not name:
        return jsonify({
            "success": False,
            "error": "Name is required"
        }), 400

    if not email:
        return jsonify({
            "success": False,
            "error": "Email is required"
        }), 400

    if not destination:
        return jsonify({
            "success": False,
            "error": "Destination is required"
        }), 400

    if not message:
        return jsonify({
            "success": False,
            "error": "Message is required"
        }), 400

    print("----- NEW TRAVEL ENQUIRY -----")
    print("Name:", name)
    print("Email:", email)
    print("Destination:", destination)
    print("Message:", message)
    print("------------------------------")

    return jsonify({
        "success": True,
        "message": "Thank you! Your enquiry has been received."
    })


# -----------------------------
# VERCEL ENTRY POINT
# -----------------------------

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )
