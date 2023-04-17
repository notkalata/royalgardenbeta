export default function Gallery(){
    return(
        <div className="Gallery">
            <div className="Exterior">
                <h1>Exterior</h1>
                <img src="https://cloudfront-us-east-1.images.arcpublishing.com/pmn/UF7CU7P2KBFBHFSUWS76NEJJCM.jpg" />
            </div>
            <div className="Interior">
                <h1>Interior</h1>
                <img src="https://www.sbid.org/wp-content/uploads/2021/12/V.Concept-by-Victoria-Vitkovskaya-Almond-Apartment16.jpg" />
            </div>
            <div className="Video">
                <h1>Video</h1>
                <iframe width="700px" height="500px" src="https://www.youtube.com/embed/OEvuKTdxjWc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="Finished">
                <h1>Finished</h1>
            </div>
        </div>
    );
}