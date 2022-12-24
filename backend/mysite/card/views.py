from django.shortcuts import render
from rest_framework import generics
from card.models import Card, HistoryCard
from card.serializers import CardSerializer, HistoryCardSerializer

class CardViews(generics.ListCreateAPIView, generics.UpdateAPIView, generics.DestroyAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

class HistoryCardViews(generics.ListCreateAPIView):
    serializer_class = HistoryCardSerializer
    model = serializer_class.Meta.model

    def get_queryset(self):
        card_id = self.kwargs['card_id']
        queryset = self.model.objects.filter(card_id=card_id)
        return queryset
