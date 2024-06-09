import React from 'react';
import PricingPlan from '../../components/PricingPlan/PricingPlan';

const PricingSection = () => {

    const plans = [
        {
            id: 1,
            type: 'Personal',
            monthlyPrice: 29,
            yearlyPrice: 59,
            features: [
                'Personal',
                { text: 'Redox Metrics', unlocked: false },
                'Team Collaboration',
                { text: 'Upload Your Document', unlocked: false },
                { text: 'Export PDF', unlocked: false }
            ],
        },
        {
            id: 2,
            type: 'Business',
            monthlyPrice: 49,
            yearlyPrice: 89,
            features: [
                'Personal',
                'Redox Metrics',
                { text: 'Team Collaboration', unlocked: true },
                { text: 'Upload Your Document', unlocked: false },
                { text: 'Export PDF', unlocked: false }
            ],
            hasBadge: true,
            badgeText: 'Save Over 25%',
        },
        {
            id: 3,
            type: 'Enterprise',
            monthlyPrice: 69,
            yearlyPrice: 99,
            features: [
                'Personal',
                'Redox Metrics',
                { text: 'Team Collaboration', unlocked: true },
                { text: 'Upload Your Document', unlocked: true },
                { text: 'Export PDF', unlocked: true }
            ],
        }
    ];

    return (
        <PricingPlan
            plans={plans}
            title={'Our Pricing Plan'}
            titleClass={'title title11'}
            otherClass={'md-mb-100'} 
            spaceingClass={'pt-140 pb-140 md-pt-80 md-pb-80'}
        />
    );
};

export default PricingSection;
