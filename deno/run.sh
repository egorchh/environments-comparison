read number

for ((i=0; i<$number; i++)); do
  docker run --rm -v "$PWD":/app -v "$PWD/../shared":/app/shared --env FILEPATH="shared/benches/asyncArray.bench.js" benchmark:deno
done
