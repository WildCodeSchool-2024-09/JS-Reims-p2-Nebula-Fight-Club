export async function getHeroByName(name: string) {
  const url = `https://superheroapi.com/api.php/9ee4fc0de4aeb36ca09d53d4b60c046d/search/${name}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("An error occurred:", error.message);
    }
  }
}
