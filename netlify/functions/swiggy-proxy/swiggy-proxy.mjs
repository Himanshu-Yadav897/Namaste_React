// Remove the import statement for node-fetch
// import fetch from 'node-fetch'; // Not needed in Parcel (browser)

export const handler = async (event, context) => {
  const url = event.queryStringParameters.url;
  console.log('Fetching URL:', decodeURIComponent(url));

  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Accept': 'application/json',
    // Add other headers if necessary
  };

  try {
    // Use the browser's native fetch
    const response = await fetch(decodeURIComponent(url), { headers });

    if (!response.ok) {
      console.log(`Failed to fetch data from Swiggy, Status: ${response.status}`);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'Failed to fetch data from Swiggy' })
      };
    }

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error("Error occurred:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error', message: error.message })
    };
  }
};

