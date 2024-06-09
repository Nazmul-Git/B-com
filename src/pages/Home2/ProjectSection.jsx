import Projects2 from "../../components/Projects/Projects2";

const ProjectSection = ({project1,project2,project3,project4,project5,project6}) => {
    const projectsData = [
        {
            id: 1,
            image: project1,
            category: 'Digital marketing',
            title: 'Market Analysis',
            link: '/portfolio-single',
            filters: ['filter1', 'filter3']
        },
        {
            id: 2,
            image: project2,
            category: 'Financial advisory',
            title: 'Alex Brands',
            link: '/portfolio-single',
            filters: ['filter2', 'filter4']
        },
        {
            id: 3,
            image: project3,
            category: 'Business Services',
            title: 'Business Planning',
            link: '/portfolio-single',
            filters: ['filter3', 'filter4']
        },
        {
            id: 4,
            image: project4,
            category: 'Branding Design',
            title: 'Inventory Report',
            link: '/portfolio-single',
            filters: ['filter3', 'filter2']
        },
        {
            id: 5,
            image: project5,
            category: 'Marketing Service',
            title: 'Risk Management',
            link: '/portfolio-single',
            filters: ['filter2', 'filter4']
        },
        {
            id: 6,
            image: project6,
            category: 'Digital marketing',
            title: 'Risk Management',
            link: '/portfolio-single',
            filters: ['filter4', 'filter2']
        }
    ];

    const categories = [
        { name: 'All', filter: '*' },
        { name: 'Branding Design', filter: 'filter1' },
        { name: 'Business Services', filter: 'filter2' },
        { name: 'Digital marketing', filter: 'filter3' },
        { name: 'Financial advisory', filter: 'filter4' },
        { name: 'Marketing Service', filter: 'filter5' }
    ];

    return (
        <Projects2
            projectsData={projectsData}
            categories={categories}
        />
    );
}
export default ProjectSection;
