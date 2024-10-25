export async function getAllHeroes() {
    const accessToken = "9ee4fc0de4aeb36ca09d53d4b60c046d";
    const ids = [487, 38, 140, 303, 381, 485];
    const url = (id: number) => `https://superheroapi.com/api.php/${accessToken}/${id}`;
  
    try {
      const fetchPromises = ids.map((id) =>
        fetch(url(id), {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }).then(async (response) => {
          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error: ${response.status} - ${errorText}`);
          }
          return response.json();
        })
      );
  
      const data = await Promise.all(fetchPromises);
      return data;
  
    } catch (error) {
      if (error instanceof Error)
      console.error("An error occurred:", error.message);
    }
  }