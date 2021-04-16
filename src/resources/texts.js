import {
    productsPictures,
    learnMoreIcons,
    startupsIcons,
    toolsLogo,
    employeesImages,
} from "./images"

export const cardsItems = [
    {
        title: 'startups',
        image: learnMoreIcons.startups,
        text: 'For startups, RPS helps with overall strategy to assist founders with building and taking their products to market.',
    },
    {
        title: 'enterprise',
        image: learnMoreIcons.enterprise,
        text: 'For enterprise companies, RPS applies their startup expertise to implement nimble digital transformations.',
    },
    {
        title: 'investment',
        image: learnMoreIcons.investment,
        text: 'RPS invests in select companies across industries. You can find investment criteria here.',
    },
]

export const invesmentTexts = [
    {
        title: 'Why remedy product studio?',
        body: 'Our experience working with venture backed startups gives us insight into what a company needs to demonstrate to successfully raise its next round of funding. We know the importance of hitting key metrics to demonstrate product-market fit and growth potential.'
    },
    {
        title: 'How does it work?',
        body: 'We help startups prepare for fundraising by crafting the narrative, preparing the pitch, and ensuring you can demonstrate product-market fit. We actively connect startups with angels and venture capitalists in our network. During the fundraising process we help with deck preparation, pitch practice, and technical due diligence.'
    },
    {
        title: 'Who do we cooperate with?',
        body: 'On a limited basis, Remedy co-founds companies with talented entrepreneurs who are looking for a technical co-founder. Ideal Founders for this program are industry experts that have a competitive advantage in a large market.'
    },
    {
        title: 'What do we offer?',
        body: 'Remedy provides funding, technical resources, and senior technical and product leadership in exchange for a meaningful equity stake.'
    },
]

export const startupsTexts = [
    {
        title: 'What should you build',
        name: 'strategy',
        image: startupsIcons.oneIcon,
        body: 'We will sit down with you to understand your long term goals, business objectives, KPI’s, and budget to create an effective strategy to take your product to market. Our extensive network allows us to make strategic introductions for our partners to VCs, potential clients, and other resources to accelerate growth.'
    },
    {
        title: 'How should you build it?',
        name: 'execution',
        image: startupsIcons.twoIcon,
        body: 'We will work with you to execute your product in the most efficient way possible. We use lean development practices and believe in releasing early and iterating often. We will consider using off the shelf tools, APIs, and custom code to see what best fits your company’s needs. Our MVPs are built in around 8 weeks and we institute analytics, reporting, and user interviews to iterate based on user feedback.'
    },
    {
        title: 'When and how should you deploy?',
        name: 'launch',
        image: startupsIcons.threeIcon,
        body: 'The RPS team will create a deployment strategy for when your product is ready to hit the market. We work closely with your team and make sure we have an understanding of your stakeholders expectations as we plan the launch. Once released, RPS implements reporting & analytics tools to gather qualitative and quantitative feedback.'
    },
    {
        title: 'How will you grow it',
        name: 'investment',
        image: startupsIcons.fourIcon,
        body: 'RPS invests in select companies across industries. You can find requirements for investment here.' +
            ' In addition to our own investment, we work with a network of angels and venture capitalists to match' +
            ' startups to the best investor fits. We help startups prepare for fundraising by crafting the narrative,' +
            ' preparing the pitch, and ensuring you are hitting key metrics to demonstrate product-market fit.'
    },

]

export const cases = [
    {
        picture: productsPictures.classpassPicture,
        productName: 'Classpass',
        featuresArray: ["Fitness", "Wellness", "Sports"],
        url: 'classpass'
    },
    {
        picture: productsPictures.analyticsPicture,
        productName: 'Block Six Analytics',
        featuresArray: ["Sports", "Analytics", "Machine Learning"],
        url: 'blocksixanalytics'
    },
    {
        picture: productsPictures.ritualPicture,
        productName: 'Ritual',
        featuresArray: ["Wellness", "Mental Health", "Education"],
        url: 'ritual'
    },
    {
        picture: productsPictures.walkliPicture,
        productName: 'Walkli',
        featuresArray: ["Travel", "Leisure", "Hospitality"],
        url: 'walkli'
    },
    {
        picture: productsPictures.taproomPicture,
        productName: 'Taproom',
        featuresArray: ["Social Media", "Video Chat", "Community"],
        url: 'taproom'
    },
    {
        picture: productsPictures.mbamissionPicture,
        productName: 'MbaMission',
        featuresArray: ["Education", "Professional Services"],
        url: 'mbamission'
    },
]

export const projectsInfo = {
    vend: {
        name: 'Vend',
        image: productsPictures.vendInfo,
        info: 'ClassPass is a monthly fitness membership that lets you work out at over 7,000 of the best.'
    },
    classpass: {
        name: 'Classpass',
        image: productsPictures.classpassInfo,
        info: 'ClassPass is a monthly fitness membership that lets you work out at over 7,000 of the best.'
    },
    gradGab: {
        name: 'GradGab',
        image: productsPictures.classpassInfo,
        info: 'ClassPass is a monthly fitness membership that lets you work out at over 7,000 of the best.'
    }, 
    zeamo: {
        name: 'Zeamo',
        image: productsPictures.vendInfo,
        info: 'ClassPass is a monthly fitness membership that lets you work out at over 7,000 of the best.'
    },
    ritual: {
        name: 'Ritual',
        image: productsPictures.classpassInfo,
        info: 'ClassPass is a monthly fitness membership that lets you work out at over 7,000 of the best.'
    },
    mbaMission: {
        name: 'MbaMission',
        image: productsPictures.classpassInfo,
        info: 'ClassPass is a monthly fitness membership that lets you work out at over 7,000 of the best.'
    },
    walkli: {
        name: 'Walkli',
        image: productsPictures.vendInfo,
        info: 'ClassPass is a monthly fitness membership that lets you work out at over 7,000 of the best.'
    },
    onePlayce: {
        name: 'OnePlayce',
        image: productsPictures.vendInfo,
        info: 'ClassPass is a monthly fitness membership that lets you work out at over 7,000 of the best.'
    },
    healthReveal: {
        name: 'Health Reveal',
        image: productsPictures.classpassInfo,
        info: 'ClassPass is a monthly fitness membership that lets you work out at over 7,000 of the best.'
    }
}

export const employeesInfo = [
    {
        id: 1,
        name: 'Egor Naganov',
        photo: employeesImages.naganovPhoto,
        avatar: employeesImages.naganovIcon,
        position: 'Product Manager',
        intro: 'Product manager with a sales background and master’s degree in computer science. Experience with small ' +
            'and big size projects (from 2 to 8 people). Before Egor came to product management, he had been working ' +
            'hard in sales for two years. Later he decided to devote his life to product management, and that he does up' +
            ' to this days. Egor has 6 years of total experinece.',
        interests: ['Product Development', 'Risk Management', 'Board and Computer Games', 'Sports Mafia', 'Snowboarding'],
        methodologies: 'Agile, Waterfall, Kanban',
        expertise: ['Healthcare', 'E-commerce', 'Education', 'Finance'],
        projects: [projectsInfo.vend, projectsInfo.gradGab]
    },
    {
        id: 2,
        name: 'Igor “Iggy” Moliver',
        photo: employeesImages.moliverPhoto,
        avatar: employeesImages.moliverIcon,
        position: 'Managing Partner, Head of Product',
        intro: 'Igor "Iggy" Moliver is an investor, advisor, and product leader. He is Managing Partner and Head of ' +
            'Product & Strategy at Remedy Product Studio. Iggy has spent the last 10 years working on technology ' +
            'products. Iggy started his career in the sports media and marketing world, first at a hockey representation' +
            ' agency and later at ESPN. As an Analyst in the Programming department at ESPN, he was on the launch team ' +
            'for the WatchESPN streaming app. \n \n Iggy left the corporate world to launch OnePlayce, a social media data ' +
            'science company, where he partnered with Remedy to deliver an enterprise SaaS product. Iggy is Chairman of ' +
            'the Tufts Entrepreneurial Network, serves as a product mentor for accelerator/educational programs, and is' +
            ' a member of several angel investor groups. Iggy graduated from Tufts University with a degree in Political' +
            ' Science and Entrepreneurial Leadership. \n \n He lives in New York with his fiance Katya and dog Ollie,' +
            ' commonly referred to as the cutest most adorable dog in the world (by his niece). Iggy enjoys hiking,' +
            ' playing tennis, trying weird beers, and getting his hopes up/destroyed by New York sports teams.',
        expertise: ['Healthcare', 'Wellness', 'Sports'],
    },
    {
        id: 3,
        name: 'Oleg Kruk',
        photo: employeesImages.krukPhoto,
        avatar: employeesImages.krukIcon,
        position: 'Managing Partner, Head of Product',
        intro: 'Oleg Krook is Co-Founder and Managing Partner (Head of Engineering) of Remedy Product Studio. Oleg has ' +
            'over 20 years of technical experience, during which he has played key roles in architecting complex ' +
            'systems, creating engineering culture, and scaling technical solutions to millions of users. \n \n As Director' +
            ' of Engineering at Classpass, Oleg helped the company grow from Seed to Series B by solving key technical ' +
            'challenges, such as delivering the first API services for the initial mobile app and leading a team of ' +
            'engineers in creating a flexible membership model. As CTO at Block Six Analytics, Oleg built an agile ' +
            'product and engineering team to integrate their R&D Machine Learning department into the development ' +
            'cycle. As CTO at Zeamo, Oleg introduced microservice architecture to support the rapid development of ' +
            'business goals and objectives. Oleg previously served in engineering leadership roles at Amplify ' +
            'Education and Coherent Solutions.\n \n Oleg has a degree in Computer Science from Belarus State University.' +
            ' He lives in New Jersey with his daughter Michelle, dog Chucky, and cat Ginger. He enjoys Formula 1 ' +
            'Racing, Sci-Fi movies, and driving like he’s a stuntman in the Fast and the Furious.',
        expertise: ['Healthcare', 'Wellness', 'Sports'],
    },
    {
        id: 4,
        name: 'Sergey Kuzmich',
        photo: employeesImages.kuzmichPhoto,
        avatar: employeesImages.kuzmichIcon,
        position: 'Director of Engineering',
        intro: 'Web Engineer with 10 years of experience. Sergey is in love with web technologies and services. Another ' +
            'passion is development and deployment automatization.',
        interests: ['Gaming', 'Driving', 'Media Creation'],
        methodologies: 'Agile, Waterfall, Kanban',
        expertise: ['Back-end & DevOps engineering', 'SaaS solutions', 'Processes automatization',
            'Private CRM tools'],
        projects: [projectsInfo.onePlayce, projectsInfo.zeamo, projectsInfo.mbaMission],
        tools: [toolsLogo.firebaseLogo, toolsLogo.kotlinLogo, toolsLogo.reactLogo, toolsLogo.html5Logo,
            toolsLogo.phpLogo, toolsLogo.androidLogo, toolsLogo.iosLogo]
    },
    {
        id: 5,
        name: 'Sergey Zaytsev',
        photo: employeesImages.zaytsevPhoto,
        avatar: employeesImages.zaytsevIcon,
        position: 'Senior Product Manager',
        intro: 'Senior Product Manager with a strong technical background. Before starting his path in product ' +
            'management, Sergey has been a full-stack engineer specializing in web projects, successfully executing ' +
            'frontend tasks and implementing backend logic.',
        interests: ['Analytics and SEO', 'Rafting', 'Eurotrips', 'Books & Movies'],
        methodologies: 'Agile, Waterfall, Kanban',
        expertise: ['Healthcare', 'Wellness', 'Data & Analytics', 'Education', 'Fitness'],
        projects: [projectsInfo.zeamo, projectsInfo.ritual, projectsInfo.mbaMission, projectsInfo.walkli,
            projectsInfo.onePlayce],
    },
    {
        id: 6,
        name: 'Alexander Protasenya',
        photo: employeesImages.protasenyaPhoto,
        avatar: employeesImages.protasenyaIcon,
        position: 'Technical Team Lead',
        intro: 'Solid experience in developing Python, SQL and JavaScript app services.' +
                'Extensive experience with version control systems (Git/SVN). Experience with integrating ' +
                'common third-party APIs. DevOps expertise using AWS, Docker Swarm, Kubernetes, Travis, ' +
                'GitlabCI, Github Actions.',
        interests: ['Software development', 'Christianity', 'Quantum mechanics', 'Movie comics'],
        methodologies: 'Agile, Waterfall, Kanban',
        expertise: ['Backend development', 'DevOps', 'Software Architecture'],
        projects: [projectsInfo.zeamo, projectsInfo.gradGab, projectsInfo.healthReveal],
    },
]

