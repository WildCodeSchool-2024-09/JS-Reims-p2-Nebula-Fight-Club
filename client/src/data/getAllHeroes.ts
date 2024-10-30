export async function getAllHeroes() {
  const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
  const getRandomIds = (count: number, max: number) => {
    const ids: number[] = [];
    while (ids.length < count) {
      const id = Math.floor(Math.random() * max) + 1;
      if (!ids.includes(id)) {
        ids.push(id);
      }
    }
    return ids;
  };

  const ids = getRandomIds(8, 731);
  const url = (id: number) =>
    `https://superheroapi.com/api.php/${accessToken}/${id}`;

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
      }),
    );

    const data = await Promise.all(fetchPromises);
    return data;
  } catch (error) {
    if (error instanceof Error)
      console.error("An error occurred:", error.message);
  }
}
