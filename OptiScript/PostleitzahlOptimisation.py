from flask import Flask, render_template
app = Flask(__name__, static_url_path='/static')

#nochmal nachgucken, wie man hierfür ne API machen könnte

@app.route('/')
def home():
    return render_template('index4.html')

if __name__ == '__main__':
    app.run(debug=True)