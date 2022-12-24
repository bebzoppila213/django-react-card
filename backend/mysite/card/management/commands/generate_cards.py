from django.core.management.base import BaseCommand
from faker import Faker
from card.models import Card
from dateutil.relativedelta import relativedelta
import datetime


class Command(BaseCommand):
    help = u'Создание случайного пользователя'

    def add_arguments(self, parser):
        parser.add_argument('total', type=int,
                            help=u'Количество создаваемых карт')
        parser.add_argument('series', type=int, help=u'Серия создаваимых карт')
        parser.add_argument('end_date_type', type=str,
                            help=u'Дата окончания действия')

    def get_activity_time(self, end_date_type):
        number_date = end_date_type[0]
        type_date = end_date_type[1]
        activity_time = None
        if type_date == "m":
            activity_time = relativedelta(months=int(number_date))
        if type_date == "g":
            activity_time = relativedelta(years=int(number_date))
        return activity_time

    def get_status_card(self, end_date):
        if datetime.datetime.now() > end_date:
            return "EX"
        else:
            return "NO_AC"

    def handle(self, *args, **kwargs):
        total = kwargs['total']
        series = kwargs['series']
        end_date_type = kwargs['end_date_type']

        activity_time = self.get_activity_time(end_date_type)

        fake = Faker()
        for i in range(total):
            number = fake.unique.credit_card_number()
            release_date = fake.date_time_this_year()
            balanse = fake.random_int()
            end_date = release_date + activity_time
            Card.objects.create(series=series, number=number, release_date=release_date,
                                balanse=balanse, end_date=end_date, status=self.get_status_card(end_date))
