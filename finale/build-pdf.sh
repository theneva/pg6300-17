#!/bin/sh

# Fail on all errors
set -e

pandoc \
  -H force-image-locations.tex \
  -H fix-margins.tex \
  -o finale.pdf \
  finale.md
open ./finale.pdf
