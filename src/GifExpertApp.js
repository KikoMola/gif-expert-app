import React, { useState } from "react";

import { GifGrid } from "./components/GifGrid";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["Dragon Ball Z"]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {categories.map((category) => (
                    <GifGrid category={category} key={category} />
                ))}
            </ol>
        </>
    );
};
