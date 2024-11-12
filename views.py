# views.py
from django.shortcuts import render, redirect
from .models import Exhibit, Ticket
from django.http import JsonResponse

def home(request):
    exhibits = Exhibit.objects.all()
    return render(request, 'index.html', {'exhibits': exhibits})

def book_ticket(request):
    if request.method == 'POST':
        date = request.POST['date']
        exhibit_id = request.POST['exhibit']
        ticket_type = request.POST['tickets']
        exhibit = Exhibit.objects.get(id=exhibit_id)
        Ticket.objects.create(
            date=date,
            exhibit=exhibit,
            ticket_type=ticket_type,
            quantity=1  # For simplicity, assuming 1 ticket per request
        )
        return JsonResponse({"success": True})
    return JsonResponse({"success": False})
# views.py
from django.shortcuts import render, redirect
from .models import TicketOrder
from django.http import JsonResponse

def checkout(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        card_details = request.POST.get('card')

        # Save the order to the database
        TicketOrder.objects.create(
            name=name,
            email=email,
            card_details=card_details
        )

        return JsonResponse({'success': True, 'message': 'Purchase completed successfully!'})

    return render(request, 'checkout.html')
