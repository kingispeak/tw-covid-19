#!/bin/bash  

# die script -- just in case
die() { echo "$@" 1>&2 ; exit 1; }

url=https://od.cdc.gov.tw/eic/Weekly_Age_County_Gender_19CoV.json
path=./src/assets/Weekly_Age_County_Gender_19CoV.json

if [ -x "$(which wget)" ] ; then
    wget -q $url -O $path
elif [ -x "$(which curl)" ]; then
    curl -o $path -sfL $url
else
    echo "Could not find curl or wget, please install one." >&2
fi