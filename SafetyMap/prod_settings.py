from pathlib import Path
import os

BASE_DIR = Path(__file__).resolve().parent.parent

DEBUG = True

ALLOWED_HOSTS = ['safety.kbtu.kz', '188.127.36.29']
SECRET_KEY = 'django-insecure-z==7y_%*r@k+(3%t*z3n7n!(jv5!0vatgfzk!i!)upgco8-ot7@$i'

STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]