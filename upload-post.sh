#!/bin/sh

echo -e "\033[33m"      # Yellow
echo -e "processing git add, commit and push"
echo -e "\033[0m"       # Restore

git add .

git commit -m "auto uploaded"

git push -u origin master

echo -e "\033[32m"      # Green
echo -e "processing completed"
echo -e "\033[0m"       # Restore