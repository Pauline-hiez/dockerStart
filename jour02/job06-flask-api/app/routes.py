from flask import Blueprint, jsonify
from datetime import datetime

main = Blueprint('main', __name__)
@main.route('/')
def index():
    return jsonify({
        'message': 'Hello Docker + Flask!',
        'timestamp': datetime.now().isoformat()
    })
@main.route('/health')
def health():
    return jsonify({'status': 'ok'})
@main.route('/api/users')
def users():
    return jsonify([
        {'id': 1, 'name': 'Alice'},
        {'id': 2, 'name': 'Bob'}
    ])

from flask import Blueprint, jsonify, request
@main.route('/api/users', methods=['POST'])
def create_user():
    data = request.get_json()

    return jsonify({
        'message': 'User created',
        'user': data
    }), 201