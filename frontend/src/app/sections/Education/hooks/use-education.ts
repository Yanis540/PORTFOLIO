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
    const [selectedContent,setSelectedContent] = useState<EducationContentId>("master");
    const setContent = (contentId:EducationContentId)=>setSelectedContent(contentId)
    const contents :EducationalContent[]= [
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
                "Mastered advanced algorithms and data structures, with a focus on trees and compression algorithms.",
                "Learned and practiced several programming languages: OCaml, Golang, Haskell.",
                "Designed and implemented a programming language using Java and ANTLR (ILP).",
                "Created another language using OCaml and Prolog (APS).",
                "Built a basic chat website using Golang with low-level HTTP handlers and WebSocket handshake.",
                "Studied and applied advanced querying techniques for XML (XSchema, XPath), JSON Schema, N1QL, RDF, and SPARQL.",
                "Developed a 2D game entirely in Haskell.", 
                "Conducted research on automatic repair of invalid JSON instances according to a given JSON Schema.", 
                "Programmed autonomous robots for battle simulations and strategy optimization.",
                "Developed a custom search engine using graph algorithms such as Google's PageRank, closeness centrality, and betweenness centrality.",
                "Used the LiSA (Library for Static Analysis) framework to implement static analyzers based on abstract interpretation.",
                "Built a distributed musical orchestra system with Akka and Scala, integrating a complex event-driven architecture and an election system.",
                "Led a team of 5 in building a Minimum Viable Product (MVP), ensuring both technical and organizational success.",
                "Implemented an evaluator and a type inference system, including a Prolog-based type checker and a lexer/parser of a Lambda calculus language (TAS)."
            ], 
            active: "master" == selectedContent
        }, 
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

    ]
    return [contents,setContent]
}

export {useEducation}