import {useNuxtApp} from "#app";
import type {GroupMenu} from "#fishtvue/menu"
import type {IColumn} from "#fishtvue/table"
import type {Panel} from "#fishtvue/split"


export const menuGroups = (): GroupMenu[] => {
    const {$i18n} = useNuxtApp()
    const {t} = $i18n
    return [
        {

            items: [
                // {
                //     title: "Home",
                //     icon: "lucide:home",
                //     to: "/",
                // },
                {
                    title: "Cards",
                    icon: "lucide:layout-grid",
                    to: "/cards"
                },
                {
                    title: "Inbox",
                    icon: "lucide:inbox",
                    to: "/inbox"
                },
                {
                    title: "Customers",
                    icon: "lucide:users",
                    to: "/customers"
                },
                {
                    title: "Chat",
                    icon: "lucide:message-circle",
                    class: "mb-62",
                    to: "/chat"
                },
                // {
                //     title: "Settings",
                //     icon: "lucide:settings",
                //     to: "/settings"
                // }
            ]
        }
    ];
}
export type Features = Partial<Record<"icon" |
    "iconColor" |
    "bg" |
    "title" |
    "description" |
    "link", string>>
export const features = (): Features[] => {
    const {$i18n} = useNuxtApp()
    const {t} = $i18n
    return [
        {
            icon: 'mdi:view-grid-plus',
            iconColor: 'text-blue-500',
            bg: 'bg-blue-50 dark:bg-blue-950/70',
            title: t("start.features.Components.title"),
            description: t("start.features.Components.description"),
            link: '/components/components'
        },
        {
            icon: 'tabler:palette',
            iconColor: 'text-pink-500',
            bg: 'bg-pink-50 dark:bg-pink-950/70',
            title: t("start.features.Design.title"),
            description: t("start.features.Design.description"),
            link: '/configuration/theming'
        },
        {
            icon: 'mdi:accessibility',
            iconColor: 'text-green-500',
            bg: 'bg-green-50 dark:bg-green-950/70',
            title: t("start.features.Accessibility.title"),
            description: t("start.features.Accessibility.description"),
            link: '/gettingstarted/accessibility#wai-aria'
        },
        {
            icon: 'meteor-icons:language',
            iconColor: 'text-yellow-500',
            bg: 'bg-yellow-50 dark:bg-yellow-950/70',
            title: t("start.features.Internationalization.title"),
            description: t("start.features.Internationalization.description"),
            link: "/configuration/internationalization"
        },
        {
            icon: 'mdi:emoticon-outline',
            iconColor: 'text-purple-500',
            bg: 'bg-purple-50 dark:bg-purple-950/70',
            title: t("start.features.Icons.title"),
            description: t("start.features.Icons.description"),
            link: '/components/misc/icons'
        },
        {
            icon: 'mdi:speedometer',
            iconColor: 'text-red-500',
            bg: 'bg-red-50 dark:bg-red-950/70',
            title: t("start.features.Performance.title"),
            description: t("start.features.Performance.description")
        },
        {
            icon: 'mdi:cellphone',
            iconColor: 'text-teal-500',
            bg: 'bg-teal-50 dark:bg-teal-950/70',
            title: t("start.features.Mobile.title"),
            description: t("start.features.Mobile.description")
        },
        {
            icon: 'mdi:language-typescript',
            iconColor: 'text-cyan-500',
            bg: 'bg-cyan-50 dark:bg-cyan-950/70',
            title: t("start.features.TypeScript.title"),
            description: t("start.features.TypeScript.description")
        }
    ]
}
export const chatPanels = (): Panel[] => {
    return [
        {
            name: 'chats',
            size: 30,
            minSize: 20
        },
        {
            name: 'chat',
            minSize: 50
        }
    ]
}

export type Chat = {
    name: string,
    avatar: string,
    message: string,
    time: string,
    isOnline: boolean,
    newMessages: number,
}
export const chatsData = (): Chat[] => {
    return [
        {
            name: "Fisht Team",
            avatar: "logo.png",
            message: "Hey, did you check out that new café downtown?",
            time: "12:30",
            isOnline: false,
            newMessages: 3
        },
        {
            name: "Emma Wilson",
            avatar: "Emma_Wilson.jpg",
            message: "Hey, did you check out that new café downtown?",
            time: "12:30",
            isOnline: true,
            newMessages: 3
        },
        {
            name: "James Chen",
            avatar: "James_Chen.jpg",
            message: "The project deadline has been extended",
            time: "11:45",
            isOnline: true,
            newMessages: 0
        },
        {
            name: "Sophia Rodriguez",
            avatar: "Sophia_Rodriguez.jpg",
            message: "Thanks for the help yesterday!",
            time: "10:15",
            isOnline: false,
            newMessages: 1
        },
        {
            name: "Lucas Miller",
            avatar: "Lucas_Miller.jpg",
            message: "Are we still meeting today?",
            time: "09:50",
            isOnline: true,
            newMessages: 2
        },
        {
            name: "Olivia Brown",
            avatar: "Olivia_Brown.jpg",
            message: "Just sent you the files",
            time: "Yesterday",
            isOnline: false,
            newMessages: 0
        },
        {
            name: "Ava Johnson",
            avatar: "Ava_Johnson.jpg",
            message: "Can you review my code?",
            time: "Yesterday",
            isOnline: false,
            newMessages: 5
        },
        {
            name: "Ethan Davis",
            avatar: "Ethan_Davis.jpg",
            message: "Movie night on Friday?",
            time: "Yesterday",
            isOnline: true,
            newMessages: 0
        },
        {
            name: "Isabella Garcia",
            avatar: "Isabella_Garcia.jpg",
            message: "The new design looks amazing!",
            time: "Monday",
            isOnline: false,
            newMessages: 0
        },
        {
            name: "Mason Thompson",
            avatar: "Mason_Thompson.jpg",
            message: "Don't forget about the meeting",
            time: "Monday",
            isOnline: true,
            newMessages: 1
        },
        {
            name: "Charlotte Lee",
            avatar: "Charlotte_Lee.jpg",
            message: "How was your weekend?",
            time: "Sunday",
            isOnline: false,
            newMessages: 0
        },
        {
            name: "Alexander Wright",
            avatar: "Alexander_Wright.jpg",
            message: "Check out this new framework",
            time: "Sunday",
            isOnline: true,
            newMessages: 2
        },
        {
            name: "Mia Martinez",
            avatar: "Mia_Martinez.jpg",
            message: "The bug has been fixed",
            time: "Saturday",
            isOnline: false,
            newMessages: 0
        },
        {
            name: "Daniel Anderson",
            avatar: "Daniel_Anderson.jpg",
            message: "Lunch tomorrow?",
            time: "Saturday",
            isOnline: true,
            newMessages: 0
        },
        {
            name: "Sophie Turner",
            avatar: "Sophie_Turner.jpg",
            message: "Great work on the project!",
            time: "Friday",
            isOnline: false,
            newMessages: 3
        },
        {
            name: "David Kim",
            avatar: "David_Kim.jpg",
            message: "Need your feedback on this",
            time: "Friday",
            isOnline: true,
            newMessages: 0
        },
        {
            name: "Emily White",
            avatar: "Emily_White.jpg",
            message: "Happy birthday! 🎉",
            time: "Thursday",
            isOnline: false,
            newMessages: 1
        },
        {
            name: "Michael Scott",
            avatar: "Michael_Scott.jpg",
            message: "That's what she said!",
            time: "Thursday",
            isOnline: true,
            newMessages: 4
        }
    ]
}
export type Message = {
    name: string,
    avatar: string,
    message: string,
    time: string,
    isMe: boolean,
}
export const activeChat = (): Message[] => {
    return [
        {
            name: "William Taylor",
            avatar: "William_Taylor.jpg",
            message: "I've been looking for a good UI library for our new project. Anyone tried fishtvue?",
            time: "10:00",
            isMe: true
        },
        {
            name: "Emma Wilson",
            avatar: "Emma_Wilson.jpg",
            message: "Yes! We're using it on our current project. The component set is amazing - forms, tables, everything you need.",
            time: "10:02",
            isMe: false
        },
        {
            name: "James Chen",
            avatar: "James_Chen.jpg",
            message: "The TypeScript support is really solid. Made our development much more reliable.",
            time: "10:03",
            isMe: false
        },
        {
            name: "Sophia Rodriguez",
            avatar: "Sophia_Rodriguez.jpg",
            message: "We love how easy it is to customize the themes. The TailwindCSS integration is seamless.",
            time: "10:05",
            isMe: false
        },
        {
            name: "Lucas Miller",
            avatar: "Lucas_Miller.jpg",
            message: "Has anyone tried it on mobile? How's the responsiveness?",
            time: "10:07",
            isMe: false
        },
        {
            name: "Olivia Brown",
            avatar: "Olivia_Brown.jpg",
            message: "Works great on mobile! All components are well-adapted for touch interfaces.",
            time: "10:08",
            isMe: false
        },
        {
            name: "Fisht Team",
            avatar: "logo.png",
            message: "Thanks for the feedback everyone! Don't forget about our huge icon set and accessibility features!",
            time: "10:10",
            isMe: false
        },
        {
            name: "William Taylor",
            avatar: "William_Taylor.jpg",
            message: "Sounds perfect! One last question - how's the performance?",
            time: "10:12",
            isMe: true
        },
        {
            name: "Emma Wilson",
            avatar: "Emma_Wilson.jpg",
            message: "Super fast loading times and smooth operation. Plus the i18n support is great for our international users!",
            time: "10:15",
            isMe: false
        },
        {
            name: "William Taylor",
            avatar: "William_Taylor.jpg",
            message: "Sold! Going to start implementing it tomorrow. Thanks everyone!",
            time: "10:17",
            isMe: true
        }
    ]
}

export const mailsPanels = (): Panel[] => {
    return [
        {
            name: 'menu',
            size: 200,
            minSize: 80,
            maxSize: 200
        },
        {
            name: 'mails',
            minSize: 312
        },
        {
            name: 'mail',
            minSize: 380
        }
    ]
}

export const menuMails = (): GroupMenu[] => {
    return [
        {
            // title: "Navigation",
            items: [
                {
                    title: "Inbox",
                    icon: "lucide:inbox",
                    info: "140"
                },
                {
                    title: "Starry",
                    icon: "lucide:star",
                    info: '5'
                },
                {
                    title: "Drafts",
                    icon: "lucide:file",
                    info: '9'
                },
                {
                    title: "Important",
                    icon: "lucide:alert-circle",
                },
                {
                    title: "Sent",
                    icon: "lucide:send",
                },
                {
                    title: "Archive",
                    icon: "lucide:archive",
                },
                {
                    title: "Spam",
                    icon: "lucide:alert-triangle",
                },
                {
                    title: "Trash",
                    icon: "lucide:trash-2",
                }
            ]
        }
    ]
}
type Mail = {
    name: string
    email: string
    avatar: string
    title: string
    text: string
    time: string
    timeFull: string,
    tags: string[],
}
export const dataMails = (): Mail[] => {
    return [
        {
            name: "Fisht Team",
            email: "team@fisht.io",
            avatar: "logo.png",
            title: "Welcome to Fisht UI Library",
            text: "Thank you for choosing Fisht UI! We're excited to help you get started with our component library. In this email, you'll find everything you need to begin building amazing user interfaces: documentation links, setup guides, best practices, and example code. We've also included information about our support channels and community resources. Don't hesitate to reach out if you have any questions!",
            time: "10:00 AM",
            timeFull: "Oct 22, 2023, 10:00:00 AM",
            tags: ["important", "work"]
        },
        {
            name: "Emma Wilson",
            email: "emma.wilson@company.com",
            avatar: "Emma_Wilson.jpg",
            title: "Project Status Update",
            text: "Here's the latest progress report on the dashboard implementation. We've successfully completed the core functionality modules and integrated the new analytics features. The team has resolved 15 high-priority bugs and implemented 3 new feature requests from the client. Performance metrics are showing a 40% improvement in load times. Next steps include finalizing the UI/UX refinements and conducting comprehensive testing across all supported browsers.",
            time: "9:45 AM",
            timeFull: "Oct 22, 2023, 9:45:00 AM",
            tags: ["work"]
        },
        {
            name: "James Chen",
            email: "james.chen@company.com",
            avatar: "James_Chen.jpg",
            title: "Code Review Request",
            text: "Could you please review my latest PR when you have a moment? I've implemented the new authentication system with OAuth2 integration. The changes include updated user flow, improved error handling, and comprehensive unit tests. I've also added documentation for the new endpoints and included migration scripts for existing users. Looking forward to your feedback, particularly on the security implementations and performance optimizations.",
            time: "9:30 AM",
            timeFull: "Oct 22, 2023, 9:30:00 AM",
            tags: ["work", "urgent"]
        },
        {
            name: "Sophia Rodriguez",
            email: "sophia.r@company.com",
            avatar: "Sophia_Rodriguez.jpg",
            title: "New Design Mockups",
            text: "I've finished the new mockups for the mobile app. The designs focus on improving user engagement through a more intuitive navigation system and streamlined checkout process. I've incorporated the latest material design guidelines while maintaining our brand identity. Included are both light and dark mode variants, responsive layouts for different screen sizes, and interactive prototypes for key user flows. Would love to get your thoughts on the new micro-interactions and animation proposals!",
            time: "Yesterday",
            timeFull: "Oct 21, 2023, 10:00:00 AM",
            tags: ["design"]
        },
        {
            name: "Lucas Miller",
            email: "lucas.m@company.com",
            avatar: "Lucas_Miller.jpg",
            title: "Team Meeting Notes",
            text: "Here are the minutes from yesterday's team sync. Key points discussed: 1. Q4 roadmap and priority features 2. Current sprint challenges and solutions 3. Resource allocation for upcoming projects 4. Technical debt reduction strategy 5. New hiring plans for the backend team. Action items have been assigned in Jira. Next week's focus will be on scaling our infrastructure and improving our CI/CD pipeline. Please review and let me know if I missed anything important.",
            time: "Yesterday",
            timeFull: "Oct 21, 2023, 2:00:00 PM",
            tags: ["work"]
        },
        {
            name: "Olivia Brown",
            email: "olivia.b@company.com",
            avatar: "Olivia_Brown.jpg",
            title: "Holiday Schedule",
            text: "Please review the upcoming holiday schedule and coverage plan. We're implementing a new rotation system to ensure adequate support during the holiday season while allowing everyone to enjoy some time off. The schedule includes backup contacts for critical systems, emergency response procedures, and on-call rotations. I've also attached the updated PTO policy and guidelines for remote work during holiday periods. Please confirm your availability by end of week.",
            time: "2 days ago",
            timeFull: "Oct 20, 2023, 11:30:00 AM",
            tags: ["important"]
        },
        {
            name: "Ava Johnson",
            email: "ava.j@company.com",
            avatar: "Ava_Johnson.jpg",
            title: "Bug Report: Login Issues",
            text: "Users are reporting intermittent login failures in production. Initial investigation shows potential issues with the session management system and database connection pooling. Impact: Approximately 15% of login attempts failing during peak hours. Temporary workaround has been implemented while we investigate root cause. Current theories: 1. Recent CDN configuration changes 2. Database connection limits 3. Caching layer inconsistencies. Need immediate attention from the infrastructure team.",
            time: "2 days ago",
            timeFull: "Oct 20, 2023, 3:15:00 PM",
            tags: ["bug", "urgent"]
        },
        {
            name: "Ethan Davis",
            email: "ethan.d@company.com",
            avatar: "Ethan_Davis.jpg",
            title: "Weekend Team Building Event",
            text: "Don't forget about our team building activity this Saturday! We've planned an exciting day of outdoor activities and team challenges. The schedule includes morning yoga, team strategy games, and an afternoon cooking competition. There will be prizes for the winning teams! Location: Central Park. Time: 9 AM - 4 PM. Please let me know about any dietary restrictions or accessibility requirements. Remember to bring comfortable clothes and your team spirit!",
            time: "3 days ago",
            timeFull: "Oct 19, 2023, 9:00:00 AM",
            tags: ["social"]
        },
        {
            name: "Isabella Garcia",
            email: "isabella.g@company.com",
            avatar: "Isabella_Garcia.jpg",
            title: "New Feature Proposal",
            text: "I have an idea for improving our user onboarding process based on recent user feedback and analytics data. The proposal includes a redesigned welcome flow, interactive tutorials, and contextual help system. Initial estimates suggest this could reduce our user drop-off rate by 30% and improve feature adoption metrics. I've prepared a detailed presentation with mockups, implementation timeline, and resource requirements. Would love to discuss this in detail during next week's product meeting.",
            time: "4 days ago",
            timeFull: "Oct 18, 2023, 2:30:00 PM",
            tags: ["feature"]
        },
        {
            name: "Mason Thompson",
            email: "mason.t@company.com",
            avatar: "Mason_Thompson.jpg",
            title: "Security Update Required",
            text: "Please update your passwords according to the new security policy. Recent security audits have identified several areas for improvement in our system access protocols. Key changes: 1. Minimum 12-character passwords 2. Multi-factor authentication mandatory for all employees 3. New password rotation schedule 4. Updated VPN access protocols 5. Enhanced logging for sensitive operations. Detailed instructions attached. Compliance deadline: End of next week.",
            time: "4 days ago",
            timeFull: "Oct 18, 2023, 10:45:00 AM",
            tags: ["important", "security"]
        },
        {
            name: "Charlotte Lee",
            email: "charlotte.l@company.com",
            avatar: "Charlotte_Lee.jpg",
            title: "Client Feedback Summary",
            text: "Here's what our users are saying about the latest release. Overall satisfaction score: 4.2/5. Key highlights: Improved performance (92% positive), New UI design (88% positive), Enhanced search functionality (95% positive). Areas for improvement: Mobile responsiveness, Error message clarity, Documentation completeness. I've attached the full report with detailed analytics and user interviews. Several users have volunteered for follow-up research sessions.",
            time: "5 days ago",
            timeFull: "Oct 17, 2023, 4:00:00 PM",
            tags: ["feedback"]
        },
        {
            name: "Alexander Wright",
            email: "alex.w@company.com",
            avatar: "Alexander_Wright.jpg",
            title: "API Documentation Updates",
            text: "I've updated the API docs with the new endpoints. Changes include: Comprehensive endpoint descriptions, Request/response examples, Authentication details, Rate limiting information, Error handling guidelines. The documentation now features interactive examples using OpenAPI Specification 3.0. Also added new sections on websocket integration and batch processing capabilities. Please review the changes and let me know if you spot any inconsistencies.",
            time: "5 days ago",
            timeFull: "Oct 17, 2023, 1:20:00 PM",
            tags: ["documentation"]
        },
        {
            name: "Mia Martinez",
            email: "mia.m@company.com",
            avatar: "Mia_Martinez.jpg",
            title: "Performance Testing Results",
            text: "The latest performance metrics are looking good. Load testing results show 99.9% uptime under simulated peak conditions. Average response time: 120ms (down from 200ms). Server resource utilization optimized by 25%. Cache hit ratio improved to 95%. Identified minor bottlenecks in the database queries which will be addressed in the next sprint. Full report with graphs and recommendations attached.",
            time: "6 days ago",
            timeFull: "Oct 16, 2023, 11:00:00 AM",
            tags: ["testing"]
        },
        {
            name: "Daniel Anderson",
            email: "daniel.a@company.com",
            avatar: "Daniel_Anderson.jpg",
            title: "Deployment Schedule",
            text: "Here's the deployment timeline for next week. Major updates include: New payment processing system, Enhanced search functionality, UI/UX improvements, Database optimization patches. Deployment windows: Tuesday 2 AM - 6 AM EST. Rollback procedures and monitoring protocols are in place. All teams please verify your components are ready for deployment and update the pre-deployment checklist. Change management tickets have been created.",
            time: "1 week ago",
            timeFull: "Oct 15, 2023, 3:45:00 PM",
            tags: ["deployment"]
        },
        {
            name: "Sophie Turner",
            email: "sophie.t@company.com",
            avatar: "Sophie_Turner.jpg",
            title: "Marketing Campaign Draft",
            text: "Please review the draft for our upcoming campaign. The strategy focuses on highlighting our platform's unique features and competitive advantages. Campaign elements include: Social media content calendar, Email marketing sequences, Blog post series, Video testimonials, Partnership announcements. Target metrics: 50% increase in sign-ups, 30% boost in engagement rates. Budget allocation and timeline details are in the attached presentation.",
            time: "1 week ago",
            timeFull: "Oct 15, 2023, 10:30:00 AM",
            tags: ["marketing"]
        },
        {
            name: "David Kim",
            email: "david.k@company.com",
            avatar: "David_Kim.jpg",
            title: "Budget Review Meeting",
            text: "Let's schedule a meeting to review Q3 budget. Topics to cover: Department expenditure analysis, Resource allocation efficiency, ROI on recent investments, Projected Q4 spending, Cost optimization opportunities. I've prepared a detailed financial report comparing actual vs. budgeted expenses. Special focus needed on the infrastructure scaling costs and new hire onboarding expenses. Please come prepared with your department's budget requirements for Q4.",
            time: "1 week ago",
            timeFull: "Oct 15, 2023, 9:15:00 AM",
            tags: ["finance"]
        },
        {
            name: "Emily White",
            email: "emily.w@company.com",
            avatar: "Emily_White.jpg",
            title: "New Office Guidelines",
            text: "Important updates to our office policies. Changes include: Updated hybrid work schedule, New meeting room booking system, Revised security protocols, Updated visitor policy, Equipment checkout procedures. These changes aim to improve office efficiency and maintain a safe working environment. The new policies will take effect from next month. Training sessions will be conducted next week to familiarize everyone with the new systems.",
            time: "2 weeks ago",
            timeFull: "Oct 8, 2023, 2:00:00 PM",
            tags: ["important"]
        },
        {
            name: "Michael Scott",
            email: "michael.s@company.com",
            avatar: "Michael_Scott.jpg",
            title: "Team Lunch Plan",
            text: "Who's up for lunch at that new place downtown? They've got amazing reviews for their international cuisine and vegetarian options. I was thinking we could use this as an opportunity to celebrate our recent project success and discuss some team building ideas in a casual setting. They have private dining rooms perfect for our group size. Looking at this Thursday around 12:30 PM. Please reply with your dietary preferences and availability.",
            time: "2 weeks ago",
            timeFull: "Oct 8, 2023, 11:30:00 AM",
            tags: ["social"]
        }
    ]
}
export const dataCustomers = ()=> {
    return [
        {
            name: "Emma Wilson",
            avatar: "Emma_Wilson.jpg",
            email: "emma.wilson@example.com",
            age: 28,
            location: "New York, NY",
            occupation: "Graphic Designer",
            position: "Senior Designer",
            lastActive: "2025-05-04T14:30:00Z",
            status: "Active"
        },
        {
            name: "James Chen",
            avatar: "James_Chen.jpg",
            email: "james.chen@example.com",
            age: 34,
            location: "San Francisco, CA",
            occupation: "Software Engineer",
            position: "Lead Engineer",
            lastActive: "2025-05-05T09:15:00Z",
            status: "Active"
        },
        {
            name: "Sophia Rodriguez",
            avatar: "Sophia_Rodriguez.jpg",
            email: "sophia.rodriguez@example.com",
            age: 25,
            location: "Miami, FL",
            occupation: "Marketing Specialist",
            position: "Marketing Coordinator",
            lastActive: "2025-05-03T20:45:00Z",
            status: "Inactive"
        },
        {
            name: "Lucas Miller",
            avatar: "Lucas_Miller.jpg",
            email: "lucas.miller@example.com",
            age: 52,
            location: "Chicago, IL",
            occupation: "Data Analyst",
            position: "Data Scientist",
            lastActive: "2025-05-05T11:20:00Z",
            status: "Active"
        },
        {
            name: "Olivia Brown",
            avatar: "Olivia_Brown.jpg",
            email: "olivia.brown@example.com",
            age: 27,
            location: "Austin, TX",
            occupation: "Product Manager",
            position: "Associate Product Manager",
            lastActive: "2025-05-04T16:50:00Z",
            status: "Active"
        },
        {
            name: "Ava Johnson",
            avatar: "Ava_Johnson.jpg",
            email: "ava.johnson@example.com",
            age: 22,
            location: "Seattle, WA",
            occupation: "Content Creator",
            position: "Social Media Influencer",
            lastActive: "2025-05-05T07:30:00Z",
            status: "Active"
        },
        {
            name: "Ethan Davis",
            avatar: "Ethan_Davis.jpg",
            email: "ethan.davis@example.com",
            age: 29,
            location: "Boston, MA",
            occupation: "Financial Advisor",
            position: "Wealth Management Consultant",
            lastActive: "2025-05-04T22:10:00Z",
            status: "Inactive"
        },
        {
            name: "Isabella Garcia",
            avatar: "Isabella_Garcia.jpg",
            email: "isabella.garcia@example.com",
            age: 31,
            location: "Los Angeles, CA",
            occupation: "UX Designer",
            position: "Lead UX Designer",
            lastActive: "2025-05-05T13:40:00Z",
            status: "Active"
        },
        {
            name: "Mason Thompson",
            avatar: "Mason_Thompson.jpg",
            email: "mason.thompson@example.com",
            age: 26,
            location: "Denver, CO",
            occupation: "Web Developer",
            position: "Frontend Developer",
            lastActive: "2025-05-05T10:25:00Z",
            status: "Active"
        },
        {
            name: "Charlotte Lee",
            avatar: "Charlotte_Lee.jpg",
            email: "charlotte.lee@example.com",
            age: 33,
            location: "Portland, OR",
            occupation: "HR Manager",
            position: "HR Business Partner",
            lastActive: "2025-05-04T19:00:00Z",
            status: "Inactive"
        },
        {
            name: "Alexander Wright",
            avatar: "Alexander_Wright.jpg",
            email: "alexander.wright@example.com",
            age: 35,
            location: "Atlanta, GA",
            occupation: "Architect",
            position: "Senior Architect",
            lastActive: "2025-05-05T08:55:00Z",
            status: "Active"
        },
        {
            name: "Mia Martinez",
            avatar: "Mia_Martinez.jpg",
            email: "mia.martinez@example.com",
            age: 24,
            location: "Phoenix, AZ",
            occupation: "Social Media Manager",
            position: "Digital Marketing Specialist",
            lastActive: "2025-05-05T12:15:00Z",
            status: "Active"
        },
        {
            name: "Daniel Anderson",
            avatar: "Daniel_Anderson.jpg",
            email: "daniel.anderson@example.com",
            age: 32,
            location: "Houston, TX",
            occupation: "Civil Engineer",
            position: "Project Engineer",
            lastActive: "2025-05-04T17:35:00Z",
            status: "Inactive"
        },
        {
            name: "Sophie Turner",
            avatar: "Sophie_Turner.jpg",
            email: "sophie.turner@example.com",
            age: 29,
            location: "San Diego, CA",
            occupation: "Teacher",
            position: "High School Teacher",
            lastActive: "2025-05-05T06:45:00Z",
            status: "Active"
        },
        {
            name: "David Kim",
            avatar: "David_Kim.jpg",
            email: "david.kim@example.com",
            age: 28,
            location: "Philadelphia, PA",
            occupation: "Cybersecurity Analyst",
            position: "Security Consultant",
            lastActive: "2025-05-05T14:00:00Z",
            status: "Active"
        },
        {
            name: "Emily White",
            avatar: "Emily_White.jpg",
            email: "emily.white@example.com",
            age: 26,
            location: "Minneapolis, MN",
            occupation: "Journalist",
            position: "Investigative Reporter",
            lastActive: "2025-05-04T21:20:00Z",
            status: "Inactive"
        },
        {
            name: "Michael Scott",
            avatar: "Michael_Scott.jpg",
            email: "michael.scott@example.com",
            age: 40,
            location: "Scranton, PA",
            occupation: "Regional Manager",
            position: "Branch Manager",
            lastActive: "2025-05-05T15:10:00Z",
            status: "Active"
        }
    ]
}
export const columnsCustomers = ():IColumn[]=> {
    return [
        {
            name: "name",
            type: "string",
            dataField: "name",
            cellTemplate: "name",
            isFilter: true
        },
        {
            name: "occupation",
            type: "select",
            dataField: "occupation",
            isFilter: true
        },
        {
            name: "position",
            type: "select",
            dataField: "position",
            isFilter: true
        },
        {
            name: "location",
            dataField: "location",
            caption: "Address",
            type: "select",
            isFilter: true
        },
        {
            name: "status",
            type: "select",
            dataField: "status",
            cellTemplate: "status",
            isFilter: true,
            maxWidth: 100
        },
    ]
}