async function fetchAmazonData() {
    try {
        const response = await fetch("https://scraper-api.decodo.com/v2/scrape", {
            method: "POST",
            body: JSON.stringify({
                "target": "amazon_bestsellers",
                "query": "sports-collectibles",
                "page_from": "1",
                "num_pages": "10",
                "parse": true,
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
