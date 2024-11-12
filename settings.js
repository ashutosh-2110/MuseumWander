# settings.py

DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'NAME': 'museum_db',
        'ENFORCE_SCHEMA': False,
        'CLIENT': {
            'host': 'mongodb://localhost:27017',
        }
    }
}
