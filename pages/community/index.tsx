import { useState } from "react";

const Community = () => {
    console.log("COMMUNITY COMPONENT - PAGES ROUTER");
    const [ title, setTitle ] = useState<string>("Hello");
    return (
    <div>
        COMMUNITY (" ")
          <button onClick={() => alert("Hello MIT")} style={{ margin: "15px" }}>
            Press Me
          </button>
        </div>
    );
};

export default Community;