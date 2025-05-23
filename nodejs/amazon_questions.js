async function fetchAmazonData() {
    try {
        const response = await fetch("https://scraper-api.decodo.com/v2/scrape", {
            method: "POST",
            body: JSON.stringify({
                "target": "amazon_questions",
                "query": "B09H74FXNW",
                "parse": true
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic [your basic authentication token]"
            }
        });

        const data = await response.json();
        console.log(JSON.stringify(data));

    } catch (error) {
        console.log(error);
    }
}

fetchAmazonData();
