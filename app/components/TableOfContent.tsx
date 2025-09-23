'use client'

import React from "react";
import { useTableOfContent } from "react-table-of-content";

export const TableOfContent: React.FC<{}> = () => {
    const { headingLinks, contentIsActive } = useTableOfContent({
        selectors: "article h1, article h2, article h3, article h4",
    });

    if (!headingLinks || headingLinks.length < 1) return null;

    return (
        <div>
            <h4 id="on-this-page">ON THIS PAGE</h4>
            <ul className="mt-4 space-y-2">
                {headingLinks.map((link) => {
                    const isActive = contentIsActive(link.id);

                    return (
                        <li key={link.id}>
                            <a
                                className={`${
                                    isActive
                                        ? "text-gray-800 dark:text-gray-200 font-semibold"
                                        : "text-gray-500 dark:text-gray-400"
                                }
                ${["h3"].includes(link.tagName.toLowerCase()) && "pl-3"}
                ${["h4"].includes(link.tagName.toLowerCase()) && "pl-6"}
                hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200
                `}
                                href={`#${link.id}`}
                            >
                                {link.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};