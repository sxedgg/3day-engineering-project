from flask import Blueprint, jsonify
from backend.models.user import User
from backend.models.task import Task
from backend import db

user_bp = Blueprint("user", __name__)

@user_bp.route("/info/<int:uid>", methods=["GET"])
def user_info(uid):
    user = User.query.get(uid)
    if not user:
        return jsonify({"msg":"用户不存在","code":400})
    task_count = Task.query.filter_by(user_id=uid).count()
    return jsonify({
        "username":user.username,
        "create_time":user.create_time.strftime("%Y-%m-%d %H:%M:%S"),
        "task_total":task_count,
        "code":200
    })
