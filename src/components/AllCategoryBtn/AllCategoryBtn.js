"use client";
import React, { useState } from "react";
import Categorys from "@/components/Categorys";
import { SlArrowUp } from "react-icons/sl";
function AllCategoryBtn() {
  let [categoryValue, setCategoryValue] = useState(false);

  return (
    <>
      <div className="categorySection">
        <div className={`category-container ${categoryValue ? "true" : ""}`}>
          <Categorys
            categoryValue={categoryValue}
            setCategoryValue={setCategoryValue}
          />
        </div>
        <button onClick={() => setCategoryValue(!categoryValue)}>
          Category
          <SlArrowUp
            style={
              !categoryValue
                ? {
                    transform: "rotate(180deg)",
                  }
                : ""
            }
          />
        </button>
      </div>
    </>
  );
}

export default AllCategoryBtn;
