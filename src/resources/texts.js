import {
    productsPictures,
    productsLogo,
    productsAvatars,
    learnMoreIcons,
    startupsIcons,
    toolsLogo,
    employeesImages,
    techologiesIcon
} from "./images"

export const classpassData = {
    introImage: productsPictures.classpassIntro,
    site: "classpass.com",
    siteLink: "https://classpass.com/",
    logo: productsLogo.classpassLogo,
    features: ["Fitness", "Wellness", "Sports"],
    introText: "ClassPass is a monthly fitness membership that lets you work out at over 7,000 of the best studios and" +
        " gyms in your area and worldwide. With a ClassPass membership, you get access to unlimited classes in " +
        "everything from yoga to Pilates to strength training and cycling.",
    productTeam: ["2 Backend developers", "1 Frontend developer", "1 Product Manager", "2 QA Automation Engineers",
        "1 Technical Architect (CTO)"],
    fundingStage: ["Seed to Series B"],
    services: ["Backend Development", "QA Automation", "Technical Architecture"],
    techologies: [],
    challengeText: "Classpass was a web only monolithic platform when they engaged RPS to address performance and " +
        "consistency issues and build a robust and scalable platform.",
    solutionsTexst: "RPS worked closely with the internal product & engineering team to resolve a critical issue related" +
        "to the class reservation process and help the platform to scale during the peak noon booking window. The next " +
        "step for our engagement was to build a robust and scalable API to support ClassPass’ new iOS native app. RPS " +
        "built the API using the BDD process to ensure confidence in the API and provide the use-case documentation via " +
        "functional tests.\n" +
        "\n" +
        "By working closely with the mobile development team, we were able to deliver the initial MVP in three months. " +
        "We continued moving away from the original web platform towards the API-centric platform, and within a year the" +
        " web app was using the API to perform business functions.\n" +
        "\n" +
        "During the summer of 2015 RPS focused on supporting Classpass’ transition from a single subscription plan to a" +
        " multi-tier model. RPS worked closely with the internal team to gather requirements, set expectations, and " +
        "discuss architecture to ensure alignment. End-to-end implementation and testing was completed within two months," +
        " on time for the scheduled announcement date.\n" +
        "\n" +
        "At the end of the work the existing users were seamlessly transitioned to their corresponding plans, supported " +
        "by the new subscription model. RPS implemented a battery of functional tests to ensure the proper implementation" +
        " of the use-cases; this allowed Users to seamlessly upgrade or downgrade their plans based on their needs with " +
        "no interruption of service.",
    results: ["- Fixed the reservation system to prevent overbooking and improved scalability and performance.",
        "-  Launched mobile app MVP within 3 months.", "- Transitioned from monolithic to microservices architecture, i" +
        "mproving the long-term stability of the system", "- Created architecture and released a multi-tier subscription" +
        " model within 2 months.", "- Documented and tested API use-cases using functional tests."],
    businessImpactText: "We began working with ClassPass in 2014 after their seed round. While working with Remedy, " +
        "ClassPass raised a $12M Series A in 2014 and a $40M Series B in early 2015; they raised a $30M B extension in " +
        "late 2015, just after we concluded our engagement.\n" +
        "\n" +
        "ClassPass scaled from a few US cities to serve users nationwide and in select international markets. During " +
        "our 2+ year engagement the engineering team at ClassPass grew from 3 to over 30 with Remedy helping onboard " +
        "and transition core team members."
}

export const b6aData = {
    introImage: productsPictures.b6aIntro,
    site: "blocksixanalytics.com",
    siteLink: "https://www.blocksixanalytics.com/",
    logo: productsLogo.b6aLogo,
    features: ["Sports", "Analytics", "Machine Learning"],
    introText: "Block Six Analytics is a data-driven sports sponsorship management platform and marketplace. Sports " +
        "properties, agencies and brands use B6A’s analytics platform to maximize ROI on their sports sponsorship spend across all advertising channels. Partners include Pepsi, Citi, Miami Heat, Cleveland Browns, Soldier Field (home of the Chicago Bears), and Comcast SportsNet.",
    productTeam: ["2 Backend developers", "1 Frontend developer", "1 Product Manager", "1 UX/UI Designer",
        "1 Technical Architect (CTO)"],
    fundingStage: ["Friends & Family to Series A"],
    services: ["Backend Development", "Frontend Development", "Data Science", "API Development",
        "Product Management", "UX/UI Design", "QA Automation", "Technical Architecture"],
    techologies: [],
    testimonials: {
        avatar: productsAvatars.b6aCeoAvatar,
        name: "Adam Grossman",
        position: "Founder & CEO",
        comment: "\"B6A has leveraged RPS resources to solve difficult challenges for our Software as a Service (SaaS)" +
            " and machine learning platforms. RPS has been able to scale up teams with the specific skill sets critical" +
            " for our past and future growth as a company. We would not be in the position we are in now without the help of RPS.\""

    },
    challengeText: "RPS needed to build the new product, while maintaining support for B6A customers on the existing platform.",
    solutionsTexst: "Block Six Analytics had been in development for over 4 years before engaging RPS. RPS was brought " +
        "in to replace the existing legacy product with a modern, scalable solution. Our design team presented several" +
        " options of how to make the product more user friendly. After the design approach was selected, the team " +
        "created and executed a technical plan to transition from the outdated platform to the new solution.\n" +
        "The legacy platform was built as a monolithic PHP application; the new architecture utilized a combination of " +
        "React/Redux SPA with the support of a custom backend API using Python. Technical steps involved adding initial " +
        "API support to the legacy application and transitioning API’s to the new stack as product development progressed" +
        " to guarantee uninterrupted service. Within 3 months RPS completely replaced the client facing functionality " +
        "and moved on to admin/back office development.\n New features required Machine Learning (Media analysis" +
        " platform) integration to process games and visualize on-screen sponsorship results, Social Sentiment Analysis" +
        " Platform (natural language processing) for Twitter Instagram and Facebook.",
    results: ["- Fixed the reservation system to prevent overbooking and improved scalability and performance.",
        "- Launched web app MVP within 3 months.", "- Integrated released machine learning and natural language " +
        "processing suite.", "- Documented and tested API use-cases using functional tests."],
    businessImpactText: "Remedy worked with Block Six Analytics from 2012 through 2017. During this time Block Six " +
        "Analytics raised a $2M Seed Round, led by Bowery Capital and follow-on funding from notable angel investors, " +
        "including NBA superagent David Falk. B6A grew to service a multitude of sports properties and consumer brands," +
        " including the Detroit Lions, Wisconsin Badgers, and Marketcast."
}

export const walkliData = {
    introImage: productsPictures.walkliIntro,
    site: "walkli.com",
    siteLink: "https://walkli.com/",
    logo: productsLogo.walkliLogo,
    features: ["Travel", "Hospitality", "Tourism"],
    introText: "Walkli provides free walking routes for travelers exploring the world on foot in search of local, " +
        "authentic travel experiences. Maps are crowdsourced from locals, travelers, and bloggers to meet a wide variety" +
        " of interests from classical history to street art, from local dive bars to a city’s best Instagram spots.",
    productTeam: ["1 Backend developer", "1 Frontend developer", "1 part-time Product Manager", "1 UX/UI Designer"],
    fundingStage: ["Friends & Family"],
    services: ["Backend Development", "Frontend Development", "iOS Development", "API Development",
        "Product Management", "UX/UI Design", "QA Automation", "Technical Architecture", "Venture Strategy"],
    techologies: [],
    testimonials: {
        avatar: productsAvatars.walkliCeoAvatar,
        name: "Jeff Peo",
        position: "Founder & CEO",
        comment: "\"I met with a number of development options – both on- and off-shore – before choosing to work with RPS." +
            "  What set them apart was their drive to understand my business and to help determine which features should" +
            " be built out for the MVP vs. future releases.  This has really enabled me to accurately match my strategic" +
            " planning with our technical development.\""

    },
    challengeText: "Walkli did not raise pre-seed funding and was bootstrapped by its Founder. RPS needed to deliver a " +
        "functional application within a limited budget and timeframe to allow walkli to prove its product/market fit " +
        "and raise funding.",
    solutionsTexst: "After product roadmapping, feature scoping, and sizing, RPS and walkli agreed on the parameters and" +
        " deliverables for the first release. RPS’ Product Manager led one week sprints to gauge team development " +
        "velocity, before switching to two week sprints. \n Key Features & Integrations: google Maps API customization" +
        " for custom map creation, admin system with CMS, rich content creation and viewing interfaces, city search " +
        "functionality, user profiles, social media sharing",
    results: ["- RPS released the first version of the web app after 3 months.",
        "- Walkli has retained RPS for continued iteration and feature development since March 2016.",
        "- Future development plans include the release of a mobile app using the web app’s framework."],
    businessImpactText: "After the launch of the MVP web app, walkli successfully raised a Friends & Family round. " +
        "In addition to user growth, walkli successfully launched a travel blogger content partnership program. They " +
        "secured numerous travel and hospitality clients, including Westin Hotels, Hostelling international, the " +
        "Amsterdam tourism board, and Croatia tourism board. Walkli was selected as a MassChallenge 2018 finalist."
}

export const ritualData = {
    introImage: productsPictures.ritualPicture,
    site: "ritual.io",
    siteLink: "https://www.ritual.io/",
    logo: productsLogo.ritualLogo,
    features: ["Wellness"],
    introText: "Ritual is a cross-platform mobile application with a range of audio guided practices that can help " +
                "boost and sustain wellbeing. Rather than focusing on a single practice, Ritual shares a diverse range " +
                "of expert-guided wellbeing practices to find what works for each user. The app collaborates with renowned " +
                "scientific, spiritual and cultural leaders to build their wisdom into guided audio experiences",
    productTeam: ["1 backend developer", "1 frontend developer", "1 designer", "1 product manager"],
    fundingStage: ["Pre-Seed to Seed"],
    techologies: [techologiesIcon.reactIcon, 'React Native', 'FastApi', 'GraphQL', techologiesIcon.terraformIcon,
                techologiesIcon.awsIcon],
    testimonials: {
        avatar: productsAvatars.ritualHeadAvatar,
        name: "Dante Doig-Acuña",
        position: "Head of Product",
        comment: "\"For an early startup like us, working with RPS has been a game-changer. I’d worked with engineering " +
            "agencies in the past, and RPS went so far beyond that. The RPS team has been a key part of product, design, " +
            "and even growth strategy, from the very beginning. This is a crew of startup veterans, so our pace has been " +
            "quick and agile but our infrastructure is built to scale. We couldn’t be happier with this partnership.\""
    },
    challengeText: "Ritual engaged RPS to build a minimum viable product (MVP) in 3 months to receive seed funding.",
    solutionsTexst: "RPS focused on the development of a mobile app and a flexible CMS system. Ritual successfully raised " +
                    "a seed round led by PivotNorth Capital.",
    results: ["RPS released the first version of the iOS platform and CMS app after 3 months. The team focused on gathering " +
            "qualitative and quantitative user feedback to inform the product roadmap. Over the next 6 months the team added " +
            "new features, improved existing features, and released an Android app.",
            "Ritual started working with RPS in August 2019 and has built a strong integrated partnership. The combined team " +
            "continues to work together on new feature development to continue to create a deeper well being experience, " +
            "grow the user base, and expand the expert community. In addition to software development, RPS is heavily involved " +
            "in improving feedback tools and methodologies to engage users and create the best possible experience."],
    businessImpactText: "Ritual raised a seed round led by Tim Connors (Midas List #95) of PivotNorth Capital. The team is " +
                        "seeing consistent user growth, increased user engagement, and revenue growth via subscriptions."
}

export const mbamissionData = {
    introImage: productsPictures.mbamissionPicture,
    site: "mbamission.com",
    siteLink: "https://www.mbamission.com",
    logo: productsLogo.mbaMissionLogo,
    features: ["Education", "Professional Services"],
    introText: "Holistic Health International is a medical diagnostics and supplements company founded by Dr. Amy Yasko, " +
            "Microbiology/Immunology/Infectious Disease specialist and Doctor of Natural Health. Holistic Health specializes " +
            "in neurological research and the treatment of brain diseases using the Yasko Protocol, including holistic " +
            "treatment, alternative therapies, and custom supplements.",
    productTeam: ["1 backend developer", "1 frontend developer", "1 product manager"],
    fundingStage: ["Bootstrapped (not venture funded)"],
    techologies: [techologiesIcon.phpIcon, 'Javascript', ' Slim', 'Laravel', 'MongoDB', techologiesIcon.terraformIcon,
                techologiesIcon.awsIcon],
    testimonials: {
        avatar: productsAvatars.mbamissionDirectorAvatar,
        name: "Aimee Lukin",
        position: "Director of Marketing and Operations",
        comment: "\"Remedy has helped us create and maintain several custom systems to streamline our consulting business. " +
                "As a company with a small team and unique needs, we have relied on RPS every step of the way. They have " +
                "consistently listened to our pain points and come up with creative solutions. We have always appreciated " +
                "their honesty and willingness to work within our budgets. They have been an important partner of ours for " +
                "many years and we fully trust them with our technology needs. \""
    },
    challengeText: "RPS was asked to build and maintain a flexible system for managing the e-commerce platform and a powerful " +
                    "dashboard for managing business needs.",
    solutionsTexst: "RPS developed a Billing and Consultant Solutions dashboard that allowed for deeper integration with the " +
                    "Shopify e-commerce platform.",
    results: ["The CRM system is used for processing purchases and managing consultants’ workflow. The solution allows " +
            "mbaMission administrators and MBA consultants to set availability, track progress, manage their customers, " +
            "and process payments."],
    businessImpactText: "Today mbaMission is the number-one-ranked firm on GMAT Club, with more than 1,000 five-star reviews. " +
                        "mbaMission was named the number one business school admissions consulting firm by Poets&Quants in " +
                        "2019. The technical solution has allowed mbaMission to scale revenue while keeping operational costs " +
                        "low, resulting in a sustainable cash-flow positive company."
}

export const taproomData = {
    introImage: productsPictures.taproomPicture,
    site: "taproom.app",
    siteLink: "https://www.taproom.app",
    logo: productsLogo.tapRoomLogo,
    features: ["Social Media"],
    introText: "TapRoom is a mobile app that allows users to videochat in digital versions of real world venues and bars. " +
            "Users can network, hang out, or learn something in a digital home for their real-world community.",
    productTeam: ["1 full-stack developer", "1 product manager"],
    fundingStage: ["Friends & Family"],
    techologies: [techologiesIcon.reactIcon, techologiesIcon.firebaseIcon, 'Twilio', techologiesIcon.googleMapsIcon,
                'Google Places API'],
    testimonials: {
        avatar: productsAvatars.taproomCeoAvatar,
        name: "Rob Resnick",
        position: "Founder & CEO",
        comment: "\"The team at Remedy was incredible.  They were not only fast and dedicated, but as a first time founder " +
                "I was a little all over the place. They were patient, introduced helpful methodology, and kept everything " +
                "organized. They were a true partner! I found myself looking forward to our calls, and the product turned out "+
                "just as I'd imagined it.\""},
    challengeText: "TapRoom engaged RPS to build a minimum viable product (MVP) to launch early, gather feedback, and iterate " +
                "quickly. Taproom relied on Remedy for leading product strategy, implementing agile development practices, " +
                "and gathering user feedback.",
    solutionsTexst: "RPS implemented a lean development process, focusing on keeping a tight initial feature scope. RPS built " +
                "a cross-platform mobile application, starting with an iOS release.",
    results: ["RPS released an Alpha version of the iOS application in 3 weeks. The team continuously gathered user feedback " +
            "and iterated, releasing updates with new features. After 3 months, we released an open beta to the iOS app store. " +
            "An Android application was released shortly thereafter."],
    businessImpactText: "The application received high ratings and positive reviews. In particular, user testimonials raved " +
                    "about the idea, the look & feel of the app, and novel features, like Whisper. The app has seen user " +
                    "adoption, including large community meetups and networking events."
}

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
        title: 'Looking for a Technical Co-Founder?',
        body: 'On a limited basis, Remedy co-founds companies with talented entrepreneurs who are looking for a technical co-founder. Ideal Founders for this program are industry experts that have a competitive advantage in a large market.'
    },
    {
        title: 'What do we offer?',
        body: 'Remedy provides funding, technical resources, and senior technical and product leadership in exchange for a meaningful equity stake.'
    },
]

export const startupsTexts = [
    {
        title: 'What should we build',
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
        url:'classpass'
    },
    {
        picture: productsPictures.analyticsPicture,
        productName: 'Block Six Analytics',
        featuresArray: ["Sports", "Analytics", "Machine Learning"],
        url:'blocksixanalytics'
    },
    {
        picture: productsPictures.walkliPicture,
        productName: 'Walkli',
        featuresArray: ["Fitness", "Wellness", "Sports"],
        url:'walkli'
    },
    {
        picture: productsPictures.taproomPicture,
        productName: 'Taproom',
        featuresArray:["Social Media"],
        url:'taproom'
    },
    {
        picture: productsPictures.ritualPicture,
        productName: 'Ritual',
        featuresArray:["Wellness"],
        url:'ritual'
    },
    {
        picture: productsPictures.mbamissionPicture,
        productName: 'MbaMission',
        featuresArray: ["Education, Professional Services"],
        url:'mbamission'
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
        projects: [projectsInfo.vend, projectsInfo.classpass, projectsInfo.classpass,]
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
        intro: 'Product manager with a sales background and master’s degree in computer science. Experience with small ' +
            'and big size projects (from 2 to 8 people). Before Egor came to product management, he had been working ' +
            'hard in sales for two years. Later he decided to devote his life to product management, and that he does up' +
            ' to this days. Egor has 6 years of total experinece.',
        interests: ['Product Development', 'Risk Management', 'Board and Computer Games', 'Sports Mafia', 'Snowboarding'],
        methodologies: 'Agile, Waterfall, Kanban',
        expertise: ['Healthcare', 'E-commerce', 'Education', 'Finance'],
        projects: [projectsInfo.vend, projectsInfo.classpass, projectsInfo.vend],
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
        projects: [projectsInfo.vend, projectsInfo.classpass, projectsInfo.classpass, projectsInfo.vend, projectsInfo.vend],
    },
]

