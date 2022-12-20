import { useState } from "react";

export default function Searchbox() {

    return (
      <div>
        <input
          type="text"
          name="number"
          id="number"
          min={0}
          className="block w-full rounded-md mt-3 border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
          />
      </div>
    )
  }
  