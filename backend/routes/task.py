from flask import Blueprint, request, jsonify
from backend import db
from backend.models.task import Task

task_bp = Blueprint("task", __name__)

@task_bp.route("/list/<int:uid>", methods=["GET"])
def task_list(uid):
    tasks = Task.query.filter_by(user_id=uid).all()
    res = [{
        "id":t.id,"title":t.title,"content":t.content,"status":t.status
    } for t in tasks]
    return jsonify({"data":res,"code":200})

@task_bp.route("/add", methods=["POST"])
def task_add():
    d = request.get_json()
    if not d.get("title") or not d.get("uid"):
        return jsonify({"msg":"任务标题、用户ID不能为空","code":400})
    t = Task(title=d["title"], content=d.get("content",""), user_id=d["uid"])
    db.session.add(t)
    db.session.commit()
    return jsonify({"msg":"新增任务成功","code":200})

@task_bp.route("/update/<int:tid>", methods=["PUT"])
def task_update(tid):
    t = Task.query.get(tid)
    if not t:
        return jsonify({"msg":"任务不存在","code":400})
    d = request.get_json()
    t.title = d.get("title", t.title)
    t.content = d.get("content", t.content)
    t.status = d.get("status", t.status)
    db.session.commit()
    return jsonify({"msg":"更新成功","code":200})

@task_bp.route("/del/<int:tid>", methods=["DELETE"])
def task_del(tid):
    t = Task.query.get(tid)
    if not t:
        return jsonify({"msg":"任务不存在","code":400})
    db.session.delete(t)
    db.session.commit()
    return jsonify({"msg":"删除成功","code":200})
