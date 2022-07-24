

export const getGif =  async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=dQKvh9AIkWyG6JqAiApTG3KYoFyFvxeo&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))

    return gifs
  }