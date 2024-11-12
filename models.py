# models.py
from django.db import models

class Exhibit(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    location = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Ticket(models.Model):
    TICKET_TYPE_CHOICES = [
        ('adult', 'Adult'),
        ('child', 'Child'),
        ('senior', 'Senior'),
    ]
    
    date = models.DateField()
    exhibit = models.ForeignKey(Exhibit, on_delete=models.CASCADE)
    ticket_type = models.CharField(max_length=10, choices=TICKET_TYPE_CHOICES)
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.ticket_type} ticket for {self.exhibit.name} on {self.date}"
# models.py
from django.db import models

class TicketOrder(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    card_details = models.CharField(max_length=16)  # Storing card details for simplicity, but it should be encrypted
    purchase_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order by {self.name} on {self.purchase_date}"
