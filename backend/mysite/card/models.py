from django.db import models

# Create your models here.


class Card(models.Model):
    series = models.IntegerField()
    number = models.IntegerField(unique=True)
    release_date = models.DateTimeField()
    end_date = models.DateTimeField()
    balanse = models.FloatField()

    class StatusCard(models.TextChoices):
        ACTIVATED = 'AC', ('Активированная')
        NO_ACTIVATED = "NO_AC", ("Не активированная")
        EXPIRED = "EX", ("Просроченная")

    status = models.CharField(
        max_length=5, choices=StatusCard.choices, default=StatusCard.NO_ACTIVATED)

    def __str__(self) -> str:
        return str(self.number)

class HistoryCard(models.Model):
    card = models.ForeignKey(Card, on_delete=models.CASCADE)
    purchase_date = models.DateTimeField()
    sum = models.FloatField()

    def __str__(self) -> str:
        return f"{str(self.card)} {str(self.purchase_date)} "