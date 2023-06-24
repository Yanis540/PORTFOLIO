import { useState } from "react"

export type EducationalContent = {
    id: EducationContentId
    degree: string, 
    field : string,
    location:string
    year : string 
    started_date : String
    end_date : string
    delivered : string[] 
    active:boolean
}
type EducationContentId = "l1" | "l2" | "l3"

const useEducation :() => ([EducationalContent[] , ((contentId: EducationContentId) => void)])= ()=>{
    const [selectedContent,setSelectedContent] = useState<EducationContentId>("l1");
    const setContent = (contentId:EducationContentId)=>setSelectedContent(contentId)
    const contents :EducationalContent[]= [
        {
            id:"l1",
            year:"First", 
            degree:"Bachelor",
            field:"Software Enginnering",
            location:"USTHB",
            started_date:"September 2020",
            end_date:"June 2021",
            delivered : [
                "Learned all the basics of developpement and computer science, algorithms and data structures",
                "Learned C programming language ",
                "Learned advanced concepts in algebra and calculus and probabilities",
                "First project, a software that aims to manage the university's library", 
            ], 
            active: "l1" == selectedContent
            
        }, 
        {
            id:"l2",
            year:"Second", 
            degree:"Bachelor",
            field:"Software Enginnering",
            location:"USTHB",
            started_date:"September 2021",
            end_date:"June 2022",
            delivered : [
                "Advanced concepts in data structures, databases, web developpement, Operating systems, computer architecture and system design ",
                "Learned Java, JavaScript, PHP, Assembly and SQL",
                "Worked with Linux",
                "", 
                "Custom shopping desktop application for users with admin dashboard using Java", 
                "Website for university's club",
            ],
            active: "l2" == selectedContent

            
        }, 
        {
            id:"l3",
            year:"Third",
            degree:"Bachelor",
            field:"Software Enginnering",
            location:"USTHB",
            started_date:"September 2022",
            end_date:"June 2023",
            delivered : [
                "Advanced concepts in system design, databases, Operating systems and networking",
                "Website to handle administrative files ",
                "Graduation thesis was about creating a video surveillance system using deep learning and machine learning to detect suspicious people (criminals) in a public place ",
            ], 
            active: "l3" == selectedContent

            
        }, 
    ]
    return [contents,setContent]
}

export {useEducation}