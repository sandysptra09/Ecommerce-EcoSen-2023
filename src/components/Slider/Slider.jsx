import "./Slider.css";

export default function Slider() {
    return (
        <div className="container-slider">
            <div className="slider">
                <div className="content-slider">
                    <div className="information-slider">
                        <div className="title-slider">
                            <h1>Eat Clean Eat Organic</h1>
                            <p>
                            Clean and organic foods are a nutritional choice grown or 
                            produced without the use of pesticides or synthetic chemicals.
                            </p>
                        </div>
                        <div className="btn-slider">
                            <button>
                                <img src="/assets/elements/arrow-right.png" alt="button slider" />
                                <h3>EXPLORE</h3>
                            </button>
                            <div className="video-btn">
                                <img src="/assets/elements/watch-video.png" alt="video button" />
                                <h3>Watch Video</h3>
                            </div>
                        </div>
                    </div>
                    <div className="card-introduce">
                        <div className="slider-card">
                            <img src="/assets/elements/natural-food.png" alt="slider card" />
                            <div className="title-card">
                                <h3>Natural Food</h3>
                                <p> Healthy, organic and nutricious.</p>
                            </div>
                        </div>

                        <div className="slider-card">
                            <img src="/assets/elements/biological-safe.png" alt="slider card" />
                            <div className="title-card">
                                <h3>Biological Safe</h3>
                                <p>Already checked in the laboratory</p>
                            </div>
                        </div>

                        <div className="slider-card">
                            <img src="/assets/elements/improve-health.png" alt="slider card" />
                            <div className="title-card">
                                <h3>Improve Health</h3>
                                <p>Healthy foods has any benefits</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="color-background"></div>
            </div>
        </div>
    );
}
