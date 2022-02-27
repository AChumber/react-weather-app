interface BGImage {
    cloudy: string,
    sunny: string,
    rainy: string
};
const backgrounds:BGImage = {
    cloudy: "pexels-cloudy.jpg",
    sunny: "pexels-sunny.jpg",
    rainy: "pexels-rainy.jpg"
}

const backgroundImageSelector = (weatherDesc:string):string => {
    let imageType: string;
    //return string name of image to use including file extension
    weatherDesc = weatherDesc.toLowerCase();

    if(['sunny', 'sun', 'clear'].includes(weatherDesc)) {
        imageType = backgrounds.sunny;
    } else if(['cloudy', 'cloud'].includes(weatherDesc)) {
        imageType = backgrounds.cloudy;
    } else if(['rainy', 'rain'].includes(weatherDesc)) {
        imageType = backgrounds.rainy;
    } else {
        imageType = backgrounds.sunny;
    }

    return `${process.env.PUBLIC_URL}/assets/${imageType}`;
};

export default backgroundImageSelector;