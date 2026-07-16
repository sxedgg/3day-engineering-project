from flask import Blueprint, request, jsonify
from backend import db
from backend.models.user import User
import jwt
import datetime
from backend.config import Config

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")
    if User.query.filter_by(username=username).first():
        return jsonify({"msg":"用户名已存在","code":400})
    user = User(username=username)
    user.set_pwd(password)
    db.session.add(user)
    db.session.commit()
    return jsonify({"msg":"注册成功","code":200})

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data.get("username")).first()
    if not user or not user.check_pwd(data.get("password")):
        return jsonify({"msg":"账号密码错误","code":400})
    token = jwt.encode({
        "uid":user.id,
        "exp":datetime.datetime.utcnow()+datetime.timedelta(hours=24)
    }, Config.SECRET_KEY, algorithm="HS256")
    return jsonify({"msg":"登录成功","token":token,"code":200})
