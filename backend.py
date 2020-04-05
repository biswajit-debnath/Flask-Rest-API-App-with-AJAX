from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')


@app.route('/backend', methods=['POST'])
def process():
	email = request.form['email']
	name = request.form['name']

	if name and email:
		return jsonify({'messz' : 'Successfully Submiitted'})
	else:
		return jsonify({'err' : 'Error Occured!'})


if __name__ == '__main__':
	app.run(debug=True)