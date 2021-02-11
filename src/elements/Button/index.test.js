import {render} from "@testing-library/react";
import Button from "./index";
import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'




test("Should not allowed click button if isDisabled present", ()=> {
    const {container} = render(<Button isDisabled>isDisabled</Button>)
    expect(container.querySelector("span.disabled")).toBeInTheDocument()
});

test("Should render loading/spinner", ()=> {
    const {container, getByText} = render(<Button isLoading></Button>)
    expect(getByText(/loading/i)).toBeInTheDocument();
    expect(container.querySelector("span")).toBeInTheDocument()
});

test("Should render <a> tag", ()=> {
    const {container} = render(<Button type="link" isExternal></Button>)
    expect(container.querySelector("a")).toBeInTheDocument()
});

test("Should render <Link> tag", ()=> {
    const {container} = render(<Router><Button href="" type="link"></Button></Router>)
    expect(container.querySelector("a")).toBeInTheDocument()
});

