import React, { useEffect } from "react";
import "./App.css";

function App() {
    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const tweetUrl = query.get("url");

        if (tweetUrl) {
            const id = tweetUrl.split("/status/")[1];

            window.twttr.ready(() => {
                window.twttr.widgets.createTweet(
                    id,
                    document.getElementById("tweet"),
                    {
                        cards: true,
                        conversation: "none",
                    }
                );
            });
        }
    }, []);

    return (
        <div className="App">
            <div id="tweet"></div>
        </div>
    );
}

export default App;
