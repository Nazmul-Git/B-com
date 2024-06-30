import project1 from '../../../../assets/images/project/style6/pro-1.jpg';
import project2 from '../../../../assets/images/project/style6/pro-2.jpg';
import project3 from '../../../../assets/images/project/style6/pro-3.jpg';
import project4 from '../../../../assets/images/project/style6/pro-4.jpg';
import project5 from '../../../../assets/images/project/style6/pro-5.jpg';
import project6 from '../../../../assets/images/project/style6/pro-6.jpg';
import Projects2 from "../../../../components/Projects/Projects2";

const ProjectSection = () => {
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
            otherClass={'pt-130 pb-130 md-pt-80 md-pb-80'}
            filterClass={'grid-fliter1'}
            isHaveTitle={true}
        />
    );
}
export default ProjectSection;