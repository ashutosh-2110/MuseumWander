# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('book-ticket/', views.book_ticket, name='book_ticket'),
]
# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('checkout/', views.checkout, name='checkout'),
]
