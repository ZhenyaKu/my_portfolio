import { useEffect, useState } from "react";
import PortfolioList from "../portfolio-list/portfolio-list";
import "./portfolio.scss";
import {
    reactPortfolio,
    htmlPortfolio,
    cssPortfolio,
} from "../../data";


export default function Portfolio() {

    const [selected, setSelected] = useState("react");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "react",
            title: "React",
        },
        {
            id: "html",
            title: "HTML",
        },
        {
            id: "css",
            title: "CSS",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "react":
                setData(reactPortfolio);
                break;
            case "html":
                setData(htmlPortfolio);
                break;
            case "css":
                setData(cssPortfolio);
                break;
            default:
                setData(reactPortfolio);
        }
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h2>Portfolio</h2>
            <ul>
                {list.map(item => (
                    <PortfolioList
                        key={item.id}
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((item) => (
                    <a
                        href={item.url}
                        className="item"
                        key={item.id}
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                            src={item.img}
                            alt=""
                        />
                        <h3>{item.title}</h3>
                    </a>
                ))}
            </div>
        </div>
    )
}