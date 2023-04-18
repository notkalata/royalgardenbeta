export default function Gallery(){
    return(
        <div className="Gallery">
            <div className="Exterior">
                <h1 className="GalleryText">Exterior</h1>
                <img className="GalleryImage" src="https://cloudfront-us-east-1.images.arcpublishing.com/pmn/UF7CU7P2KBFBHFSUWS76NEJJCM.jpg" />
            </div>
            <div className="Interior">
                <h1 className="GalleryText">Interior</h1>
                <img className="GalleryImage" src="https://www.sbid.org/wp-content/uploads/2021/12/V.Concept-by-Victoria-Vitkovskaya-Almond-Apartment16.jpg" />
            </div>
            <div className="Video">
                <h1 className="GalleryText">Video</h1>
                <iframe className="GalleryVideo" width="700px" height="500px" src="https://www.youtube.com/embed/OEvuKTdxjWc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="Finished">
                <h1 className="GalleryText">Finished</h1>
                <div className="Carousel">
                    <img src="https://www.decorilla.com/online-decorating/wp-content/uploads/2020/07/Sleek-and-transitional-modern-apartment-design-scaled.jpg" />
                    <img src="https://design-milk.com/images/2022/01/NCC-Apartment-Sao-Paolo-David-Ito-1.jpg" />
                    <img src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3126,w_5000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/NQS_MS_LENORA_View_20_Bedroom_gbgxsr.jpg" />
                </div>
            </div>
        </div>
    );
}