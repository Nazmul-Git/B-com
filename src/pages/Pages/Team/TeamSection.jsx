import React, { useState } from 'react';
import TeamCard from '../../../components/TeamCard/TeamCard';

// Import images for team members
import tm1 from '../../../assets/images/team/tm1.png';
import tm2 from '../../../assets/images/team/tm2.png';
import tm3 from '../../../assets/images/team/tm3.png';
import tm4 from '../../../assets/images/team/tm4.png';
import tm5 from '../../../assets/images/team/tm5.png';
import tm6 from '../../../assets/images/team/tm6.png';
import tm7 from '../../../assets/images/team/tm7.png';
import tm8 from '../../../assets/images/team/tm8.png';

const TeamSection = () => {
    const [isOpen, setOpen]=useState(false);

    const teamMembers = [
        {
            name: "Dab Ashikur",
            title: "Web Designer",
            imgSrc: tm1,
            socialLinks: {
                facebook: "#",
                twitter: "#",
                linkedin: "#"
            }
        },
        {
            name: "Bret Lorem",
            title: "HR Administrator",
            imgSrc: tm2,
            socialLinks: {
                facebook: "#",
                twitter: "#",
                linkedin: "#"
            }
        },
        {
            name: "Paul Walker",
            title: "Marketing Executive",
            imgSrc: tm3,
            socialLinks: {
                facebook: "#",
                twitter: "#",
                linkedin: "#"
            }
        },
        {
            name: "Steven Hammer",
            title: "Executive Operation",
            imgSrc: tm4,
            socialLinks: {
                facebook: "#",
                twitter: "#",
                linkedin: "#"
            }
        },
        {
            name: "John Bradshaw",
            title: "Senior Advisor",
            imgSrc: tm5,
            socialLinks: {
                facebook: "#",
                twitter: "#",
                linkedin: "#"
            }
        },
        {
            name: "Paul Roberts",
            title: "Marketing Manager",
            imgSrc: tm6,
            socialLinks: {
                facebook: "#",
                twitter: "#",
                linkedin: "#"
            }
        },
        {
            name: "Alexandra Stan",
            title: "Management Officer",
            imgSrc: tm7,
            socialLinks: {
                facebook: "#",
                twitter: "#",
                linkedin: "#"
            }
        },
        {
            name: "Claire Divas",
            title: "Chief Executive",
            imgSrc: tm8,
            socialLinks: {
                facebook: "#",
                twitter: "#",
                linkedin: "#"
            }
        }
    ];
    

    return (
        <div className="rs-team team-style1 pt-140 pb-140 md-pt-80 md-pb-80">
            <div className="container custom8">
                <div className="row">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={index} member={member} isOpen={isOpen} setOpen={setOpen}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
