import os

from django.core.management.base import BaseCommand, CommandError


class Command(BaseCommand):
    def handle(self, *args, **options):
        os.environ['SCRAPY_SETTINGS_MODULE'] = args[0]
        from scrapy.cmdline import execute
        # scrapy ignores args[0], requires a mutable seq
        execute(list(args))
