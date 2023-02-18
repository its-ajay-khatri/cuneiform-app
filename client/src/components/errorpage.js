import React from "react";

const errorpage = () => {
    return(
        <>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1 className="error-class">404</h1>
                    </div>
                    <h2>We are sorry, but the page you're looking is not found!</h2>
                    <p className="error-para-class">The Page you're looking for might have removed, or it might be temperorarly Unavailable!</p>
                </div>
            </div>
        </>
    )
} 

export default errorpage;