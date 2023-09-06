# mainapp/views.py

from django.shortcuts import render
from django.http import HttpResponse
from django.templatetags.static import static

def index(request):
    return render(request, 'map_template.html')

def video_single(request):
    return render(request, 'video-single.html')

def mainn(request):
    return render(request, 'index.html')

def redirected(request):
    return render(request, 'redirected-page.html')

def kz(request):
    return render(request, 'kz_page.html')

def ru(request):
    return render(request, 'ru_page.html')

#  dada
 
def show_floor_image(request, location, floor_number):
    modal_image_url = static('modal-img/en-flag.png')
    if location == "panfilova" and floor_number == 0:
        modal_image_url = static('img-videosingle/panfilova/PANFILOV0THVR1.png')  # Set the modal image for Panfilova
    elif location == "panfilova" and floor_number == 1:
        modal_image_url = static('img-videosingle/panfilova/PANFILOV1STVR1.png')
    elif location == "panfilova" and floor_number == 2:
        modal_image_url = static('img-videosingle/panfilova/PANFILOV2NDVR1.png')
    elif location == "panfilova" and floor_number == 3:
        modal_image_url = static('img-videosingle/panfilova/PANFILOV3RDVR1.png')
    elif location == "panfilova" and floor_number == 4:
        modal_image_url = static('img-videosingle/panfilova/PANFILOV4THVR1.png')
    
    elif location == "tolebi" and floor_number == 0:
        modal_image_url = static('img-videosingle/tolebi/TOLEBI0THVR1_ 3.png')  # Set the modal image for Tolebi
    elif location == "tolebi" and floor_number == 1:
        modal_image_url = static('img-videosingle/tolebi/TOLEBI1STVR1_ 2.png')  
    elif location == "tolebi" and floor_number == 2:
        modal_image_url = static('img-videosingle/tolebi/TOLEBI2NDVR1_ 2.png') 
    elif location == "tolebi" and floor_number == 3:
        modal_image_url = static('img-videosingle/tolebi/TOLEBI3RDVR1 5.png') 
    elif location == "tolebi" and floor_number == 4:
        modal_image_url = static('img-videosingle/tolebi/TOLEBI4THVR1 2.png') 
    elif location == "tolebi" and floor_number == 5:
        modal_image_url = static('img-videosingle/tolebi/TOLEBI5THVR1 2.png') 

    elif location == "abylk" and floor_number == 0:
        modal_image_url = static('img-videosingle/abylk/ABYLAIKHAN0THVR1_.png')  
    elif location == "abylk" and floor_number == 1:
        modal_image_url = static('img-videosingle/abylk/ABYLAIKHAN1STVR1_.png')
    elif location == "abylk" and floor_number == 2:
        modal_image_url = static('img-videosingle/abylk/ABYLAIKHAN2NDVR1_.png')
    elif location == "abylk" and floor_number == 3:
        modal_image_url = static('img-videosingle/abylk/ABYLAIKHAN3RDVR1_.png')
    elif location == "abylk" and floor_number == 4:
        modal_image_url = static('img-videosingle/abylk/ABYLAIKHAN4THVR1_.png')

    elif location == "kazybekbi" and floor_number == 1:
        modal_image_url = static('img-videosingle/kazybekbi/KAZYBEKBI1STVR1.png')
    elif location == "kazybekbi" and floor_number == 2:
        modal_image_url = static('img-videosingle/kazybekbi/KAZYBEKBI2NDVR1.png')
    elif location == "kazybekbi" and floor_number == 4:
        modal_image_url = static('img-videosingle/kazybekbi/KAZYBEKBI4THVR1.png')




    context = {
        'location': location,
        'floor_number': floor_number,
        'modal_image_url': modal_image_url,
    }
    return render(request, 'map_template.html', context)

def your_view(request, location, floor_number):
    # Define default modal image URL
    modal_image_url = static('modal-img/en-flag.png')

    print("TEST 1")
    print(modal_image_url)
    print("TEST 2")
    if location == "panfilova" and floor_number == 0:
        modal_image_url = static('modal-img/PANFILOV0THVR1.png')  # Set the modal image for Panfilova
        print("Panf")
    elif location == "tolebi" and floor_number == 0:
        modal_image_url = static('img-videosingle/TOLEBI0THVR1_3.png')  # Set the modal image for Tolebi
        print("Tole")
    elif location == "abylk" and floor_number == 0:
        modal_image_url = static('modal-img/en-flag.png')  # Set the modal image for Abylk
        print("Abyl")

    return render(request, 'map_template.html', {'modal_image_url': modal_image_url})
# dasda


