# -*- coding: utf-8 -*-
import scrapy


class Course163Spider(scrapy.Spider):
    name = 'course163'
    allowed_domains = ['open.163.com']
    start_urls = ['http://open.163.com/']

    def parse(self, response):
        pass
