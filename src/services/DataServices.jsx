let GetData = async () => {
    let url = `https://api.adviceslip.com/advice`;
    const response = await fetch(url);
    let data = await response.json();
    return data.slip;
}

export { GetData }