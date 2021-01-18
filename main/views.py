from django.shortcuts import render, HttpResponse, HttpResponse

def homepage(request):
    return HttpResponse('hello world!')

def third(request):
    return HttpResponse('This is page test3')