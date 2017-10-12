#!/bin/sh

# Fail on all errors
set -e

pandoc \
  -H force-image-locations.tex \
  -H fix-margins.tex \
  -o a10.pdf \
  a10.md
open ./a10.pdf
