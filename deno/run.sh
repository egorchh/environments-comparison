read number

for ((i=0; i<$number; i++)); do
  docker run --rm -v "$PWD":/app --env FILEPATH="src/shared/benchAsyncArray.js" benchmark:deno
done
