import SiteContentData from '../SiteContent.json';
 
function About (){

        return (
        <div className="container mx-auto py-24 sm:py-32">
            <div className="container my-10">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    About Us
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    {SiteContentData.aboutUs}
                </p>
            </div>
            <div className="devs">
                <div className="flex flex-col justify-between p-4 leading-normal">
                    
                    <h3 className="font-bold tracking-tight text-gray-900 sm:text-2xl">
                        Our Mission
                    </h3>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {SiteContentData.ourMission}
                    </p>                    
                    <h3 className="font-bold tracking-tight text-gray-900 sm:text-2xl">
                        Our Approach
                    </h3>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {SiteContentData.ourApproach}
                    </p>
                    
                    <h3 className="font-bold tracking-tight text-gray-900 sm:text-2xl">
                        Our Commitment
                    </h3>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {SiteContentData.ourCommitment}
                    </p>
                </div>
            </div>
        </div>
        );
    }

export default About;