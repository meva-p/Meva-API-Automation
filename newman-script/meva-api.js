const newman = require("newman")

newman.run({
    collection: "json-collection/meva.postman_collection.json",
    environment: "json-env/meva.postman_environment.json",
    reporters: ["cli", "htmlextra"]
}) 

