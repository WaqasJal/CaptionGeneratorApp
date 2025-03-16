def handle_caption(request):
    try:
        data = request.get_json()
        caption = data.get('caption')
        with open('captions.txt', 'a') as file:
            file.write(caption + "\n")
        return jsonify({"message": "Caption received successfully!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500