from rest_framework import serializers
from card.models import Card, HistoryCard


class CardSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Card
        fields = '__all__'

class HistoryCardSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = HistoryCard
        fields = ("purchase_date", "sum")
