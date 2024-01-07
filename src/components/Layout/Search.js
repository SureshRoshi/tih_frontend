import React from "react";
import { Form } from "react-router-dom";

function Search() {
  return (
    <Form method="POST" className="search-header">
      <div className="input-group w-100">
        <input
          type="text"
          className="form-control"
          placeholder="Search Tech Insights, Topics, and Contributors"
          name="search-text"
        />
        <div className="input-group-append">
          <button className="btn btn-search bg-white" type="submit">
            <i className="elegant-icon icon_search"></i>
          </button>
        </div>
      </div>
    </Form>
  );
}

export default Search;
