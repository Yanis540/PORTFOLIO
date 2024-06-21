import { useState } from "react"

export type EducationalContent = {
    id: EducationContentId
    degree: string, 
    field : string,
    location:{
        name:string
        url:string
    }
    year : string 
    started_date : String
    end_date : string
    delivered : string[] 
    active:boolean
}
type EducationContentId = "licence" | "master"

const useEducation :() => ([EducationalContent[] , ((contentId: EducationContentId) => void)])= ()=>{
    const [selectedContent,setSelectedContent] = useState<EducationContentId>("licence");
    const setContent = (contentId:EducationContentId)=>setSelectedContent(contentId)
    const contents :EducationalContent[]= [
        {
            id:"licence",
            year:"Third", 
            degree:"Bachelor's",
            field:"Software Enginnering",
            location:{
                name:"USTHB",
                url:"https://www.usthb.dz"
            },
            started_date:"September 2020",
            end_date:"June 2023",
            delivered : [
                "Learned all the basics of developpement and computer science, algorithms and data structures",
                "Learned C programming language ",
                "Learned advanced concepts in algebra and calculus and probabilities",
                "First project, a software that aims to manage the university's library", 
                "Advanced concepts in data structures, databases, web developpement, Operating systems, computer architecture and system design ",
                "Learned Java, JavaScript, PHP, Assembly and SQL",
                "Worked with Linux",
                "Custom shopping desktop application for users with admin dashboard using Java", 
                "Website for university's club",
                "Advanced concepts in system design, databases, Operating systems and networking",
                "Website to handle administrative files ",
                "Graduation thesis was about creating a video surveillance system using deep learning and machine learning to detect suspicious people (criminals) in a public place ",
            ], 
            active: "licence" == selectedContent
        }, 
        {
            id:"master",
            year:"Second", 
            degree:"Master's",
            field:"Software Enginnering",
            location:{
                name:"Sorbonne University",
                url:"https://www.sorbonne-universite.fr/#Sciences%20&%20Ing%C3%A9nierie"
            },
            started_date:"August 2023",
            end_date:"September 2025",
            delivered : [
                "Adavanced algorithms and data structures mostly trees and compression algorithms",
                "Learned a bunch of programming such as Ocaml, Golang, Haskell",
                "Creating our programming language using Java and ANTLR called ILP",
                "Creating our programming language using Ocaml and Prolog called APS",
                "Implementing a chat website using basic HTTP handlers and socket handshake using Golang",
                "Studied on new ways to query XML and Xschema and Xpath, Json schema and N1QL , RDF and SPARQL",
                "Implemented a 2D game using haskell", 
                "Conducted a research on new way to fix a json instance that is invalid to a certain Json schema", 
            ], 
            active: "master" == selectedContent
        }, 
    ]
    return [contents,setContent]
}

export {useEducation}