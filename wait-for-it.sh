#!/bin/bash

# The host and port we're waiting for are passed as arguments
HOST=$1
PORT=$2

while ! nc -z $HOST $PORT; do
  echo "Waiting for MySQL ($HOST:$PORT) to be fully started..."
  sleep 1
done

echo "MySQL is ready."

# Execute the rest of your CMD
shift 2
exec "$@"
