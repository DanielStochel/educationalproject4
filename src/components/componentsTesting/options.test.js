import React from "react";
import { render } from "enzyme";
import Options from "../Options";
import {AddOptions, EditOptions} from "../Options";
import ShallowRenderer from "react-test-renderer/shallow";

describe("checking the render <Options />", () => {
  it("test if component gets incorrect props", () => {
    const renderer = new ShallowRenderer();
    const renderOptions = renderer.render(<Options />);
    const renderAddOptions = renderer.render(<AddOptions />)
    
    return expect(renderOptions).toEqual(renderAddOptions);
    })
  it("test if component gets correct props", () => {
    const renderer = new ShallowRenderer();
    const renderOptions = renderer.render(<Options todo={{editing: true}} />);
    const renderEditOptions = renderer.render(<EditOptions />);

    return expect(renderOptions).toEqual(renderEditOptions);
  })
});
