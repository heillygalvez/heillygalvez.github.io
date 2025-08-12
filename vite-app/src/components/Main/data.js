import stockThumbnail from "../../assets/stock_thumbnail.png"
import portThumbnail from "../../assets/port_thumbnail.png"
import glimpseThumbnail from "../../assets/glimpse_thumbnail.png"
import rsThumbnail from "../../assets/rs_thumbnail.png"

export const PROJECTS = [
    {
        title: 'RenderStitch: Preview and Troubleshoot Amigurumi',
        description: 'A much needed tool for the crochet design community, RenderStitch is a React app that takes in a crochet pattern as input, and uses D3.js and THREE.js to simulate and render the final form of the plushie.',
        imageURL: rsThumbnail,
        linkURL: "https://renderstitch.web.app/"
    },
    {
        title: 'Safety Stock Mosaic', 
        description: 'An interactive heat map-style visualization to help understand a safety stock optimization model. Never run out of stock? Stay lean on inventory? How to find the sweet spot?',
        imageURL: stockThumbnail,
        linkURL: 'https://observablehq.com/@heillygalvez/safety-stock'
    },
    {
        title: 'Container Traffic Waves', 
        description: 'How are Covid-19 and capacity constraints in American ports affecting port operations in Panama? An enhanced bump chart to track the container ports of the isthmus.',
        imageURL: portThumbnail,
        linkURL: 'https://observablehq.com/@heillygalvez/container_traffic',
    },
    {
        title: 'A Glimpse into the Future', 
        description: 'The World Government Summit released a dataset with predictions for how the world will change in 7 frontiers from now to 2050 and beyond. Explore how these predictions relate to each other with this interactive tool.',
        imageURL: glimpseThumbnail,
        linkURL: 'https://www.glimpseintothefutureviz.com/'
    }
]