
const Features = () => {
    return (
        <div className="container">
            <h2 className="pb-2 border-bottom">Perks and Features!</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="feature-col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        <img src="/Report.gif" className="img-fluid" alt="" />
                    </div>
                    <h3 className="fs-2">Inventory Management</h3>
                    <p></p>
                </div>
                <div className="feature-col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        <img src="/Product tour.gif" className="img-fluid" alt="" />
                    </div>
                    <h3 className="fs-2">Track your sales</h3>
                    <p></p>
                </div>
                <div className="feature-col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        <img src="/Bookshop.gif" className="img-fluid" alt="" />
                    </div>
                    <h3 className="fs-2">SME Friendly</h3>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Features