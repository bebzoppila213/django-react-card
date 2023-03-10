# Generated by Django 4.1.4 on 2022-12-24 06:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("card", "0002_remove_card_year_in_school_card_status"),
    ]

    operations = [
        migrations.CreateModel(
            name="HistoryCard",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("purchase_date", models.DateTimeField()),
                ("sum", models.FloatField()),
                (
                    "card",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="card.card"
                    ),
                ),
            ],
        ),
    ]
