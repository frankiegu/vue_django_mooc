import os
import sys


def main():
    os.environ.setdefault('SCRAPY_SETTINGS_MODULE', 'crawler.settings')
    try:
        from scrapy.cmdline import execute
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Scrapy. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute(sys.argv)


if __name__ == '__main__':
    main()
