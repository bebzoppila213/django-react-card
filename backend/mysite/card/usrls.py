from django.contrib import admin
from django.urls import path
from card.views import CardViews, HistoryCardViews

urlpatterns = [
    path("cards/<int:pk>", CardViews.as_view()),
    path("cards/", CardViews.as_view()),
    path("history-card/<int:card_id>", HistoryCardViews.as_view()),
]