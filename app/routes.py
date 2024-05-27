from flask import render_template, request, redirect, url_for, jsonify
from app import app

# In-memory storage for to-do items
to_do_list = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/todos', methods=['GET', 'POST'])
def todos():
    if request.method == 'POST':
        item = request.json.get('item')
        if item:
            to_do_list.append(item)
        return jsonify({'todos': to_do_list})
    return jsonify({'todos': to_do_list})

@app.route('/todos/<int:item_id>', methods=['DELETE'])
def delete(item_id):
    if 0 <= item_id < len(to_do_list):
        del to_do_list[item_id]
    return jsonify({'todos': to_do_list})

