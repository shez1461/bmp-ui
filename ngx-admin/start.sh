#!/bin/bash

# Start Browsersync BMP UI:
# This file needs to be removed for production release.

#browser-sync start --files "src/index.html, src/*, js/*.js, src/images/*.jpg, src/images/*.png, src/images/*.ico" --proxy localhost:5002 --port 5003 --no-inject-changes
browser-sync start --files "src/index.html, src/*, js/*.js, src/images/*.jpg, src/images/*.png, src/images/*.ico" --proxy localhost:4200 --port 5003 --no-inject-changes
