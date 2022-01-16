import { Button, Form, FormControl } from "react-bootstrap";
import { useState } from "react";

export default function SearchBar (props) {
    const [search, setSearch] = useState("");

    const searchItem = (e) => {
        const newSearch = e.currentTarget.value;
        setSearch(newSearch);
        props.onSearchChangeProp(newSearch);
    }

    return (
        <>
        <Form className="d-flex my-5 px-5">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={search}
          onChange={searchItem}
        />
      </Form>
        </>
    )
}


