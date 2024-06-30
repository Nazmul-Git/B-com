import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Importing images
import teamImg1 from '../../assets/images/team/tm1.png';
import teamImg2 from '../../assets/images/team/tm2.png';
import teamImg3 from '../../assets/images/team/tm3.png';
import teamImg4 from '../../assets/images/team/tm4.png';
import TeamCard from '../../components/TeamCard/TeamCard';

const teamData = [
    {
        name: "Dab Ashikur",
        title: "Web Designer",
        imgSrc: teamImg1,
        socialLinks: {
            facebook: "#",
            twitter: "#",
            linkedin: "#"
        }
    },
    {
        name: "Bret Lorem",
        title: "HR Administrator",
        imgSrc: teamImg2,
        socialLinks: {
            facebook: "#",
            twitter: "#",
            linkedin: "#"
        }
    },
    {
        name: "Paul Walker",
        title: "Marketing Executive",
        imgSrc: teamImg3,
        socialLinks: {
            facebook: "#",
            twitter: "#",
            linkedin: "#"
        }
    },
    {
        name: "Steven Hammer",
        title: "Executive Operation",
        imgSrc: teamImg4,
        socialLinks: {
            facebook: "#",
            twitter: "#",
            linkedin: "#"
        }
    }
];

const ProfessionalTeam = () => {
    const [isOpen, setOpen]=useState(false);
    
    return (
        <div className="rs-team team-style1 pt-140 pb-130 md-pt-80 md-pb-70">
            <div className="container custom8">
                <div className="sec-title mb-50 md-mb-35">
                    <h2 className="title title11">
                        Professional Team
                    </h2>
                </div>
                <div className="row">
                    {teamData.map((member, index) => (
                        <TeamCard key={index} member={member} isOpen={isOpen} setOpen={setOpen}/>
                    ))}
                    <div className="col-lg-12 mt-45 text-center">
                        <Link to="/team-single" className="readon consultant appointment get-light">View Team Members</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalTeam;
