from django.conf.urls import url
from django.contrib.auth import settings
from django.conf.urls.static import static
from .views import index

urlpatterns = [

    url(r'', index),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
