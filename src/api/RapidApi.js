
export const exerciseOption = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e288d5ce24msh768dc928868a3e6p1368e6jsnc53bb3f34b8d',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    },
  };
  export const youtubeoptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '84df81e23bmsh3f5924656fe392cp11d6a0jsn146f8beb42b4',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  };
  
  // export default { exerciseOption, fetchData, youtubeoptions };