export async function getHeroByName(name: string) {
  const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
  const url = `https://superheroapi.com/api.php/${accessToken}/search/${name}`;

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
