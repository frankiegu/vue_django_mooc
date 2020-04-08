from rest_framework import pagination


class CoursePagination(pagination.PageNumberPagination):
    """
        课程分页
    """
    page_size = 10
    page_size_query_param = 'page_size'


class PlayRecordPagination(pagination.PageNumberPagination):
    """
        课程分页
    """
    page_size = 5
    page_size_query_param = 'page_size'


class CourseRecordPagination(pagination.PageNumberPagination):
    """
        课程分页
    """
    page_size = 9
    page_size_query_param = 'page_size'
