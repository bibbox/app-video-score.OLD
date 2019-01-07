#!/usr/bin/env python
import os
from server.app import app_celerey, create_app

app = create_app(os.getenv('FLASK_CONFIG') or 'default')
app.app_context().push()
