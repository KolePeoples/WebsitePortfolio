import React from "react";
import TimelineData from "../Data/TimelineData";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

function Timeline()
{
    return (
        <div className="flex flex-col md:flex-row justify-center my-20">
            <div className="w-full md:w-7/12">
                <Title>Timeline</Title>
                {TimelineData.map(item => (
                    <TimelineItem 
                        year = {item.year}
                        title = {item.title}
                        duration = {item.duration}
                        details = {item.details}
                        link = {item.link} //Changes started here 05/22/24
                    />
                ))}
            </div>
        </div>
    )
}

export default Timeline;