import { Parser, ProcessNodeDefinitions } from "html-to-react";
import Prism from "prismjs";
import PrismCode from "react-prism";
import React, { useEffect } from "react";
import DOMPurify from "isomorphic-dompurify";

export default function RichContent({ html, disabled }) {
    const cleanContent = DOMPurify.sanitize(html);

    const isValidNode = function () {
        return true;
    };
    const processNodeDefinitions = ProcessNodeDefinitions(React);

    const processingInstructions = [
        {
            replaceChildren: true,
            shouldProcessNode: function (node) {
                return node.attribs && node.attribs["data-test"] === "foo";
            },
            processNode: function (node, children, index) {
                return React.createElement("h1", { key: index }, "Heading");
            },
        },
        {
            shouldProcessNode: function (node) {
                return true;
            },
            processNode: processNodeDefinitions.processDefaultNode,
        },
    ]
    useEffect(() => {
        console.log("EFFECT")
        Prism.highlightAll(false, (e) => console.log(e));
    }, []);

    // const renderedContent = Parser().parse(cleanContent)

    const renderedContent = Parser().parseWithInstructions(
        cleanContent,
        isValidNode,
        processingInstructions
    );

    return (
        <>
            {renderedContent}
            {/* {(disabled) ? renderedContent : html} */}
        </>
    );
}
