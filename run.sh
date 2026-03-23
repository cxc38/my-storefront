

npm run import -- \
  --token .env \
  --urls tools/importer/simple_urls.txt \
  --importjs tools/importer/simple_import.js \
  --options '{
    "type": "xwalk",
    "data": {
      "siteName": "my-storefront",
      "assetFolder": "my-storefront"
    }
  }' \
  --models ./component-models.json \
  --filters ./component-filters.json \
  --definitions ./component-definition.json

