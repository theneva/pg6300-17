#!/bin/sh

# Fail on all errors
set -e

pandoc \
  -H force-image-locations.tex \
  -H fix-margins.tex \
  -o a11.pdf \
  a11.md
open ./a11.pdf
