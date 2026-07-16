import os

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "dev-2026-task-system")
    SQLALCHEMY_DATABASE_URI = "sqlite:///task.db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
