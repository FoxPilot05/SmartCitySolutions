from flask import Flask, render_template
app = Flask(__name__, static_url_path='/static')

#nochmal nachgucken, wie man hierfür ne API machen könnte

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/newpage')
def newpage():
    return render_template('results.html')

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(debug=True)