


export type Project ={
    title:string 
    description ?: string 
    resume : string 
    technologies:string[]
    github_repo ?: string 
    deployed_link ?: string 
    photo : string

}

const useProjects = ()=>{
    const projects: Project[]=[
        {
            title:"Intelligent Video Surveillance ",
            resume : `Admin dashboard for a real-time facial recognition system using a Raspberry Pi, 
            incorporating facial detection, recognition components and security standards .`,
            description:`This is just a tinny part of what i have built in my bachelor thesis, which consisted of a
                real time facial recongition system. This system consisted of 3 core elements due to the fact that i used 
                a raspberry Pi, a facial detection system that detects the presence of a person, then a facial recognition system 
                which handles the recognition step, then what we deployed is a database and the person's images are saved on cloud. 
                To add a layer of security, we had to use the OAuth2 protocol and encrypted every communication between every system 
                using the famous RSA algorithm.
            `,
            technologies:["TypeScript","React","NodeJs & Express","Prisma","PostgresSql","Vercel", "Pusher",'TailWindCss',"Deep learning","RSA"],
            deployed_link:"https://pfe-frontend-rose.vercel.app",
            photo:"/images/face_recognition.jpg"
        },
        {
            title:"Chat Application ",
            resume : `Chat application that enabled users to login, send messages, and share images in group chats.`,
            description:`One of my oldest projects ! A Chat application allowing authenticated users to login, add and send messages, create group messages and send images. 
                This was not an easy task, because i wanted to do almost every component and every feature, like saving images on the database from scratch 
                without or by minimising the use of external libraries. This was the project that helped to better organize my folder structure and try to 
                use as many reusable components as possible.
            `,
            technologies:["React","NodeJs & Express","Mongodb","Socket.IO",'TailWindCss'],
            github_repo:"https://github.com/Yanis540/CHAT-APPLICATION",
            photo:"/images/Chat-App.PNG"

        },
        {
            title:"Online Store",
            resume:`An online store to pass commands online for a client.
            `,
            technologies:["Wordpress","PHP",'MySQL'],
            github_repo:"https://dev-naz-shop.pantheonsite.io",
            photo:"/images/wordpress.PNG"

        },
        {
            title:"E-commerce website",
            resume:`An online store using the latest technologies. The goal of this project was to familiarize with the NextJS environment  
            `,
            technologies:["NextJs",'Next Auth',"Prisma",'PostgreSql'],
            github_repo:"https://dev-naz-shop.pantheonsite.io",
            photo:"/images/e-commerce2.PNG"
            
        },
    ]
    return projects; 
}

export {
    useProjects
}
